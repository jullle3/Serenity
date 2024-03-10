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


document.addEventListener('DOMContentLoaded', (event) => {
    // Check for browser support
    if ('speechSynthesis' in window) {
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices.find(voice => voice.gender === 'female' && voice.lang === 'en-US'); // Choose a female voice with US English
        msg.text = 'Dine analyser gjorde virkelig en forskel'; // Your text to be spoken
        speechSynthesis.speak(msg);
    } else {
        console.log('The browser doesn\'t support the Web Speech API');
    }
});
