// 👇 第三步：在 main.js 中添加视频逻辑
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.kv-bg video');
    if (video) {
        // 给视频赋值 src（从 data-src 取基础版）
        video.src = video.dataset.src;
        // 加载失败提示
        video.addEventListener('error', () => {
            console.log('视频加载失败，请检查路径！');
            // 可选：弹窗提示
            // alert('视频加载失败，请检查路径是否正确');
        });
    }
});