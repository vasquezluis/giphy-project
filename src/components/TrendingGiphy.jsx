import "./TrendingGiphy.css";

function TrendingGiphy({ giphy }) {
  return (
    <div>
      <img
        className="trending-giphy"
        key={giphy?.id}
        src={giphy?.images.downsized.url}
        alt={giphy?.title}
      />
    </div>
  );
}

export default TrendingGiphy;
