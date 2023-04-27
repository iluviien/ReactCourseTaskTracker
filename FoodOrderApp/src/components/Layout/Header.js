import { Fragment } from "react";
import HeaderBanner from "../../assets/img/HeaderBanner.png";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Darcy's Delicious Meathouse</h1>
        <HeaderCardButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={HeaderBanner} alt="header banner" />
      </div>
    </Fragment>
  );
};
export default Header;
