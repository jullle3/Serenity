const videoSources = [
    { src: "videos/sunrise.mp4", text: "Dine analyser gjorde virkelig en forskel" },
    // Add more video sources and texts here
];

let currentVideoIndex = 0;

const videoElement = document.getElementById('video-background');
const textElement = document.getElementById('video-text');

videoElement.src = videoSources[currentVideoIndex].src;
textElement.innerHTML = videoSources[currentVideoIndex].text;

videoElement.addEventListener('ended', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    videoElement.src = videoSources[currentVideoIndex].src;
    textElement.innerHTML = videoSources[currentVideoIndex].text;
    videoElement.load();
    videoElement.play();
});

// Optionally, switch videos every 10 seconds regardless of video length
setInterval(() => {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    videoElement.src = videoSources[currentVideoIndex].src;
    textElement.innerHTML = videoSources[currentVideoIndex].text;
    videoElement.load();
    videoElement.play();
}, 10000);

