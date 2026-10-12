// 视频可后续补充。将 MP4/WebM 放入 videos/，在对应 src 中填写相对路径。
// 示例："rlt-1": { src: "videos/rlt-demo.mp4", poster: "" }
// src 为空时只显示占位，不加载缺失文件，也不会出现无法播放的控件。
window.PROJECT_MEDIA = {
  "rlt-1": { src: "assets/rlt-pi05-training.mp4", poster: "assets/rlt-pi05-training.jpg" },
  "rlt-2": { src: "assets/rlt-online-training.mp4", poster: "assets/rlt-online-training.jpg" },
  "rlt-stage-classifier": { src: "assets/rlt-stage-classifier.mp4", poster: "assets/rlt-stage-classifier.jpg" },
  "hil-serl-1": { src: "assets/hil-serl-simulation.mp4", poster: "assets/hil-serl-simulation.jpg" },
  "hil-serl-2": { src: "assets/hil-serl-real-insertion.mp4", poster: "assets/hil-serl-real-insertion.jpg" },
  "hil-serl-impedance": { src: "assets/hil-serl-impedance.mp4", poster: "assets/hil-serl-impedance.jpg", preload: "none" },
  "priorvla-1": { src: "assets/priorvla-simulation.mp4", poster: "assets/priorvla-simulation.jpg" },
  "priorvla-2": { src: "assets/priorvla-real-robot.mp4", poster: "assets/priorvla-real-robot.jpg" },
  "priorvla-3": { src: "assets/priorvla-dagger.mp4", poster: "assets/priorvla-dagger.jpg" },
  "priorvla-offline": { src: "assets/priorvla-offline-validation.mp4", poster: "assets/priorvla-offline-validation.jpg", preload: "none" }
};
