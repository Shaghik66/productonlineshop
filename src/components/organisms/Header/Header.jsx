import { Nav } from "../../molecules/Nav/Nav";
import style from"./Header.module.css"

function Header() {
  return (
    <header className={style.header}>
      <Nav/>
    </header>
  );
}

export default Header;
