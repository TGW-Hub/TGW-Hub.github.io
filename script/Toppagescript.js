document.addEventListener("DOMContentLoaded", function () {
    const videoPlayer = document.getElementById("videoPlayer");
    const backgroundImage = document.getElementById("backgroundImage");

    // 動画のパスを指定
    const videos = [
        "media/video1.mp4",
        "media/video2.mp4",
        "media/video3.mp4",
        "media/video4.mp4",
        "media/video5.mp4",
        "media/video6.mp4"
    ];

    let currentVideoQueue = [];
    let isTransitioning = false;
    let transitionTimeout;

    // 動画の順番をシャッフル
    function getRandomVideo(excludeList = []) {
        let availableVideos = videos.filter(video => !excludeList.includes(video));
        return availableVideos[Math.floor(Math.random() * availableVideos.length)];
    }

    // 初期で3つの動画をキューに追加して再生準備
    function loadInitialVideos() {
        currentVideoQueue = [
            getRandomVideo(),
            getRandomVideo(),
            getRandomVideo()
        ];
        videoPlayer.src = currentVideoQueue[0];
        videoPlayer.play();
    }

    // 次の動画をキューに追加して再生
    function playNextVideo() {
        if (isTransitioning) return;
        isTransitioning = true;

        // 3秒間重ねて再生
        videoPlayer.classList.add("overlay");

        // 新しい動画をキューに追加
        const nextVideo = getRandomVideo(currentVideoQueue);
        currentVideoQueue.push(nextVideo);

        // 現在の動画の再生が終了するタイミングで次の動画を設定
        videoPlayer.addEventListener("ended", function onEnded() {
            videoPlayer.removeEventListener("ended", onEnded);
            videoPlayer.classList.remove("overlay");
            videoPlayer.src = currentVideoQueue.shift();
            videoPlayer.play();
            isTransitioning = false;
        }, { once: true });

        // 次の動画の再生を遅らせる
        setTimeout(() => {
            videoPlayer.src = currentVideoQueue[1];
            videoPlayer.play();
        }, 3000); // 3秒間の重なり

    }

    // 接続をチェックして、モバイル通信の場合は画像を表示
    function checkConnection() {
        if (navigator.connection) {
            const connectionType = navigator.connection.effectiveType;
            if (connectionType === '4g' || connectionType === '3g') {
                // モバイル通信の場合は画像を表示し、動画の初期読み込みをスキップ
                videoPlayer.style.display = 'none';
                backgroundImage.style.display = 'block';
            } else {
                // モバイル通信以外の場合は動画を再生
                videoPlayer.style.display = 'block';
                backgroundImage.style.display = 'none';
                loadInitialVideos();
                videoPlayer.addEventListener("ended", playNextVideo);
            }
        } else {
            // Connection APIが利用できない場合はデフォルトで動画を再生
            videoPlayer.style.display = 'block';
            backgroundImage.style.display = 'none';
            loadInitialVideos();
            videoPlayer.addEventListener("ended", playNextVideo);
        }
    }

    checkConnection();

    // テキスト切り替えの設定
    const texts = [
        { line1: "私は恐れる時，あなたに頼る", line2: "詩編 56:3" },
        { line1: "When I am afraid, I put my trust in you.", line2: "Psalm 56:3" },
        { line1: "当我害怕时，我信赖你。", line2: "诗篇56:3" }
    ];
    
    let textIndex = 0;
    const line1Element = document.getElementById("line1");
    const line2Element = document.getElementById("line2");

    function updateText() {
        // スライドアウト
        line1Element.classList.add("slide-out");
        line2Element.classList.add("slide-out");

        setTimeout(() => {
            // テキストを更新
            line1Element.textContent = texts[textIndex].line1;
            line2Element.textContent = texts[textIndex].line2;

            // スライドイン
            line1Element.classList.remove("slide-out");
            line1Element.classList.add("slide-in");
            line2Element.classList.remove("slide-out");
            line2Element.classList.add("slide-in");

            // スライドインが完了したらクラスをリセット
            setTimeout(() => {
                line1Element.classList.remove("slide-in");
                line2Element.classList.remove("slide-in");
            }, 1000);

            // 次のテキストに進む
            textIndex = (textIndex + 1) % texts.length;
        }, 1000); // 1秒のトランジション
    }

    updateText();
    setInterval(updateText, 10000); // 10秒ごとにテキストを切り替える
});
