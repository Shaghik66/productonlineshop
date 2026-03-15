import style from"./ViewProductButton.module.css"
import { NavLink } from "react-router-dom";

export function ViewProductButton() {
 return <>
    <button className={style.sliderButton}>
      <NavLink className={style.viewProductButton} to="/products">
        View Product
      </NavLink>
    </button>
  </>;
}
