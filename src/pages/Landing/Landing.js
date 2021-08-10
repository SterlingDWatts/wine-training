import React from "react";
import NavigationCard from "../../components/NavigationCard/NavigationCard";
import Quintessa from "../../assets/Quintessa.jpeg";
import WhiteGrapesThumb from "../../assets/WhiteGrapesThumb.png";
import ViticultureThumb from "../../assets/ViticultureThumb.png";
import NapaValleyThumb from "../../assets/NapaValleyThumb.png";
import SonomaFieldThumb from "../../assets/SonomaFieldThumb.png";
import CentralCoastVineyardThumb from "../../assets/CentralCoastVineyardThumb.png";
import PacificNorthwestVineyard from "../../assets/PacificNorthwestVineyard.png";
import "./Landing.css";

const Landing = () => {
  const navigateToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="Landing">
      <img src={Quintessa} alt="Quintessa" width="100%" />
      <nav>
        <NavigationCard src={ViticultureThumb} alt="Red grapes" to="/viticulture" onClick={navigateToTop}>
          Viticulture
        </NavigationCard>
        <NavigationCard src={WhiteGrapesThumb} alt="White grapes" to="/winemaking" onClick={navigateToTop}>
          Winemaking
        </NavigationCard>
        <NavigationCard src={NapaValleyThumb} alt="Napa Valley" to="/napa" onClick={navigateToTop}>
          Napa Valley
        </NavigationCard>
        <NavigationCard src={SonomaFieldThumb} alt="Sonoma County Vineyard" to="/sonoma" onClick={navigateToTop}>
          Sonoma
        </NavigationCard>
        <NavigationCard
          src={CentralCoastVineyardThumb}
          alt="Central Coast Vineyard"
          to="/central-coast"
          onClick={navigateToTop}
        >
          Central Coast
        </NavigationCard>
        <NavigationCard
          src={PacificNorthwestVineyard}
          alt="Pacific Northwest Vineyard"
          to="/pacific-northwest"
          onClick={navigateToTop}
        >
          Pacific Northwest
        </NavigationCard>
      </nav>
    </div>
  );
};

export default Landing;
