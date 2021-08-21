import React from "react";
import NavigationCard from "../../components/NavigationCard/NavigationCard";
import Quintessa from "../../assets/Quintessa.jpeg";
import WhiteGrapesThumb from "../../assets/WhiteGrapesThumb.png";
import ViticultureThumb from "../../assets/ViticultureThumb.png";
import NapaValleyThumb from "../../assets/NapaValleyThumb.png";
import SonomaFieldThumb from "../../assets/SonomaFieldThumb.png";
import CentralCoastVineyardThumb from "../../assets/CentralCoastVineyardThumb.png";
import PacificNorthwestVineyard from "../../assets/PacificNorthwestVineyard.png";
import BordeauxChatueaThumb from "../../assets/BordeauxChateauThumb.png";
import "./Landing.css";

const Landing = () => {
  const navigateToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="Landing">
      <img src={Quintessa} alt="Quintessa" width="100%" />
      <nav>
        <NavigationCard
          title="Viticulture"
          extra="Study Guide | Viticulture"
          src={ViticultureThumb}
          alt="Red grapes"
          to="/viticulture"
          onClick={navigateToTop}
        />
        <NavigationCard
          title="Winemaking"
          extra="Study Guide | Winemaking"
          src={WhiteGrapesThumb}
          alt="White grapes"
          to="/winemaking"
          onClick={navigateToTop}
        />
        <NavigationCard
          title="Napa Valley"
          extra="Study Guide | USA - Napa Valley"
          src={NapaValleyThumb}
          alt="Napa Valley"
          to="/napa"
          onClick={navigateToTop}
        />
        <NavigationCard
          title="Sonoma"
          extra="Study Guide | USA - Sonoma"
          src={SonomaFieldThumb}
          alt="Sonoma County Vineyard"
          to="/sonoma"
          onClick={navigateToTop}
        />
        <NavigationCard
          title="Central Coast"
          extra="Study Guide | USA - Central Coast"
          src={CentralCoastVineyardThumb}
          alt="Central Coast Vineyard"
          to="/central-coast"
          onClick={navigateToTop}
        />
        <NavigationCard
          title="Pacific Northwest"
          extra="Study Guide | USA - Pacific Northwest"
          src={PacificNorthwestVineyard}
          alt="Pacific Northwest Vineyard"
          to="/pacific-northwest"
          onClick={navigateToTop}
        />
        <NavigationCard
          title="Bordeaux"
          extra="Study Guide | France - Bordeaux"
          src={BordeauxChatueaThumb}
          alt="Château Margaux"
          to="/bordeaux"
          onClick={navigateToTop}
        />
      </nav>
    </div>
  );
};

export default Landing;
