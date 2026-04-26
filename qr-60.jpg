<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>一元机场后台</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <main class="shell admin-shell">
    <section id="adminLogin" class="auth-card glass">
      <div class="brand-mark">管</div>
      <h1>管理员后台</h1>
      <p class="muted">后台入口需要管理员密码。</p>
      <form id="adminLoginForm" class="form-panel active">
        <label>管理员密码</label>
        <input name="password" type="password" placeholder="请输入管理员密码" autocomplete="current-password" required />
        <button class="primary" type="submit">进入后台</button>
      </form>
      <p id="adminMessage" class="message"></p>
    </section>

    <section id="adminDashboard" class="hidden admin-dashboard">
      <header class="hero glass">
        <div>
          <p class="eyebrow">后台管理</p>
          <h1>一元机场后台</h1>
          <p class="subtitle">查看注册邮箱、订单，并将节点内容发送到用户邮箱。</p>
        </div>
        <div class="user-tools">
          <button id="adminRefreshBtn" class="ghost" type="button">刷新数据</button>
          <button id="adminLogoutBtn" class="ghost" type="button">退出后台</button>
        </div>
      </header>

      <section class="glass table-card">
        <h2>注册用户邮箱</h2>
        <div id="usersTable" class="table-wrap"></div>
      </section>

      <section class="glass table-card">
        <h2>订单与节点发送</h2>
        <div id="ordersTable" class="admin-orders"></div>
      </section>
    </section>
  </main>
  <script src="/admin.js"></script>
</body>
</html>
