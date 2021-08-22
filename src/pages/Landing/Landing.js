import React from "react";
import NavigationCard from "../../components/NavigationCard/NavigationCard";
import Quintessa from "../../assets/Quintessa.jpeg";
import WhiteGrapesThumb from "../../assets/WhiteGrapesThumb.png";
import ViticultureThumb from "../../assets/ViticultureThumb.png";
import NapaValleyThumb from "../../assets/NapaValleyThumb.png";
import SonomaFieldThumb from "../../assets/SonomaFieldThumb.png";
import CentralCoastVineyardThumb from "../../assets/CentralCoastVineyardThumb.png";
import PacificNorthwestVineyard from "../../assets/PacificNorthwestVineyardThumbnail.png";
import BordeauxChatueaThumb from "../../assets/BordeauxChateauThumb.png";
import BurgundyVineyard from "../../assets/BurgundyThumb.png";
import RhoneValleyThumb from "../../assets/RhoneValleyVineyardThumb.png";
import "./Landing.css";

const Landing = () => {
  const navigateToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="Landing">
      <img src={Quintessa} alt="Quintessa" className="hero" />
      <nav>
        <NavigationCard
          title="Viticulture"
          extra="Study Guide | Viticulture"
          src={ViticultureThumb}
          alt="Red grapes"
          to="/study-guide/viticulture"
          onClick={navigateToTop}
        />
        <NavigationCard
          title="Winemaking"
          extra="Study Guide | Winemaking"
          src={WhiteGrapesThumb}
          alt="White grapes"
          to="/study-guide/winemaking"
          onClick={navigateToTop}
        />
        <NavigationCard
          title="Napa Valley"
          extra="Study Guide | USA - Napa Valley"
          src={NapaValleyThumb}
          alt="Napa Valley"
          to="/study-guide/usa/napa"
          onClick={navigateToTop}
        />
        <NavigationCard
          title="Sonoma"
          extra="Study Guide | USA - Sonoma"
          src={SonomaFieldThumb}
          alt="Sonoma County Vineyard"
          to="/study-guide/usa/sonoma"
          onClick={navigateToTop}
        />
        <NavigationCard
          title="Central Coast"
          extra="Study Guide | USA - Central Coast"
          src={CentralCoastVineyardThumb}
          alt="Central Coast Vineyard"
          to="/study-guide/usa/central-coast"
          onClick={navigateToTop}
        />
        <NavigationCard
          title="Pacific Northwest"
          extra="Study Guide | USA - Pacific Northwest"
          src={PacificNorthwestVineyard}
          alt="Pacific Northwest Vineyard"
          to="/study-guide/usa/pacific-northwest"
          onClick={navigateToTop}
        />
        <NavigationCard
          title="Bordeaux"
          extra="Study Guide | France - Bordeaux"
          src={BordeauxChatueaThumb}
          alt="Château Margaux"
          to="/study-guide/france/bordeaux"
          onClick={navigateToTop}
        />
        <NavigationCard
          title="Burgundy"
          extra="Study Guide | France - Burgundy"
          src={BurgundyVineyard}
          alt="Vineyard in Burgundy"
          to="/study-guide/france/burgundy"
          onClick={navigateToTop}
        />
        <NavigationCard
          title="Rhône Valley"
          extra="Study Guide | France - Rhône Valley"
          src={RhoneValleyThumb}
          atl="Vineyard in Rhone"
          to="/study-guide/france/rhone-valley"
          onClick={navigateToTop}
        />
      </nav>
    </div>
  );
};

export default Landing;
