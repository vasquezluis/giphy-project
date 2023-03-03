import "./Header.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { KeyboardArrowDown } from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <img src="/images/giphyLogo.png" alt="logo" />
      <div className="menu">
        <div className="button-wrapper reactions">
          <div className="menu-button hover-reactions">
            <h2>Reactions</h2>
          </div>
        </div>
        <div className="button-wrapper entertainment">
          <div className="menu-button hover-entertaiment">
            <h2>Entertaiment</h2>
          </div>
        </div>
        <div className="button-wrapper sports">
          <div className="menu-button hover-sports">
            <h2>Sports</h2>
          </div>
        </div>
        <div className="button-wrapper stickers">
          <div className="menu-button hover-stickers">
            <h2>Stickers</h2>
          </div>
        </div>
        <div className="button-wrapper artists">
          <div className="menu-button hover-artists">
            <h2>Artists</h2>
          </div>
        </div>
        <div className="button-wrapper moreverticon">
          <div className="menu-button hover-moreverticon">
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <div className="button">
        <h2>Upload</h2>
      </div>
      <div className="button">
        <h2>Create</h2>
      </div>
      <div className="profile">
        <img src="/images/avatar.png" alt="avatar" />
        <h2>Luis</h2>
        <KeyboardArrowDown />
      </div>
    </div>
  );
}

export default Header;
