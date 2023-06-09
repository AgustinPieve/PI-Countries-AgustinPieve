import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";


const initialPage = () => {
  return (
    <div className={style.contentsStart}>
      <div className={style.textoTodoLanding}>
        <div className={style.glassLanding}>
          <h1 className={style.titlelandigpage}>Welcome to Individual Project</h1>
          <p className={style.textolandig1}>
            Welcome to my countries PI. Here you can explore the geographical
            diversity. You can start by searching for a particular country
            through our search engine, or browse the full list of countries.
            Each country has a detailed file with relevant information, such as
            its continent, capital, sub-region, area and population.
          </p>
          <p className={style.textolandig2}>
            Also, if you have an activity or experience that you have enjoyed on
            your trips and want to share with other users, you can add it to our
            system and enrich the travel experience of the community. We invite
            you to explore, learn and share on this country website. Have a good
            trip!
          </p>
        </div>
        <Link to="/home" className={style.start}>
          <span>START</span>
        </Link>
      </div>
    </div>
  );
};

export default initialPage;