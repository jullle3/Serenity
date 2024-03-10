const mediaSequence = [
    { videoSrc: "videos/sunrise.mp4", text: "Your database queries are always fast and efficient and always supported by an index", audioSrc: "audio/database-queries-fast.wav" },
    { videoSrc: "videos/sunrise.mp4", text: "You are happy", audioSrc: "audio/you-are-happy.wav" },
    { videoSrc: "videos/sunrise.mp4", text: "You love, when coworkers nitpick on merge requests, even the smallest suggestions are appreciated by you", audioSrc: "audio/nitpick-merge-requests.wav" },
    { videoSrc: "videos/sunrise.mp4", text: "Your monitoring is perfect, all bugs are caught by your team and not by your users", audioSrc: "audio/monitoring-perfect.wav" },
    { videoSrc: "videos/sunrise.mp4", text: "Management knows exactly what you're doing, and you will be rewarded generously for your great work ", audioSrc: "audio/management-generous.wav" },
];

const videoSources = [
    "videos/sunrise.mp4",
    "videos/flowers.mp4",
    "videos/grassy-nature.mp4",
    "videos/fog-water.mp4",
    "videos/happy-woman-nature.mp4",
    "videos/playful-puppy.mp4",
    "videos/wild-horses.mp4",
    "videos/women-beach.mp4",
    "videos/yoga.mp4"
];

document.getElementById('playButton').addEventListener('click', function() {
    this.style.display = 'none'; // Hide the play button
    document.getElementById('videoPlayer').style.display = 'block';
    document.getElementById('textOverlay').style.display = 'block';
    playMedia(0); // Assuming playMedia is already defined as per previous instructions
});

let lastMediaIndex = null;
let lastVideoIndex = null;

function playMedia() {
    let randomMediaIndex;
    let randomVideoIndex;

    // Ensure we pick a different media index if more than one option exists
    do {
            randomMediaIndex = Math.floor(Math.random() * mediaSequence.length);
        } while (randomMediaIndex === lastMediaIndex);
        lastMediaIndex = randomMediaIndex;

    // Ensure we pick a different video index if more than one option exists
    do {
            randomVideoIndex = Math.floor(Math.random() * videoSources.length);
        } while (randomVideoIndex === lastVideoIndex);
        lastVideoIndex = randomVideoIndex;

    const { text, audioSrc } = mediaSequence[randomMediaIndex]; // Use random media sequence
    const videoSrc = videoSources[randomVideoIndex]; // Use random video source

    const videoPlayer = document.getElementById('videoPlayer');
    const audioPlayer = document.getElementById('audioPlayer');
    const textOverlay = document.getElementById('textOverlay');

    videoPlayer.src = videoSrc;
    audioPlayer.src = audioSrc;
    textOverlay.innerText = text;

    videoPlayer.load();
    audioPlayer.load();

    videoPlayer.oncanplaythrough = () => videoPlayer.play();
    audioPlayer.oncanplaythrough = () => audioPlayer.play();
    audioPlayer.onended = () => {
        setTimeout(() => {
            playMedia(); // Call playMedia again to pick new random media
        }, 4000);
    };
}

// Adjust the initial playMedia(0) call inside your click event listener:
document.getElementById('playButton').addEventListener('click', function() {
    this.style.display = 'none'; // Hide the play button
    document.getElementById('videoPlayer').style.display = 'block';
    document.getElementById('textOverlay').style.display = 'block';
    const backgroundMusic = document.getElementById('backgroundMusic');
    if (backgroundMusic) {
        backgroundMusic.play(); // Play the background music
    }
    playMedia(); // Start the media sequence without the index parameter
});