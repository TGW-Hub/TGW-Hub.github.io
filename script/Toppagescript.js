document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        { line1: "私は恐れる時，あなたに頼る", line2: "詩編 56:3" },
        { line1: "When I am afraid, I put my trust in you.", line2: "Psalm 56:3" },
        { line1: "当我害怕时，我信赖你。", line2: "诗篇56:3" }
    ];
    
    let currentIndex = 0;
    const line1Element = document.getElementById("line1");
    const line2Element = document.getElementById("line2");

    function updateText() {
        line1Element.textContent = texts[currentIndex].line1;
        line2Element.textContent = texts[currentIndex].line2;
        currentIndex = (currentIndex + 1) % texts.length;
    }

    updateText();
    setInterval(updateText, 10000); // 10秒ごとにテキストを切り替える
});
document.addEventListener("DOMContentLoaded", function() {
    const videoPlayer = document.getElementById("videoPlayer");
    const videos = [
        "media/video1.mp4",
        "media/video2.mp4",
        "media/video3.mp4",
        "media/video4.mp4",
        "media/video5.mp4",
        "media/video6.mp4"
    ];

    function playRandomVideo() {
        // ランダムに動画を選択
        const randomIndex = Math.floor(Math.random() * videos.length);
        const selectedVideo = videos[randomIndex];

        videoPlayer.src = selectedVideo;
        videoPlayer.play();
    }

    // 動画が終了したら次の動画を再生
    videoPlayer.addEventListener("ended", playRandomVideo);

    // 最初に動画を再生
    playRandomVideo();
    function checkConnection() {
        // Connection APIを使用して接続状態を確認
        if (navigator.connection) {
            const connectionType = navigator.connection.effectiveType;

            if (connectionType === '4g' || connectionType === '3g') {
                // モバイル通信の場合は画像を表示
                videoPlayer.style.display = 'none';
                backgroundImage.style.display = 'block';
            } else {
                // モバイル通信以外の場合は動画を再生
                videoPlayer.style.display = 'block';
                backgroundImage.style.display = 'none';
                playRandomVideo();
                videoPlayer.addEventListener("ended", playRandomVideo);
            }
        } else {
            // Connection APIが利用できない場合はデフォルトで動画を再生
            videoPlayer.style.display = 'block';
            backgroundImage.style.display = 'none';
            playRandomVideo();
            videoPlayer.addEventListener("ended", playRandomVideo);
        }
    }

    checkConnection();
});
