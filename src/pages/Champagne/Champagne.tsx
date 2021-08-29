import React, { useRef } from "react";
import Page from "../../components/Page/Page";
import SideNav from "../../components/SideNav/SideNav";
import SideNavLink from "../../components/SideNavLink/SideNavLink";
import StudyGuide from "../../components/StudyGuide/StudyGuide";
import StudyPage from "../../components/StudyPage/StudyPage";
import Content from "../../components/Content/Content";
import StudyImage from "../../components/StudyImage/StudyImage";
import ChampangeVineyard from "../../assets/ChampagneVineyard.jpeg";
import ChampagneMap from "../../assets/ChampagneMap.jpeg";
import "./Champagne.css";

const Champagne: React.FC = () => {
  const ref1 = useRef<HTMLHeadingElement>(null);
  const ref2 = useRef<HTMLHeadingElement>(null);
  const ref3 = useRef<HTMLHeadingElement>(null);
  const ref4 = useRef<HTMLHeadingElement>(null);
  const ref5 = useRef<HTMLHeadingElement>(null);
  const ref6 = useRef<HTMLHeadingElement>(null);
  const ref7 = useRef<HTMLHeadingElement>(null);
  const ref8 = useRef<HTMLHeadingElement>(null);
  return (
    <>
      <Page className="Champagne">
        <StudyGuide>
          <StudyPage>
            <header>
              <h1>Champagne</h1>
            </header>
            <Content>
              <p>
                The Champagne AOC in northern France produces the world’s most famous sparkling wine. The word
                itself—Champagne—has become synonymous with sparkling wine, but true Champagne may only be produced in
                the small region of the same name in northern France. Sparkling winemaking in Champagne dates to the
                1700s.
              </p>
              <StudyImage src={ChampangeVineyard} alt="Champagne Vineyard" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref1}>The Region</h2>
            <Content>
              <p>
                Champagne AOC is located along the 48th parallel, near the world’s northerly limit for viticulture. The
                region’s cool climate promotes high acidity in grapes, an asset in the production of sparkling wine.
              </p>
              <p>
                The vineyards of Champagne are planted on chalky soils, which retain heat and provide excellent water
                regulation for the vine. Below the ground, a large natural cave network provides perfect storage
                conditions for the cellaring of wine.
              </p>
              <h3>Champagne is divided into five main areas</h3>
              <p>
                <strong>Montagne de Reims:</strong> Champagne’s northernmost region, situated around the city of Reims
                is the premier region for Pinot Noir.
              </p>
              <p>
                <strong>Vallée de la Marne:</strong> The Marne Valley surrounds the Marne River, and includes the town
                of Epernay. Meunier is the favored grape of the region.
              </p>
              <p>
                <strong>Côte des Blancs:</strong> The best region in Champagne for Chardonnay grapes.
              </p>
              <p>
                <strong>Côte de Sézanne</strong>
              </p>
              <p>
                <strong>The Aube</strong> (Côte des Bars)
              </p>
              <p>
                In addition, wine-producing villages in Champagne are classified as grand cru, premier cru, or simply
                cru. In Burgundy, single vineyards attain the rank of premier or grand cru; in Champagne, entire
                villages achieve status. The 17 Grand Cru villages are held in the highest regard, and are located in
                the Montage de Reims, Vallée de la Marne, and Côte des Blancs. If a producer makes a wine using only
                grand cru or premier cru fruit, he may use these terms on the bottle’s label.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref2}>The Wine</h2>
            <Content>
              <p>
                Champagne gets its sparkle from a second fermentation in the bottle. A still base wine is bottled with a
                small amount of liqueur de tirage: a mixture of wine, sugar, and yeast. This causes a second
                fermentation, and the carbon dioxide produced by yeasts converting sugar to alcohol is trapped inside
                the bottle.
              </p>
              <p>
                As the yeasts die, they form sediment (lees) inside the bottle. Over time, the presence of lees in the
                wine contributes pleasant acacia, bakeshop and croissant aromas. Producers will age their better
                Champagne bottlings on the lees for a period of years.
              </p>
              <p>
                Part of Champagne’s appeal is visual, so producers “disgorge” the wines prior to sale. In this process,
                the lees, which would create cloudiness in the final wine, are removed from the bottle. A small amount
                of “dosage”, a liquid mixture of sugar and wine, is often added for balance or outright sweetness.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref3}>The major grapes of Champagne</h2>
            <Content>
              <p>
                <strong>Pinot Noir:</strong> Pinot Noir provides structure, weight, and power in the wines of Champagne.
              </p>
              <p>
                <strong>Meunier (Pinot Meunier):</strong> “Miller’s Pinot,” so named for its characteristic speckled
                appearance—as though the grapes leaves have been dusted with flour—contributes attractive fruitiness and
                youthful accessibility to the wine. Many non-vintage cuvées contain a significant proportion of Meunier.
              </p>
              <p>
                <strong>Chardonnay:</strong> Champagne’s longest-lived wines are often based on Chardonnay. The grape
                tends to produce chiseled, austere, and/or elegant styles of wine.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref4}>Sweetness</h2>
            <Content>
              <p>
                The final sweetness level of Champagne is determined by the “dosage”, an addition of liquid sugar and
                wine occurring after disgorgement. Most styles are “Brut,” or dry in style.
              </p>
              <p>
                <strong>In order from driest to sweetest, the indicators are:</strong>
              </p>
              <p>
                <strong>Brut Nature/Brut Zero:</strong> Absolutely bone-dry, with no added dosage.
              </p>
              <p>
                <strong>Extra Brut:</strong> Nearly bone-dry, with little to no dosage.
              </p>
              <p>
                <strong>Brut:</strong> This category ranges from bone dry to wines with a little residual sugar,
                depending on the house style.
              </p>
              <p>
                <strong>Extra Sec/Extra Dry:</strong> Although the category is “extra dry”, the wines are really
                off-dry.
              </p>
              <p>
                <strong>Sec/Dry:</strong> Wines labeled “dry” are actually off-dry to semi-sweet.
              </p>
              <p>
                <strong>Demi-Sec:</strong> “Half-dry” Champagne suitable for many dessert courses. Medium sweet.
              </p>
              <p>
                <strong>Doux:</strong> A rarely produced dessert-sweet Champagne style.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref5}>Styles</h2>
            <Content>
              <p>
                Non-Vintage (NV): Generally brut, the NV cuvée represents a house’s signature style, and the blender’s
                job is to ensure its consistency from year to year.
              </p>
              <p>
                Vintage: Vintage wines are superior offerings from a single harvest. As the wines are aged in a
                producer’s caves for a longer period of time than NV bottlings, they often display a greater “leesy”
                character. Respectable houses only produce vintage wines in good years.
              </p>
              <p>
                Prestige Cuvée (Tête de Cuvée): Usually the finest and most expensive bottling that a house offers, the
                prestige cuvée is typically (but not always) vintage-dated and aged for a number of years prior to
                release. Prestige Cuvées are usually only released in superior vintages. Many of the large houses
                produce prestige cuvées from their own vineyards—even single vineyards in exceptional cases. Prestige
                cuvées may be Blanc de Blancs, Blanc de Noirs or Rosé in style. Classic examples include Moët et Chandon
                “Dom Pérignon”, Taittinger “Comtes de Champagne”, Louis Roederer “Cristal”, Laurent-Perrier “Grande
                Siècle”, Pol Roger “Cuvée Sir Winston Churchill”, Ruinart “Dom Ruinart”, and Veuve Clicquot-Ponsardin
                “La Grande Dame”.
              </p>
              <p>
                Blanc de Blancs: Blanc de Blancs may only be produced from white grapes. They may be vintage-dated or
                NV. The Blanc de Blancs category represents some of Champagne’s most ageworthy examples of Chardonnay.
                The wines are often austere and steely in youth, but they can develop an intense, toasty bouquet with
                maturity.
              </p>
              <p>
                Blanc de Noirs: White wines produced solely from red grapes. Blanc de Noirs can be powerful, rich and
                intense.
              </p>
              <p>
                Rosé Champagne: Rosé Champagne is usually produced by blending red and white base wines prior to the
                second fermentation. Vintage, NV, and prestige cuvées may also be produced in pink versions. A rosé
                prestige cuvée, a novelty in years past, is usually the most expensive and rare product a house offers.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref6}>Types of Producers</h2>
            <Content>
              <p>
                In Champagne, large brands, known as négociants, purchase many of their grapes from networks of smaller
                growers; and many smaller estates, known colloquially as “grower-producers” grow their own fruit for
                vinification.
              </p>
              <p>
                The larger houses may enjoy more consistency from year to year but the smaller estates may offer a more
                individual product. Négociants, such as Moët et Chandon or Veuve Clicquot, can be identified by locating
                the initials “NM” on a small code on the label of the bottle. Large houses are generally centered in
                Reims and Epernay, and are often open to visitors.
              </p>
              <p>
                Grower-producers can be identified by locating the initials “RM” on the bottle code, and are located
                throughout the region. Famous examples include Vilmart & Cie, Pierre Gimonnet and Egly-Ouriet.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref7}>Selling Champagne</h2>
            <Content>
              <p>
                Positively suggesting Champagne to start can be very effective, particularly if there is a noted
                celebration at the table.
              </p>
              <p>
                Champagne conveys elegance and sophistication. Pouring Champagne at a few tables often leads to more
                Champagne sales around the room. In addition, capably opening and pouring Champagne makes an impression
                of professionalism to your guests.
              </p>
              <p>
                Champagne makes an excellent first-course wine, pairing well with fried foods, light and raw seafood
                courses, savory pastries, soft cheeses, and many soups.
              </p>
              <p>
                Guests often think of Champagne and wine as separate categories. Remind them that Champagne is a really
                versatile food wine: a bottle of Champagne can be a very effective match for an entire meal, as its
                bubbles and acidity cleanse and enliven the palate.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref8}>Champagne Map</h2>
            <Content>
              <StudyImage src={ChampagneMap} alt="Champagne Map" />
            </Content>
          </StudyPage>
        </StudyGuide>
      </Page>
      <SideNav header="Champagne">
        <SideNavLink reference={ref1}>The Region</SideNavLink>
        <SideNavLink reference={ref2}>The Wine</SideNavLink>
        <SideNavLink reference={ref3}>The major grapes of Champagne</SideNavLink>
        <SideNavLink reference={ref4}>Sweetness</SideNavLink>
        <SideNavLink reference={ref5}>Styles</SideNavLink>
        <SideNavLink reference={ref6}>Types of Producers</SideNavLink>
        <SideNavLink reference={ref7}>Selling Champagne</SideNavLink>
        <SideNavLink reference={ref8}>Champagne Map</SideNavLink>
      </SideNav>
    </>
  );
};
export default Champagne;
