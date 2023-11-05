import { useNavigate } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={`${style.header} header-global`}>
      <ul>
        <li className={style.navItem} onClick={() => navigate("/")}>
          Home
        </li>
        <li className={style.navItem} onClick={() => navigate("/counters")}>
          Counters
        </li>
        <li className={style.navItem} onClick={() => navigate("/users")}>
          Users
        </li>
        <li className={style.navItem} onClick={() => navigate("/todolists")}>
          TodoLists
        </li>
      </ul>
    </div>
  );
};

export default Header;
