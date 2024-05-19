import React from "react";
import "./Entertainment.css";

function Entertainment() {
  const openSpotify = () => {
    window.open(
      "https://open.spotify.com/playlist/2Om3u1YOBaK8Mp3iFhoJDv",
      "_blank"
    );
  };

  const openMovies = () => {
    // Reload the page
    window.open("https://www.imdb.com/user/ur136260470/watchlist", "_blank");
  };

  return (
    <div className="section-container">
      <div className="page_title">
        <h1>Welcome to The Wall of Entertainment!</h1>
      </div>
      <div className="page_info">
        <p>
          {`Here there are some fun stuff you might want to take a look at :)`}{" "}
        </p>
      </div>
      <div className="images neon-border">

        <div className="movies_img neon-border" onClick={openMovies}>
          <img src="/images/movies.jpg" alt="movies"></img>
          <div className="text-movies">Top 10 Movies Everyone Should Watch</div>
        </div>
      
        <div className="music_img neon-border" onClick={openSpotify}>
          <img src="/images/music.jpg" alt="music"></img>
          <div class="text-music">Spotify Playlist for House Music Lovers</div>
        </div>

      </div>
    </div>
  );
}

export default Entertainment;
