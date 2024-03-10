const mediaSequence = [
    { videoSrc: "videos/sunrise.mp4", text: "Your database queries are always fast and efficient and always supported by an index", audioSrc: "audio/database-queries-fast.wav" },
    { videoSrc: "videos/sunrise.mp4", text: "You are happy", audioSrc: "audio/you-are-happy.wav" },
    { videoSrc: "videos/sunrise.mp4", text: "You love, when coworkers nitpick on merge requests, even the smallest suggestions are appreciated by you", audioSrc: "audio/nitpick-merge-requests.wav" },
];

document.getElementById('playButton').addEventListener('click', function() {
    this.style.display = 'none'; // Hide the play button
    document.getElementById('videoPlayer').style.display = 'block';
    document.getElementById('textOverlay').style.display = 'block';
    playMedia(0); // Assuming playMedia is already defined as per previous instructions
});

let currentIndex = 0;

function playMedia(index) {
    if (index >= mediaSequence.length) {
        index = 0; // Reset the index to loop from the beginning
    }

    const { videoSrc, text, audioSrc } = mediaSequence[index];
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
            currentIndex = (index + 1) % mediaSequence.length; // Ensure the sequence loops
            playMedia(currentIndex);
        }, 4000); // Wait for 2 seconds after audio ends
    };
}



document.getElementById('playButton').addEventListener('click', function() {
    this.style.display = 'none'; // Hide the play button
    document.getElementById('videoPlayer').style.display = 'block';
    document.getElementById('textOverlay').style.display = 'block';
    const backgroundMusic = document.getElementById('backgroundMusic');
    if (backgroundMusic) {
        backgroundMusic.play(); // Play the background music
    }
    playMedia(0); // Start the main media sequence
});
