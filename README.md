const $ = (sel) => document.querySelector(sel);

async function api(url, options = {}) {
  const res = await fetch(url, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || '请求失败');
  return data;
}

function setAdminMessage(text, type = 'info') {
  const el = $('#adminMessage');
  el.textContent = text;
  el.style.color = type === 'error' ? '#8f2418' : '#652a15';
}

function showDashboard() {
  $('#adminLogin').classList.add('hidden');
  $('#adminDashboard').classList.remove('hidden');
}
function showLogin() {
  $('#adminLogin').classList.remove('hidden');
  $('#adminDashboard').classList.add('hidden');
}

$('#adminLoginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  try {
    await api('/admin/api/login', { method: 'POST', body: JSON.stringify({ password: form.get('password') }) });
    e.currentTarget.reset();
    showDashboard();
    loadState();
  } catch (err) {
    setAdminMessage(err.message, 'error');
  }
});

$('#adminLogoutBtn').addEventListener('click', async () => {
  await api('/admin/api/logout', { method: 'POST' }).catch(() => {});
  showLogin();
});
$('#adminRefreshBtn').addEventListener('click', loadState);

async function loadState() {
  try {
    const data = await api('/admin/api/state');
    showDashboard();
    renderUsers(data.users || []);
    renderOrders(data.orders || []);
  } catch (err) {
    showLogin();
    setAdminMessage('请先输入管理员密码。');
  }
}

function renderUsers(users) {
  const box = $('#usersTable');
  if (!users.length) {
    box.innerHTML = '<p class="muted">暂无注册用户。</p>';
    return;
  }
  box.innerHTML = `
    <table>
      <thead><tr><th>邮箱</th><th>注册时间</th><th>最后登录</th></tr></thead>
      <tbody>
        ${users.map(u => `<tr><td>${escapeHtml(u.email)}</td><td>${formatTime(u.createdAt)}</td><td>${u.lastLoginAt ? formatTime(u.lastLoginAt) : '-'}</td></tr>`).join('')}
      </tbody>
    </table>
  `;
}

function renderOrders(orders) {
  const box = $('#ordersTable');
  if (!orders.length) {
    box.innerHTML = '<p class="muted">暂无订单。</p>';
    return;
  }
  box.innerHTML = orders.map(o => `
    <article class="admin-order-card" data-order-id="${o.id}">
      <div class="meta">
        <p><strong>${escapeHtml(o.planName)}</strong> · ¥${o.amount}</p>
        <p>邮箱：${escapeHtml(o.email)}</p>
        <p>状态：<span class="status">${escapeHtml(o.status)}</span></p>
        <p>提交时间：${formatTime(o.createdAt)}</p>
        <p>处理状态：${o.emailSendStatus ? escapeHtml(o.emailSendStatus) : '-'}</p>
        ${o.emailError ? `<p class="tiny">提示：${escapeHtml(o.emailError)}</p>` : ''}
      </div>
      <form class="nodeForm">
        <label>节点内容 / 订阅链接</label>
        <textarea name="nodeText" placeholder="在这里粘贴节点、订阅链接或使用说明，保存后用户登录即可看到。">${escapeHtml(o.nodeText || '')}</textarea>
        <button class="primary" type="submit">保存节点</button>
      </form>
    </article>
  `).join('');

  document.querySelectorAll('.nodeForm').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const card = e.currentTarget.closest('[data-order-id]');
      const id = card.dataset.orderId;
      const nodeText = new FormData(e.currentTarget).get('nodeText');
      try {
        const data = await api(`/admin/api/orders/${id}/send-node`, {
          method: 'POST',
          body: JSON.stringify({ nodeText })
        });
        alert(data.message || '已处理。');
        await loadState();
      } catch (err) {
        alert(err.message);
        await loadState().catch(() => {});
      }
    });
  });
}

function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
function formatTime(iso) {
  if (!iso) return '-';
  return new Date(iso).toLocaleString('zh-CN', { hour12: false });
}

loadState();
