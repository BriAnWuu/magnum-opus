
import { NavLink } from "react-router-dom";
import "./NavBarLink.scss";

function NavBarLink({ children, link }) {
    return (
        <NavLink
            to={ link }
            className={({isActive, isPending}) => 
                `nav__link ${isPending ? "pending" : isActive ? "active" : ""}`
            }
        >
            {children}
        </NavLink>
    )
};

export default NavBarLink;
