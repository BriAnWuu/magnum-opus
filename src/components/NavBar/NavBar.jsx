import { useNavigate } from "react-router-dom";
import NavBarLink from "../NavBarLink/NavBarLink";
import "./NavBar.scss";

function NavBar(prop) {
    const navigate = useNavigate()
    return (
        <nav className="nav">
            <h2 
                className="nav__wordmark"
                onClick={() => navigate('/')}
            >
                Magnum Opus
            </h2>
            <div className="nav__nav-links">
                <NavBarLink link={"/"}>What's New</NavBarLink>
                <NavBarLink link={"/artist"}>Artists</NavBarLink>
                <NavBarLink link={"/artwork"}>Artworks</NavBarLink>
                <NavBarLink link={"/exhibition"}>Exhibitions</NavBarLink>
                <NavBarLink link={"/event"}>Fairs & Events</NavBarLink>
            </div>
            <div className="nav__more-action">
                <button className="nav__search">
                    Search
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </button>
            </div>
        </nav>
    )
};

export default NavBar;
