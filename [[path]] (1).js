# 一元机场 Cloudflare Pages 版本

这个版本适合：只有 GitHub + Cloudflare，没有 VPS，也想让别人能打开网页注册、登录、提交订单，并让管理员在后台查看注册邮箱和订单。

## 功能

- 用户注册 / 登录
- 支持 Gmail、QQ、Foxmail、163 邮箱
- 密码最短 8 位，密码会在 Cloudflare D1 中加密存储
- 常规线路：60 元 / 年
- 高端线路：350 元 / 年
- 支付宝二维码展示
- 用户点击“我已付款”后，订单显示“正在开通线路”
- 管理员后台：`/admin.html`
- 管理员密码不写在前端页面里，需要在 Cloudflare 环境变量中设置
- Cloudflare Pages + Pages Functions + D1 数据库，无需 VPS

## 注意

本版本不会收集或展示用户邮箱、QQ、支付宝、银行等第三方平台发给用户的一次性验证码。验证码/短信码/邮箱码属于敏感信息，不应该要求用户提交到你的网站后台。

Cloudflare Pages 版本默认不发邮件。管理员保存节点后，用户登录自己的账号即可在“我的开通状态”中看到节点内容。若要真实发邮件，需要额外接入邮件服务商 API。

## Cloudflare 部署参数

创建 Cloudflare Pages 项目时建议这样填：

- Framework preset：None
- Build command：留空
- Build output directory：`public`
- Root directory：`/`

## 必须配置的 Cloudflare 环境变量

在 Cloudflare Pages 项目设置中添加：

- `ADMIN_PASSWORD`：`88888888`
- `APP_SECRET`：一串 32 位以上随机字符，例如你自己随便生成的长字符串

## 必须绑定 D1 数据库

在 Cloudflare 创建 D1 数据库，例如：

- 数据库名：`yiyuan_db`
- Pages Functions 绑定变量名：`DB`

变量名必须是大写 `DB`。

首次访问时程序会自动创建数据表。

## 管理后台

部署成功后：

- 用户页面：`https://你的域名/`
- 后台页面：`https://你的域名/admin.html`
- 管理员密码：环境变量 `ADMIN_PASSWORD` 中设置的值
