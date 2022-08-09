import React from "react";
import classes from "./LandingPage.module.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import Content from "./Content";
import BelowContent from "./BelowContent";

const LandingPage = () => {
  return (
    <>
      <div className={classes.body}>
        <header className={`${classes.nav}`}>
          <img src={require("./fomlogo.png")} className={classes.logo} />
          <div className={classes.nav}>
            <ul className={classes.list}>
              <li className={classes.listitem}>About Us</li>
              <li className={classes.listitem}>Meditation</li>
              <li className={classes.listitem}>Yoga Accessories</li>
              <li className={classes.listitem}>Travel Accessories </li>
              <li className={classes.listitem}>Personal Coaching</li>
            </ul>
          </div>
        </header>
        <div className={classes.cartrow}>
          <ul className={classes.cartrow}>
            <button className={classes.cartrowitem}>Wishlist</button>
            <li>
              <MdFavorite className={classes.icon} />
            </li>
            <button className={classes.cartrowitem}> Add to Cart </button>
            <li>
              <BsFillCartPlusFill className={classes.icon} />
            </li>
          </ul>
        </div>
        <Content />
        <BelowContent className={classes.belcontitems}/>
      </div>
    </>
  );
};
export default LandingPage;
