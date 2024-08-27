document.addEventListener("DOMContentLoaded", function() {
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

    // 動画の順番をシャッフル
    function getRandomVideo(excludeList = []) {
        let availableVideos = videos.filter(video => !excludeList.includes(video));
        return availableVideos[Math.floor(Math.random() * availableVideos.length)];
    }

    // 動画を初期読み込み
    function loadInitialVideos() {
        currentVideoQueue = [
            getRandomVideo(),
            getRandomVideo()
        ];
        videoPlayer.src = currentVideoQueue[0];
        videoPlayer.play();
    }

    // 次の動画をキューに追加して再生
    function playNextVideo() {
        videoPlayer.src = currentVideoQueue[1];
        videoPlayer.play();
        // 2つ目の動画が再生されたら、新しい動画をランダムに追加
        const nextVideo = getRandomVideo(currentVideoQueue);
        currentVideoQueue = [currentVideoQueue[1], nextVideo];
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
        { line1: "当我害怕时，我信赖你。", line2: "诗篇56:3" },
        { line1: "เมื่อ​ผม​กลัว ผม​ก็​วางใจ​พระองค์", line2: "สดุดี 56:3" },
        { line1: "Saat takut, aku percaya kepada-Mu.", line2: "Mazmur 56:3" },
        { line1: "Cuando tengo miedo, pongo mi confianza en ti.", line2: "Salmo 56:3" },
        { line1: "나는 두려울 때면 당신을 신뢰합니다.", line2: "시편 56:3" },
        { line1: "當我害怕時，我信賴你。", line2: "詩篇 56:3" },
        { line1: "Quand j'ai peur, je mets ma confiance en toi.", line2: "Psaume 56:3" }
    ];
    
    let textIndex = 0;
    const line1Element = document.getElementById("line1");
    const line2Element = document.getElementById("line2");

    function updateText() {
        line1Element.textContent = texts[textIndex].line1;
        line2Element.textContent = texts[textIndex].line2;
        textIndex = (textIndex + 1) % texts.length;
    }

    updateText();
    setInterval(updateText, 10000); // 10秒ごとにテキストを切り替える
});
