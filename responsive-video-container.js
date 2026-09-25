<!-- This is the script that determines whether to use the large video or small for mobile screens -->
<!-- wrap it in <script> tags and add it after the html/lava --> 


document.addEventListener('DOMContentLoaded', () => {

    const video = document.querySelector('.bg-video-hfg');
    if (!video) return;

    const desktopVideo =
        'https://player.vimeo.com/progressive_redirect/playback/1148777653/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&log_user=0&signature=cc591e480d6f868c3404675b15b97d4f578d10ac32336fb3fbd5eed2439aa97c';

    const mobileVideo =
        'https://player.vimeo.com/progressive_redirect/playback/1148777653/rendition/360p/file.mp4%20%28360p%29.mp4?loc=external&log_user=0&signature=76d87f45a078eda22539a2d73992383a0138968e6fc770c2996e34423e51f472';

    function setSource() {
        const isMobile = window.innerWidth <= 768;
        const src = isMobile ? mobileVideo : desktopVideo;

        if (video.currentSrc === src) return;

        video.innerHTML = '';

        const source = document.createElement('source');
        source.src = src;
        source.type = 'video/mp4';

        video.appendChild(source);
        video.load();
        video.play().catch(() => {});
    }

    setSource();
    window.addEventListener('resize', setSource);

});

