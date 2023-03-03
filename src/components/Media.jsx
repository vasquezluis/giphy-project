import "./Media.css";
import { useState, useEffect } from "react";
import { fetchTrendingGiphys } from "../api/giphyAPI.js";

import TrendingGiphy from "./TrendingGiphy";

function Media() {
  const [trending, setTrending] = useState([]);

  const randomizeData = (content) => {
    return content.data.sort(() => Math.random() - 0.5);
  };

  const getTrendingGiphys = async () => {
    // ? get giphys by api call
    const trending = await fetchTrendingGiphys();
    // ? set trending giphys
    setTrending(randomizeData(trending.data));
  };

  useEffect(() => {
    getTrendingGiphys();
  }, []);

  return (
    <div className="media">
      <div className="row">
        <div className="row-header">
          <img src="/images/trending.svg" alt="rending" />
          <h1>Trending</h1>
        </div>
        <div className="trending-container">
          {/* Trending giphys and then loop through those */}
          {trending.map((item, index) => (
            <TrendingGiphy giphy={item} key={index} />
          ))}
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/images/artists.svg" alt="artists" />
          <h1>Artists</h1>
        </div>
        <div className="artists-container">
          <p>Content</p>
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/images/clips.svg" alt="clips" />
          <h1>Clips</h1>
        </div>
        <div className="clips-container">
          <p>Content</p>
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/images/stories.svg" alt="stories" />
          <h1>Stories</h1>
        </div>
        <div className="stories-container">
          <p>Content</p>
        </div>
      </div>
    </div>
  );
}

export default Media;
