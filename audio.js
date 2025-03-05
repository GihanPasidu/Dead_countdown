let player;

function onYouTubeIframeAPIReady() {
    // Check if player already exists
    if (player) return;
    
    player = new YT.Player('youtube-audio', {
        height: '0',
        width: '0',
        videoId: 'lDNGlG71AR8',
        playerVars: {
            'autoplay': 0,
            'loop': 1,
            'playlist': 'lDNGlG71AR8',
            'controls': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'fs': 0,
            'rel': 0,
            'disablekb': 1,
            'mute': 1  // Start muted
        },
        events: {
            'onReady': (event) => {
                event.target.setVolume(30);
            },
            'onStateChange': (event) => {
                if (event.data === YT.PlayerState.ENDED) {
                    event.target.playVideo();
                }
            }
        }
    });
}

// Add function to check audio state
function resumeAudio() {
    if (player && sessionStorage.getItem('audioPlaying') === 'true') {
        player.playVideo();
    }
}
