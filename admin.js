<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>一元机场</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <main class="shell">
    <section id="authView" class="auth-card glass">
      <div class="brand-mark">墨</div>
      <h1>一元机场</h1>
      <p class="muted">请先注册或登录后选择线路套餐</p>

      <div class="tabs" role="tablist">
        <button id="newUserTab" class="tab active" type="button">新用户注册</button>
        <button id="oldUserTab" class="tab" type="button">老用户登录</button>
      </div>

      <form id="registerForm" class="form-panel active">
        <label>注册邮箱</label>
        <input name="email" type="email" placeholder="支持 Gmail / QQ / Foxmail / 163" autocomplete="email" required />
        <label>设置密码</label>
        <input name="password" type="password" minlength="8" placeholder="最短 8 位" autocomplete="new-password" required />
        <button class="primary" type="submit">注册账号</button>
      </form>

      <form id="loginForm" class="form-panel">
        <label>账号邮箱</label>
        <input name="email" type="email" placeholder="请输入注册邮箱" autocomplete="email" required />
        <label>登录密码</label>
        <input name="password" type="password" minlength="8" placeholder="请输入密码" autocomplete="current-password" required />
        <button class="primary" type="submit">登录</button>
      </form>
      <p id="authMessage" class="message"></p>
    </section>

    <section id="appView" class="hidden app-grid">
      <header class="hero glass">
        <div>
          <p class="eyebrow">墨韵线路服务</p>
          <h1>一元机场</h1>
          <p class="subtitle">选择套餐后使用支付宝扫码付款，提交后显示“正在开通线路”。</p>
        </div>
        <div class="user-tools">
          <span id="userEmail" class="chip"></span>
          <button id="logoutBtn" class="ghost" type="button">退出登录</button>
        </div>
      </header>

      <section class="plans">
        <article class="plan-card glass">
          <span class="seal">常规</span>
          <h2>常规线路</h2>
          <p class="big">80+ 个国家选择</p>
          <p class="price">¥60 <small>/ 年</small></p>
          <button class="primary buyBtn" data-plan="standard" type="button">支付宝扫码付款</button>
        </article>
        <article class="plan-card glass premium">
          <span class="seal">高端</span>
          <h2>高端线路</h2>
          <p class="big">120+ 个国家可以选择</p>
          <p class="price">¥350 <small>/ 年</small></p>
          <button class="primary buyBtn" data-plan="premium" type="button">支付宝扫码付款</button>
        </article>
      </section>

      <section id="payPanel" class="payment glass hidden">
        <div class="pay-copy">
          <p class="eyebrow">支付宝扫码付款</p>
          <h2 id="payTitle">套餐付款</h2>
          <p id="payDesc" class="muted"></p>
          <p class="notice">付款完成后点击“我已付款，提交开通”。管理员会在后台处理；Cloudflare 版本会把节点显示到你的账号里。</p>
          <button id="paidBtn" class="primary" type="button">我已付款，提交开通</button>
          <button id="cancelPayBtn" class="ghost" type="button">返回选择</button>
        </div>
        <div class="qr-frame">
          <img id="qrImage" src="" alt="支付宝收款二维码" />
          <div id="amountBadge" class="amount-badge"></div>
        </div>
      </section>

      <section class="orders glass">
        <div class="section-head">
          <h2>我的开通状态</h2>
          <button id="refreshOrdersBtn" class="ghost" type="button">刷新</button>
        </div>
        <div id="ordersList" class="orders-list"></div>
      </section>
    </section>
  </main>

  <script src="/main.js"></script>
</body>
</html>
