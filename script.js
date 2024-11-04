const video = document.getElementById('weddingVideo');

// Unmute the video on first click
document.body.addEventListener('click', () => {
    video.muted = false; // Unmute the video
});
