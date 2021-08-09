import React, { useRef } from "react";
import Page from "../../components/Page/Page";
import SideNav from "../../components/SideNav/SideNav";
import SideNavLink from "../../components/SideNavLink/SideNavLink";
import StudyGuide from "../../components/StudyGuide/StudyGuide";
import StudyPage from "../../components/StudyPage/StudyPage";
import Content from "../../components/Content/Content";
import StudyImage from "../../components/StudyImage/StudyImage";
import ForYourInfo from "../../components/ForYourInfo/ForYourInfo";
import WhiteGrapes from "../../assets/WhiteGrapes.png";
import Maceration from "../../assets/Maceration.png";
import RoseMaking from "../../assets/RoseMaking.png";
import Fermentation from "../../assets/Fermentation.png";
import CarbonicMaceration from "../../assets/CarbonicMaceration.png";
import Batonnage from "../../assets/Batonnage.png";
import WineService from "../../assets/WineService.png";
import "./Winemaking.css";

const Winemaking = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  return (
    <>
      <Page className="Viticulture">
        <StudyGuide>
          <StudyPage>
            <header>
              <h1>Winemaking</h1>
            </header>
            <Content>
              <p>
                The role of the winemaker has evolved immensely since the first time grape juice was transformed into
                wine, and the techniques, information, and tools available to winemakers only continue to increase.
                Sommeliers and servers need to know the basics of the winemaking process, not only to satiate guests’
                curiosity but also to better understand wine itself.
              </p>
              <p>
                The major steps of winemaking are crushing, maceration, fermentation, aging, and bottling, with many
                other processes and choices along the way.
              </p>
              <StudyImage src={WhiteGrapes} alt="Grapes on a vine." />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref1}>Crushing</h2>
            <Content>
              <p>
                The area of a winery where grapes arrive is called the crush pad. As the name suggests, this is where
                the grapes are crushed, the first step in processing. White grapes typically enter the press upon
                arrival and are pressed immediately to extract juice. This limits the juice’s contact with grape skins,
                creating lighter, fresher wines. Red grapes may be either destemmed or put into fermentation tanks for
                whole-cluster pressing (that is, with stems intact). Destemmed grapes go through a sorting table, a
                long, vibrating table that helps separate out small material other than grapes, or MOG, while sorters
                pick away larger MOG.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref2}>Maceration</h2>
            <Content>
              <p>
                Maceration, the contact of grape juice with skins before fermentation, may last a few hours up to a few
                days. It is typically carried out at temperatures too low for yeast to begin fermenting. This process
                encourages the extraction of more fruit and color from grape skins, and if it is done with stems
                included, more spice tones may be evident in the wine. Maceration is limited or avoided altogether in
                white wine production because white grapes also contain bitter tannin compounds that can be extracted
                through extended maceration. A short maceration for white wine can range from 15 minutes to eight hours.
                Orange wine, however, is made by treating white grapes like red ones through extended skin contact.
              </p>
              <StudyImage src={Maceration} alt="Maceration." />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref3}>Pressing</h2>
            <Content>
              <p>
                When grapes are pressed, they open and release the juice inside. Pressing must be done quickly enough to
                avoid overexposure to oxygen but gently enough to avoid breaking stems and seeds that contain bitter
                compounds.
              </p>
              <p>
                Presses come in two forms, batch and continuous. In a batch press, a set weight of grapes is pressed,
                leftover pomace is removed, and the process repeats with another batch of grapes. Batch presses are
                considered the gentler method, giving the winemaker better control over pressure levels and extraction.
                Continuous presses operate with little to no manual labor and are reserved for large quantities of
                grapes.
              </p>
              <h5>White Wine</h5>
              <p>
                White grapes are usually pressed as soon as they arrive or after a brief maceration on the skins. After
                pressing, the juice is transferred to a tank or other vessel to prepare for fermentation.
              </p>
              <h5>Red Wine</h5>
              <p>
                Pressing occurs in red wine at or near the end of fermentation. The pressed juice may be blended
                immediately with the free-run juice, aged separately for blending later, or bottled on its own. Some
                wineries may not use press wine at all because it differs from free-run juice in terms of tannins,
                acidity, and flavor due to its extended contact with skins, seeds, and/or stems.
              </p>
              <h5>Rosé Wine</h5>
              <p>
                There are various methods for making rosé. Winemakers may press red grapes immediately upon arrival to
                the winery, remove some juice from tanks after a short contact with skins (saignée), or blend red and
                white grape juice together. Pressing immediately offers a lighter style, while saignée and blending can
                give more weight, fruit, and even tannin to rosé. The blending method is most common in sparkling wine
                production.
              </p>
              <ForYourInfo backgroundColor="green">
                <p>
                  <strong>Free-run</strong> juice refers to grape juice obtained with little to no pressure on the
                  grapes. As the pressure of a press increases, more juice is forced out of the grapes. Winemakers will
                  separate different sections of pressure ranges, or “cuts.” Juice prior to the first cut is often
                  considered free-run, though opinions vary on the maximum pressure that should be used for juice called
                  free-run.
                </p>
              </ForYourInfo>
              <StudyImage src={RoseMaking} alt="Rose making process" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref4}>Fermentation</h2>
            <Content>
              <p>
                Ripe grapes contain a lot of sugar, a required ingredient for alcoholic fermentation. Yeasts, which
                exist naturally on grapes, act on the sugars to convert them to ethyl alcohol. Commercial yeasts can
                provide greater consistency and specific attributes desired by winemakers. Wild yeasts, on the other
                hand, may add layers of complexity and flavor but are less reliable and sometimes produce unwanted
                flavors. To manage the fermentation process, winemakers often control temperature, limit oxygen
                exposure, and use sulfur dioxide (SO<sub>2</sub>).
              </p>
              <p>
                Managing temperature is vital, as most yeast strains generally stop fermenting below 50 degrees
                Fahrenheit and have difficulty surviving above mid-90 degree temperatures. Further, wine’s flavor can be
                significantly impacted by fermentation temperature. Today, temperature control is widely used. Cooler
                fermentations will preserve fruit and freshness, while warmer fermentations, more frequently used with
                red wines, will aid in the extraction of color, tannins, and flavor compounds.
              </p>
              <p>
                When there is little to no sugar left to convert, fermentation is over and the resulting wine is
                considered dry. Fermentation may also be stopped prematurely. Other byproducts to fermentation are
                carbon dioxide (CO<sub>2</sub>) and heat.
              </p>
              <StudyImage src={Fermentation} alt="The fermentation process." caption="The fermentation process" />
              <ForYourInfo backgroundColor="green">
                <p>
                  Most red and some white wines will also go through a second process called{" "}
                  <strong>malolactic fermentation</strong> (MLF or malo), either during or after the primary
                  fermentation. Caused by a lactic acid bacteria, malolactic fermentation converts the tart, natural
                  malic acid in grapes (present in green apples) to a softer, rounder lactic acid (present in dairy).
                  This can happen naturally but is often initiated through the inoculation of bacteria. The amount of
                  conversion of malic to lactic acid can be anywhere from 1 to 100 percent. In white wines, malolactic
                  fermentation is most common in Chardonnay, but the process can be used with any grape. Its effect,
                  noted in mouthfeel, texture, and weight, ranges from subtle to dramatic, depending on how the
                  technique is employed.
                </p>
              </ForYourInfo>
              <h5>Fortified & Sweet Wine</h5>
              <p>There are two methods for making sweet wine:</p>
              <ol>
                <li>Stop fermentation while the must still contains significant residual sugar.</li>
                <li>Add sugar back to the wine after it has fermented to dryness.</li>
              </ol>
              <p>
                Most classic sweet wines of the world follow the first path. There are various ways to halt
                fermentation:
              </p>
              <ol>
                <li>
                  Mutage: Fortify the wine with a high-proof spirit, which immediately stops yeast activity, preserving
                  natural sugar
                </li>
                <li>
                  Cold stabilization & filtering: Chill the wine until yeast activity ceases, then filter it to remove
                  yeasts while preserving natural sugar
                </li>
                <li>
                  Cold stabilization & SO<sub>2</sub>: Chill the wine until yeast activity ceases, then add SO
                  <sub>2</sub> to eliminate the possibility of re-fermentation. This is often done in conjunction with
                  the second option.
                </li>
              </ol>
              <h5>Sparkling Wine</h5>
              <p>
                Sparkling wine contains a high level of carbon dioxide, which creates bubbles. Methods to produce
                sparkling wine include the traditional method, Charmat (tank) method, natural (ancestral) method, and
                carbonation method.
              </p>
              <p>
                In the traditional method, championed in Champagne, a still base wine (vin clair) is bottled with
                liqueur de tirage, a sugar, wine, and yeast combination. This prompts a second alcoholic fermentation in
                the bottle, producing additional alcohol and CO2. The Charmat method is similar but usually occurs in
                large, pressurized tanks, and the wine is bottled quickly, without extended time on the lees.
              </p>
              <p>
                Natural method sparkling wines will only have one fermentation that begins in the tank and finishes in
                the bottle. They are not disgorged by the producer. Lastly, carbonation is a cheap, industrial process
                in which CO<sub>2</sub> is injected into a base wine; it is not used for quality winemaking.
              </p>
              <StudyImage
                src={CarbonicMaceration}
                alt="The carbonic maceration process"
                caption="The carbonic maceration process"
              />
              <ForYourInfo backgroundColor="green">
                <p>
                  <strong>Carbonic maceration</strong> is a unique fermentation method often associated with Beaujolais.
                  In this process, whole clusters are placed in a tank and blanketed with CO2. This anaerobic
                  environment causes intracellular fermentation as grapes release enzymes, creating a few degrees of
                  alcohol before the enzymes die. The fermenting juice from crushed grapes below eventually finishes
                  fermenting the remaining sugars. This method creates soft, fruity wines intended for early
                  consumption. A producer may also use some amount of partial carbonic maceration or an open-top,
                  whole-berry ferment that can contribute some carbonic character. Carbonic maceration is typically seen
                  with grapes such as Pinot Noir, Syrah, and Gamay
                </p>
              </ForYourInfo>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref5}>Aging</h2>
            <Content>
              <p>
                Following fermentation, the aging, or élevage, of wines can dramatically impact flavor. Red wines are
                generally aged longer than white wines, which are typically bottled within a few months of harvest. Oak
                aging is more common for red wines. New oak (barrels that haven’t been used) will lend spice tones,
                complexity, and weight to the final wine. Neutral oak (barrels that have been used multiple times) offer
                oxygen exposure, but the barrel itself will impact the wine only minimally, if at all. Barrel type,
                size, and toast level, as well as the length of aging, will determine the oak’s final impact on the
                wine.
              </p>
              <p>
                France and the United States are key sources for oak barrels, but barrels also come from Hungary,
                Slovenia, and other European countries. France and the US rely on different oak species and production
                techniques, and the resulting barrels can impart distinct aromas. Winemakers may also opt for other
                aging vessels for less flavor impact, including stainless steel, concrete, and glass.
              </p>
              <h5>Bâtonnage</h5>
              <p>
                When making white wine, a winemaker may choose to employ bâtonnage, or “lees stirring,” a process in
                which expired yeast cells that have settled are stirred back into the wine. It is most commonly used
                when oak barrels are the aging vessel of choice and can happen during or after fermentation, at varying
                frequencies. Bâtonnage may produce more texture and richer, creamier flavors.
              </p>
              <StudyImage src={Batonnage} alt="The bâtonnage process" caption="The bâtonnage process" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref6}>Clarification & Stabilization</h2>
            <Content>
              <p>
                From the moment wine enters a fermentation vessel to the point it is bottled, various processes can aid
                in clarification and stabilization, including cold stabilization, racking, fining, filtering, and adding
                sulfur. Most winemakers use these processes, though some bypass one or more of them for stylistic
                reasons.
              </p>
              <h5>Cold Stabilization</h5>
              <p>
                White wines do not contain sediment like red wines, but they still contain tartrates, a solid form of
                acid. These solids can be precipitated out of the wine if it is chilled below 25 degrees Fahrenheit. A
                first stabilization usually occurs before fermentation, when the juice from pressing has been
                transferred to a tank. The process may be repeated before bottling. White wines that have not been cold
                stabilized often contain (harmless) tartrates.
              </p>
              <h5>Racking</h5>
              <p>
                During the aging process, compounds in the wine will begin to fall out of solution. The resulting
                sediment, which includes expired yeasts, tartrates, and anthocyanins, can be removed by transferring the
                liquid to another vessel, leaving sediment at the bottom of the previous one. This racking process, or
                soutirage, can be done multiple times but must be carefully executed to limit oxygen exposure.
              </p>
              <h5>Fining</h5>
              <p>
                Another process for clarifying wines is fining, or collage, in which a fining agent such as egg white,
                bentonite (a type of clay), casein (a milk protein), gelatin (a protein derived from collagen), or
                isinglass (a material obtained from sturgeon bladders) is added to a wine to precipitate out solids.
                These additions can also aid in the racking process.
              </p>
              <h5>Filtration</h5>
              <p>
                Before bottling, wine is usually filtered, passing through a membrane with microscopic holes that
                prevent any remaining solids, yeast, and bacteria from entering the bottle. Some argue that this process
                removes flavors from the wine. Certain styles, however, such as off-dry wines and wines that do not
                undergo malolactic fermentation, require filtration to prevent unintended bottle fermentation.
              </p>
              <h5>Sulfur</h5>
              <p>
                Sulfur dioxide is added at various points during the winemaking process, most often during fermentation
                and maturation, and before bottling. Sulfur has the preservative qualities needed to protect wine from
                oxygen. But too much SO2 may result in excess hydrogen sulfide, which leads to a rotten egg aroma. This
                can be so intense in a young wine that decanting is warranted. Avoiding sulfur usage entirely, however,
                which is common among natural wine proponents, can lead to premature spoilage.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref7}>Bottling</h2>
            <Content>
              <p>
                Besides harvest, bottling is likely the most stressful aspect of winemaking, as it’s the last step in a
                long process and one in which there are various risks, primarily overexposure to oxygen. Bottling may be
                done by hand, which is less expensive but incredibly inefficient, or by machine, which provides
                consistency and speed at a higher cost. Small producers may bottle their wines externally due to the
                cost of a bottling line.
              </p>
              <p>Typical closures include Stelvin (screwcap), natural cork, artificial cork, and glass stopper</p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref8}>In Service: Examining for Faults</h2>
            <Content>
              <p>
                Wine service includes the ritual of tasting for an important purpose: determining whether the wine is
                sound. Here are some common wine faults.
              </p>
              <h5>Brettanomyces</h5>
              <p>
                Brettanomyces bruxellensis, or Brett, is a spoilage yeast found naturally in vineyards and wineries that
                produces potentially off-smelling volatile phenols. Its presence points to a lack of cleanliness during
                winemaking, though it is accepted in some classic wine regions, such as Bordeaux and the Rhône. Brett
                can metabolize various sugars in wine as it ages, so the flaw can escalate after bottling. Descriptors
                include Band-Aid, clove, and barnyard.
              </p>
              <h5>Cork Taint</h5>
              <p>
                The primary compounds responsible for cork taint are 2,4,6-trichloroanisole (TCA) and
                2,4,6-tribromoanisole (TBA). Cork taint can also be found on wood in barrels and cellars. Suppressed
                fruit, bitterness, and odors of wet newspapers, damp basements, and mold are often associated with cork
                taint.
              </p>
              <h5>Heat Damage</h5>
              <p>
                Wine exposed to high temperatures can produce cooked, tawny, madeira-like flavors. If the wine was
                improperly stored, this may also be indicated by a cork protruding from the bottle or wine leaking
                through the cork.
              </p>
              <h5>Oxidation</h5>
              <p>
                Natural cork closures expose wine to a very limited amount of oxygen while the wine is aging. But, too
                much oxygen due to a bad cork or storage conditions can jumpstart the oxidation of ethyl alcohol, muting
                the fruit and flavors of a wine. Bottles with natural corks are stored sideways, keeping corks wet, for
                this reason.
              </p>
              <h5>Volatile Acidity</h5>
              <p>
                Acetic acid bacteria convert glucose and ethanol, which exist naturally in wine, to acetic acid, or
                vinegar. These bacteria exist naturally on grape skins and may multiply during fermentation by feeding
                off oxygen. Once a certain threshold of volatile acidity, or VA, is reached, vinegary aromas will be
                notable in the wine. Everyone has a different threshold for (and opinion about) VA; some wine regions of
                the world, such as Barolo, consider it classic.
              </p>
              <StudyImage src={WineService} alt="Wine service" />
            </Content>
          </StudyPage>
        </StudyGuide>
      </Page>
      <SideNav header="Winemaking">
        <SideNavLink reference={ref1}>Crushing</SideNavLink>
        <SideNavLink reference={ref2}>Maceration</SideNavLink>
        <SideNavLink reference={ref3}>Pressing</SideNavLink>
        <SideNavLink reference={ref4}>Fermentation</SideNavLink>
        <SideNavLink reference={ref5}>Aging</SideNavLink>
        <SideNavLink reference={ref6}>Clarification & Stabilization</SideNavLink>
        <SideNavLink reference={ref7}>Bottling</SideNavLink>
        <SideNavLink reference={ref8}>In Service: Examining for Faults</SideNavLink>
      </SideNav>
    </>
  );
};

export default Winemaking;
