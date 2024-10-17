function YouTubePlayer() {
    return (
        <div className="youtubePlayer">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video player"
                Border="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default YouTubePlayer;