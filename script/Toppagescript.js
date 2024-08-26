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

        // フェードアウト効果
        videoPlayer.classList.add("fade-out");

        setTimeout(() => {
            // 再生する動画をキューから取得
            currentVideoQueue.shift();
            videoPlayer.src = currentVideoQueue[0];
            videoPlayer.classList.remove("fade-out");
            videoPlayer.classList.add("fade-in");
            videoPlayer.play();

            // フェードインが完了したらクラスをリセット
            setTimeout(() => {
                videoPlayer.classList.remove("fade-in");
                isTransitioning = false;
            }, 1000);

            // 新しい動画をランダムに追加しキューに待機させる
            const nextVideo = getRandomVideo(currentVideoQueue);
            currentVideoQueue.push(nextVideo);

        }, 1000); // 1秒のトランジション
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
        // フェードアウト
        line1Element.classList.add("fade-out");
        line2Element.classList.add("fade-out");

        setTimeout(() => {
            // テキストを更新
            line1Element.textContent = texts[textIndex].line1;
            line2Element.textContent = texts[textIndex].line2;

            // フェードイン
            line1Element.classList.remove("fade-out");
            line1Element.classList.add("fade-in");
            line2Element.classList.remove("fade-out");
            line2Element.classList.add("fade-in");

            // フェードインが完了したらクラスをリセット
            setTimeout(() => {
                line1Element.classList.remove("fade-in");
                line2Element.classList.remove("fade-in");
            }, 2500);

            // 次のテキストに進む
            textIndex = (textIndex + 1) % texts.length;
        }, 1000); // 1秒のトランジション
    }

    updateText();
    setInterval(updateText, 10000); // 10秒ごとにテキストを切り替える
});
