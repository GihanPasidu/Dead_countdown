let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-audio', {
        height: '1',
        width: '1',
        videoId: 'lDNGlG71AR8',
        playerVars: {
            'autoplay': 1,
            'loop': 1,
            'playlist': 'lDNGlG71AR8',
            'controls': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'fs': 0,
            'rel': 0,
            'disablekb': 1,
            'mute': 0
        },
        events: {
            'onReady': (event) => {
                event.target.unMute();
                event.target.setVolume(10);
                event.target.playVideo();
            },
            'onStateChange': (event) => {
                if (event.data === YT.PlayerState.ENDED) {
                    event.target.playVideo();
                }
            }
        }
    });
}
