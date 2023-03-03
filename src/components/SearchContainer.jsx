import './SearchContainer.css'
import SearchIcon from "@mui/icons-material/Search";

function SearchContainer() {
  return (
    <div className="search-container">
      <input type="text" placeholder="Seach all the GIFS and Sticker here!" name="" id="" />
      <div className="search-icon">
        <SearchIcon />
      </div>
    </div>
  );
}

export default SearchContainer;
