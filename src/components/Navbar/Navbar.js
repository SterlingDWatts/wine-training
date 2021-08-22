import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import classnames from "classnames";
import useScroll from "../../hooks/useScroll";
import Hamburger from "../Hamburger/Hamburger";
import CloseButton from "../CloseButton/CloseButton";
import "./Navbar.css";

const Navbar = () => {
  const [showNav, atTop] = useScroll();
  const [showSubnav, setShowSubnav] = useState(false);

  const onLandingPage = useRouteMatch({
    path: "/",
    strict: true,
    sensitive: true,
    exact: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowSubnav(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const toggleSubnav = () => {
    setShowSubnav(!showSubnav);
  };

  const hideSubnav = () => {
    setShowSubnav(false);
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={classnames("Navbar", {
        "navbar--hidden": !showNav,
        "navbar--clear": onLandingPage && !showSubnav && atTop,
      })}
    >
      <nav className="main-navigation">
        <div className="left">
          <Link to="/" onClick={hideSubnav}>
            WINE
          </Link>
        </div>
        <div className="right">
          {!showSubnav ? <Hamburger handleClick={toggleSubnav} /> : <CloseButton handleClick={toggleSubnav} />}
        </div>
      </nav>
      <nav
        className={classnames("subnav", {
          "subnav--hidden": !showNav || !showSubnav,
        })}
      >
        <div className="container">
          <div className="section">
            <Link to="/study-guide/viticulture" onClick={hideSubnav}>
              <span>Viticulture</span>
            </Link>
            <Link to="/study-guide/winemaking" onClick={hideSubnav}>
              <span>Winemaking</span>
            </Link>
            <Link to="/study-guide/usa/napa" onClick={hideSubnav}>
              <span>Napa Valley</span>
            </Link>
            <Link to="/study-guide/usa/sonoma" onClick={hideSubnav}>
              <span>Sonoma</span>
            </Link>
            <Link to="/study-guide/usa/central-coast" onClick={hideSubnav}>
              <span>Central Coast</span>
            </Link>
            <Link to="/study-guide/usa/pacific-northwest" onClick={hideSubnav}>
              <span>Pacific Northwest</span>
            </Link>
            <Link to="/study-guide/france/bordeaux" onClick={hideSubnav}>
              <span>Bordeaux</span>
            </Link>
            <Link to="/study-guide/france/burgundy" onClick={hideSubnav}>
              <span>Burgundy</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
