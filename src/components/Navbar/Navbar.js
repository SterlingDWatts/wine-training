import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import classnames from "classnames";
import Hamburger from "../Hamburger/Hamburger";
import CloseButton from "../CloseButton/CloseButton";
import "./Navbar.css";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [showNav, setShowNav] = useState(true);
  const [showSubnav, setShowSubnav] = useState(false);
  const [atTop, setAtTop] = useState(window.pageYOffset === 0);

  const onLandingPage = useRouteMatch({
    path: "/",
    strict: true,
    sensitive: true,
    exact: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowSubnav(false);
      setAtTop(window.pageYOffset === 0);
      const currentScrollPos = window.pageYOffset;
      setShowNav(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
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
        <div className="section">
          <Link to="/viticulture" onClick={hideSubnav}>
            <span>Viticulture</span>
          </Link>
          <Link to="/winemaking" onClick={hideSubnav}>
            <span>Winemaking</span>
          </Link>
          <Link to="/napa" onClick={hideSubnav}>
            <span>Napa Valley</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
