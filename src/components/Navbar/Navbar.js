import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import classnames from "classnames";
import useScroll from "../../hooks/useScroll";
import Hamburger from "../Hamburger/Hamburger";
import Times from "../Times/Times";
import "./Navbar.css";
import NavbarAccordion from "../NavbarAccordion/NavbarAccordion";

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
          {!showSubnav ? <Hamburger handleClick={toggleSubnav} /> : <Times handleClick={toggleSubnav} />}
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
              <div>Viticulture</div>
            </Link>
            <Link to="/study-guide/winemaking" onClick={hideSubnav}>
              <div>Winemaking</div>
            </Link>
            <NavbarAccordion title="USA">
              <Link to="/study-guide/usa/napa" onClick={hideSubnav}>
                <div>Napa Valley</div>
              </Link>
              <Link to="/study-guide/usa/sonoma" onClick={hideSubnav}>
                <div>Sonoma</div>
              </Link>
              <Link to="/study-guide/usa/central-coast" onClick={hideSubnav}>
                <div>Central Coast</div>
              </Link>
              <Link to="/study-guide/usa/pacific-northwest" onClick={hideSubnav}>
                <div>Pacific Northwest</div>
              </Link>
            </NavbarAccordion>
            <NavbarAccordion title="France">
              <Link to="/study-guide/france/bordeaux" onClick={hideSubnav}>
                <div>Bordeaux</div>
              </Link>
              <Link to="/study-guide/france/burgundy" onClick={hideSubnav}>
                <div>Burgundy</div>
              </Link>
              <Link to="/study-guide/france/rhone-valley" onClick={hideSubnav}>
                <div>Rhône Valley</div>
              </Link>
              <Link to="/study-guide/france/loire-valley" onClick={hideSubnav}>
                <div>The Loire Valley</div>
              </Link>
            </NavbarAccordion>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
