function YouTubePlayer() {
    return (
        <div className="youtubePlayer">
            <iframe
                width="400"
                height="236"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video player"
                border="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default YouTubePlayer; 