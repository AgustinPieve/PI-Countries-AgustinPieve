import SearchBar from "../SearchBar/SearchBar";
import Filter from "../OrderAndFilter/Filter";
import Order from "../OrderAndFilter/Order";
import { Link } from "react-router-dom";
import style from "./Bar.module.css";

const Bar = ({ activities, setCurrentPage }) => {
  return (
    <div>
      <div className={style.normalBar}>
        <span className="btn-select"></span>
        <div className={style.containerSearchBarx}>
          <SearchBar setCurrentPage={setCurrentPage} />
        </div>
        <div className={style.opctionMenu}>
          <p className={style.pTitleMenu}>Filter by</p>
          <div className={style.submenu}>
            <Filter activities={activities} setCurrentPage={setCurrentPage} />
          </div>
        </div>

        <div className={style.opctionMenu}>
          <p className={style.pTitleMenu}>Order by</p>
          <div className={style.submenu}>
            <Order activities={activities} setCurrentPage={setCurrentPage} />
          </div>
        </div>
{/* 
        <div className="opctionMenu">
          <a className="pTitleMenu" href="/me">
            About me
          </a>
          <div className="submenu"></div>
          <br></br>
        </div> */}
        <Link to="/create" className={style.goActivity}>
          <span>ADD ACTIVITY</span>
        </Link>
        <br></br>
      </div>
    </div>
  );
};

export default Bar;