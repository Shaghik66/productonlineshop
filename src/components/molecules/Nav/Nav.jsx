import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import style from "./Nav.module.css"

export function Nav() {
  return (
    <nav className={style.navBar}>
      <h3>Logo</h3>
      <div className={style.navbarListContainer}>
      <NavLink className={style.navLink} to="/">Home</NavLink>
      <NavLink className={style.navLink} to="/products">Products</NavLink>
      </div>
      <FaShoppingCart className={style.cardIcon} />
    </nav>
  );
}
