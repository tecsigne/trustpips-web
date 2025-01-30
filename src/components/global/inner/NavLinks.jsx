import { Link } from "react-router-dom";
import { navRoutes } from "../../../data/constant";

const NavLinks = ({ className }) => {
  return (
    <ul className={`${className || ""}`}>
      {navRoutes.map(({ path, label, isBordered, hasBackground }, index) => (
        <li
          key={index}
          className={`${isBordered ? "" : ""} ${hasBackground ? "" : ""}`}
        >
          <Link to={path}>{label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
