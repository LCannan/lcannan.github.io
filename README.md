# Jianan Li / 李家楠

个人简历与机器人项目网站。目标地址：https://lcannan.github.io/

## 内容与设计

- 以 2026 年 10 月 11 日提供的《个人简历_李家楠_VLA_RL_晶泰实习 (2).pdf》为内容依据。
- 按用户要求保留参考网站 https://davidsytao.github.io/ 的视觉布局：210px 左侧信息栏、右侧白底描边项目卡片、圆形头像、低饱和标签、双列媒体区及中英文切换。页面为独立实现。
- 三个项目：RLT、HIL-SERL、PriorVLA。未沿用参考网站中的个人信息、项目数据或视频。
- 默认英文，可切换中文并记住选择。禁用 JavaScript 时仍可查看完整英文内容与 PDF。
- 无框架、无安装步骤、无外部字体或 CDN 依赖。

## 本地预览

直接打开 `index.html`，或在本目录运行 `python -m http.server 8765` 后访问 http://localhost:8765/。

## 发布到 GitHub Pages

1. 在 GitHub 账号 `LCannan` 下新建公开仓库 `lcannan.github.io`。
2. 将本目录的文件上传到仓库根目录，确保 `index.html` 在根目录。不要上传外层工作区或 `tmp/`。
3. 在仓库 Settings → Pages 中选择 Deploy from a branch，分支为 `main`，目录为 `/ (root)`，保存。
4. 等待 Pages 部署成功，访问 https://lcannan.github.io/。

如果以后改用 `jiananli.github.io`，需要使用对应 GitHub 用户或组织账号，并更新 `index.html` 中的 canonical 地址。

## 添加视频

把 MP4/WebM 放到 `videos/`，编辑 `media.js` 的对应 `src`。例如：

```js
"rlt-1": { src: "videos/rlt-demo.mp4", poster: "" }
```

RLT 以两行两列按顺序展示 π0.5 训练效果、RLT 在线训练、两阶段损失函数、阶段分类器实时运行；媒体位于 `assets/rlt-*`，损失函数图支持点击查看原图，三个视频为兼容浏览器播放的 H.264 MP4。HIL-SERL 第一行依次展示仿真验证与实机插入视频，第二行由训练曲线独占整行；媒体位于 `assets/hil-serl-*`，训练曲线支持点击查看原图。PriorVLA 按行排列：PegInsertion 仿真、消融实验、实机效果、启发式 DAgger 触发演示；视频和封面位于 `assets/priorvla-*`，消融实验保留全部原始数据并支持展开与 TXT 下载。`src` 为空时显示“视频待补充”，不会请求不存在的视频。添加真实视频后请确认自己拥有发布权限。大文件可使用 HTTPS 直链。

## 更新内容

- `index.html`：个人信息与三个项目介绍。双语文字同时维护 `data-zh`、`data-en` 和元素内的默认英文文本。
- `style.css`：样式与移动端适配。
- `app.js`：语言切换与视频挂载。
- `assets/avatar.png`：头像；通过 CSS 圆形裁切，原图不变。
- `assets/resume.pdf`：本次提供的完整简历。

项目结果按简历记录展示：RLT 70 分钟、50 次测试、40%→92%；HIL-SERL 约 50 分钟、20/20、位置 ±5 cm 与角度 ±5°；PriorVLA 可训练参数为全参基准的 30.6%，仿真 43.03%→51.37%，真机 40%→76%，20 条纠正轨迹。

PriorVLA 的“技术细节”默认收起，按顺序展示项目架构图与模型离线验证视频，各附中英文概括。架构图可点击查看原图；离线验证视频设为 `preload: "none"`，点击播放时才加载。

HIL-SERL 的“技术细节”与 PriorVLA 共用浅灰背景及标题、概括在媒体上方的布局，默认收起；依次展示项目架构图、阻抗控制与接触力约束原理图、阻抗控制效果视频。两张图支持查看原图，视频设为 `preload: "none"`。
