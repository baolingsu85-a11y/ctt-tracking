# 物流轨迹查询 · CTT Express

中国到西班牙物流轨迹查询网站，CTT Express 渠道。三语切换（中文 / Español / Português）、批量查询、数据可自行维护。

## 文件结构

- `index.html` 查询页面（界面 + 逻辑）
- `data.js` 订单数据（改查询信息就改这个文件）

## 部署到线上（GitHub Pages，免费）

1. 注册 / 登录 [GitHub](https://github.com)，点右上角 `+` 新建仓库（New repository），仓库名随意，例如 `ctt-tracking`，选择 Public（公开），不要勾选任何初始化选项，点创建。
2. 在仓库页面点「uploading an existing file」，把 `index.html` 和 `data.js` 两个文件拖进去，点 Commit。
3. 点仓库顶部 Settings → 左侧 Pages → Source 选 `Deploy from a branch`，Branch 选 `main`、文件夹选 `/ (root)`，保存。
4. 等一两分钟，页面会显示一个地址：`https://你的用户名.github.io/ctt-tracking/`，这就是线上网址。

## 修改查询信息（线上生效）

1. 打开仓库里的 `data.js` 文件，点右上角铅笔图标进入编辑。
2. 按 `no`（运单号）、`status`（状态）、`records`（轨迹）等字段增删改。
3. 点 Commit changes 提交，一两分钟后线上自动更新。

也可以在本地双击 `index.html`，点「管理数据」可视化编辑，改完点「导出 data.js」，把下载的文件替换仓库里的 `data.js`。

## 数据字段说明

| 字段 | 含义 |
|------|------|
| no | 运单号（查询用，唯一） |
| refNo | 参考号 |
| destination | 目的地 |
| localTime | 当地时间 |
| status | 最新状态 |
| receiver | 收件人 |
| receiverInfo | 收件人详细（姓名/国家/城市/地址/邮编/电话） |
| records | 轨迹数组，按时间倒序，最新在最上 |
