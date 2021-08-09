/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import Page from "../../components/Page/Page";
import SideNav from "../../components/SideNav/SideNav";
import SideNavLink from "../../components/SideNavLink/SideNavLink";
import StudyGuide from "../../components/StudyGuide/StudyGuide";
import StudyPage from "../../components/StudyPage/StudyPage";
import Content from "../../components/Content/Content";
import StudyImage from "../../components/StudyImage/StudyImage";
import NapaValley from "../../assets/NapaValley.png";
import NapaSign from "../../assets/NapaSign.png";
import Mondavi from "../../assets/Mondavi.png";
import EndOfProhibition from "../../assets/EndOfProhibition.png";
import NapaFog from "../../assets/NapaFog.png";
import NapaFrost from "../../assets/NapaFrost.png";
import ValleyFloor from "../../assets/ValleyFloor.png";
import Yountville from "../../assets/Yountville.png";
import Oakville from "../../assets/Oakville.png";
import AtlasPeak from "../../assets/AtlasPeak.png";
import LosCarneros from "../../assets/LosCarneros.png";
import Chardonnay from "../../assets/Chardonnay.png";
import SauvignonBlanc from "../../assets/SauvignonBlanc.png";
import CabernetSauvignon from "../../assets/CabernetSauvignon.png";
import Napa2 from "../../assets/Napa2.png";
import NapaMap from "../../assets/NapaMap.png";
import "./Napa.css";

const Napa = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  return (
    <>
      <Page className="Napa">
        <StudyGuide>
          <StudyPage>
            <header>
              <h1>Napa Valley</h1>
            </header>
            <Content>
              <p>
                Napa Valley, America’s most iconic wine region, appears saturated with the vine, yet it only accounts
                for a mere 4% of California wine. 45,000 acres of vineyards carpet the valley floor and dot surrounding
                hillsides and mountains. With an emphasis on luxury wines, this small region on California’s North Coast
                has cemented its image as a destination for wine tourists from around the globe, and as a world-class
                producer of Cabernet Sauvignon. Every third vine in Napa is Cabernet, yet the valley’s complex soil
                patterns, coupled with changing degrees of altitude, sunlight, and temperature, provide a diversity of
                source material for the winemaker to sculpt into wine. Nor is Cabernet the whole story; hundreds of
                varieties, from Sauvignon Blanc to Charbono to Zinfandel, thrive somewhere in the valley’s gentle,
                Mediterranean climate.
              </p>
              <StudyImage src={NapaValley} alt="Napa Valley" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref1}>History</h2>
            <Content>
              <StudyImage src={NapaSign} alt="Napa Vally Sign" />
              <p>
                As the second region nationally designated as an “American Viticultural Area”, Napa Valley AVA dates to
                1981, but the valley’s rich history of viticulture began in the late 1830s. Spurred along by the booming
                days of the 1849 California Gold Rush, Napa wines achieved occasional international notice in the latter
                half of the 19th century, and some of today’s houses, such as Charles Krug, Schramsberg, and Beringer,
                date to the 1860s and ‘70s. In 1880 Scottish poet Robert Louis Stevenson famously pronounced Napa’s
                wines as “bottled poetry” during a honeymoon sojourn in the valley.{" "}
              </p>
              <StudyImage src={Mondavi} alt="Robert Mondavi" caption="Robert Mondavi" />
              <p>
                The specter of temperance and Prohibition loomed large, and the valley’s industry was crippled with
                passage of the 18th Amendment. Repeal in 1933 led to a renewal; visionaries like André Tchelistcheff
                (legendary winemaker at Beaulieu Vineyard), Robert Mondavi, and Joe Heitz forged ahead in the
                midcentury, raising winemaking acumen, improving technology, and looking toward the wines of France—then
                the undisputed king—as a model. The modern Napa Valley is built on the successes of Mondavi and his
                contemporaries, and through fanatical attention to quality and winemaking the valley has earned its spot
                as one of the world’s top areas for the grape.
              </p>
              <StudyImage src={EndOfProhibition} alt="End of prohibition" caption="End of prohibition" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref2}>The Region</h2>
            <Content>
              <p>
                30 miles long, the Napa Valley runs parallel to the California coastline, narrowing as it trails
                northward from a wide base near the San Pablo Bay. The Mayacamas Mountains and the drier Vaca Mountains
                frame its western and eastern boundaries, respectively. Napa Valley AVA includes both the valley itself
                and the mountainsides surrounding it, encompassing nearly half of the total land in Napa County. Sonoma
                County divides Napa from the ocean, yet cool Pacific breezes and fog funnel into the valley from the San
                Pablo Bay in the south and breaks in the mountains near Calistoga in the north. The fog, which settles
                on the valley floor in the late evening and may not burn off until mid-morning, impacts nighttime
                temperatures and sunshine hours on the valley floor.{" "}
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref3}>Climate</h2>
            <Content>
              <StudyImage src={NapaFog} alt="Fog in Napa Valley" />
              <p>
                Napa’s climate is classified as Mediterranean, characterized by warm, dry summers and cool, rainy
                winters. In the summertime, afternoon temperatures in the warmest central parts of the valley may reach
                the mid-90s, whereas they remain in the mid- to high-70s nearer to the San Pablo Bay. Aided by the onset
                of fog and cool maritime air, nighttime temperatures on the valley floor may plummet by as much as 40
                degrees, preserving acidity in ripening grapes. Above a certain elevation—the fog line—sunshine hours
                are greater and temperatures remain more constant from day to night. Overall, Napa’s climate is not
                dissimilar from that of Tuscany, Sicily, or parts of Southern Spain.{" "}
              </p>
              <StudyImage src={NapaFrost} alt="Frost in Napa Valley" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref4}>The Appellations</h2>
            <Content>
              <p>
                Within the Napa Valley AVA, there are 16 separate sub-AVAs. Each smaller appellation offers unique
                characteristics of soil, elevation, and/or temperature that create distinctive grape-growing conditions
                and styles of wine. Some producers choose to produce wines from a single sub-AVA, whereas others compose
                blends from fruit harvested throughout the valley.
              </p>
              <p>
                The sub-, or “nested”, AVAs of Napa Valley may be broadly divided into mountain, valley floor, and
                outlying appellations. The range of elevation for mountain AVAs typically spans from 600 feet above sea
                level to 2000 feet and more, whereas the lowest valley floor vineyards are near sea level, and they
                rarely climb higher than 500 feet above it. The outlying AVAs are separated from the main growing
                regions by Napa Valley’s foothills, and two span into neighboring counties.
              </p>
              <p>
                In the valley floor AVAs, the best sites for winegrowing are usually on the alluvial fans, or
                “benchlands”—deep, fertile, sloping soil deposits composed of run-off from mountain streams. In these
                alluvial fans, vines can develop deep root systems. On the other hand, mountain growers cherish their
                shallow, low-nutrient soils, which promote the vines’ struggle and produce a small yield of concentrated
                fruit. Berry size tends to be smaller on the mountains, influencing color and tannin. In the mountains,
                daytime temperatures are cooler than on the valley floor, but nights are warmer.
              </p>
              <StudyImage src={ValleyFloor} alt="Nappa Valley Floor" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref5}>Valley Floor AVAs</h2>
            <Content>
              <p>
                <strong>Coombsville:</strong> The newest AVA in Napa Valley, Coombsville debuted in late 2011.
              </p>
              <p>
                <strong>Oak Knoll of Napa Valley:</strong> Cooler than the upper valley, Oak Knoll can produce a wide
                variety of red and white wines. The Dry Creek alluvial fan, the valley’s largest, dominates Oak Knoll’s
                soil composition.
              </p>
              <p>
                <strong>Yountville:</strong> Perhaps better known as Napa’s dining capital, Yountville is named after
                George Yount, who planted the valley’s first vines in the late 1830s.
              </p>
              <StudyImage src={Yountville} alt="Yountville" caption="Yountville" />
              <p>
                <strong>Stags Leap District:</strong> Located directly east of Yountville in the foothills of the Vaca
                Mountains, this is one of the warmest AVAs in the valley. 80% of the district is planted to Cabernet
                Sauvignon and Merlot.
              </p>
              <p>
                <strong>Oakville:</strong> Home to famous sites like To-Kalon and Screaming Eagle’s vineyards, Oakville
                AVA is one of the valley’s top areas for winegrowing.
              </p>
              <StudyImage src={Oakville} alt="Oakville" caption="Oakville" />
              <p>
                <strong>Rutherford:</strong> André Tchelistcheff once proclaimed that it takes “Rutherford Dust” to make
                great Cabernet in Napa. The Rutherford Bench—which actually extends through both the Rutherford and
                Oakville AVAs—is a prized series of alluvial soils (loam, sand, gravel) and home to some of the priciest
                land in the valley. Tasters suggest dusty, spicy, brambly aromas arise from those Cabernets produced
                along the Rutherford Bench.
              </p>
              <p>
                <strong>St. Helena:</strong> St. Helena is one of narrowest parts of the Napa Valley, and a warmer
                appellation. In 1861, Charles Krug opened his eponymous winery here.
              </p>
              <p>
                <strong>Calistoga:</strong> After a lengthy legal and political battle over potential misuse of its
                name, Calistoga became Napa’s 15th AVA in 2009. Calistoga is Napa’s northernmost town, and its vineyards
                are almost entirely planted with red grapes.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref6}>Mountain AVAs</h2>
            <Content>
              <p>
                <strong>Mount Veeder (Mayacamas):</strong> Mount Veeder, adjacent to Carneros, is the coolest mountain
                AVA, with Napa’s longest growing season. Unlike Diamond Mountain and the AVAs of the Vaca Mountains,
                Mount Veeder is composed entirely of sedimentary, rather than volcanic, soils.
              </p>
              <p>
                <strong>Spring Mountain District (Mayacamas):</strong> “Spring Mountain” does not refer to an actual
                peak, but rather an entire mountainous area characterized by several springs and crisscrossed by
                streams. Its western boundary is the Sonoma County border.
              </p>
              <p>
                <strong>Diamond Mountain District (Mayacamas):</strong> In this warmer mountain AVA, red wines develop a
                more approachable tannic structure. In the late 1970s, Diamond Creek, one of the appellation’s most
                famous names, became the first producer in Napa Valley to release single vineyard wines, and crack the
                $100 mark.
              </p>
              <p>
                <strong>Atlas Peak (Vaca Mountains):</strong> At 2,663 feet, Atlas Peak is the tallest point in the Vaca
                Mountains.
              </p>
              <StudyImage src={AtlasPeak} alt="Atlas Peak" caption="Atlas Peak" />
              <p>
                <strong>Howell Mountain (Vaca Mountains):</strong> The oldest of Napa’s sub-AVAs and the first to be
                truly defined by elevation, Howell Mountain Cabernets are among the valley’s most regal, tannic,
                powerful, and ageworthy. The mountain receives warm afternoon sun, leading to ripe flavors, but it stays
                cooler overall than valley floor vineyards, preserving good acidity and herbal notes. Historically,
                Howell Mountain focused on Zinfandel, but this is Cabernet country today
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref7}>Other AVAs</h2>
            <Content>
              <p>
                <strong>Chiles Valley District:</strong> Named after Joseph Ballinger Chiles, an early pioneer from
                Missouri, this is the valley's most isolated growing region.
              </p>
              <p>
                <strong>Wild Horse Valley:</strong> Divided between Napa and Solano Counties, Wild Horse Valley is
                Napa's most sparsely planted AVA.
              </p>
              <p>
                <strong>Los Carneros (Carneros):</strong> Due to its close proximity to the San Pablo Bay, Carneros is
                Napa's coolest growing region. It is equally suitable for the production of Pinot Noir and Chardonnay,
                Syrah and Merlot. The AVA extends into Sonoma County.
              </p>
              <StudyImage src={LosCarneros} alt="Los Carneros" caption="Los Carneros" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref8}>Major Grape Varieties</h2>
            <Content>
              <h3>White Varieties</h3>
              <StudyImage
                src={Chardonnay}
                alt="Chardonnay"
                type="float-right"
                style={{ width: "375px", maxWidth: "100%" }}
              />
              <p>
                <strong>Chardonnay:</strong> Chardonnay is Napa’s most important white grape. The classic style of the
                wine is full-bodied and lush, with generous flavors of oak and cream, but winemaking styles are
                diversifying and one can find regularly find leaner, citrusy examples today. Producers today approach
                techniques like malolactic fermentation, new oak aging, and bâtonnage with new sophistication, and some
                opt to avoid them all together.
              </p>
              <StudyImage
                src={SauvignonBlanc}
                alt="Sauvignon Blanc"
                type="float-left"
                style={{ width: "375px", maxWidth: "100%" }}
              />
              <p>
                <strong>Sauvignon Blanc:</strong> As in Bordeaux, Cabernet’s genetic parent Sauvignon Blanc shares the
                vineyard with its offspring in Napa Valley. Napa Sauvignon Blanc is typically aromatic, yet it may lean
                in style toward Bordeaux and incorporate oak in the winemaking process, or it may be produced in a
                fresher, cleaner style. Napa Sauvignon Blanc exhibits bright, tart acidity, translating as citrus
                flavors on the palate. Grassy and melon notes are frequently found.
              </p>
              <p>
                <strong>Other White Grapes:</strong> In Napa Valley, Chardonnay and Sauvignon Blanc account for more
                than 90% of the total white grape plantings. Here and there, however, one can spot a few acres of
                Viognier, Pinot Gris, Riesling, Muscat, Chenin Blanc, and many others.
              </p>
              <h3>Red Varieties</h3>
              <p>
                <strong>Cabernet Sauvignon:</strong> Napa’s most important grape and its signature contribution to the
                world of fine wines, Cabernet Sauvignon thrives in Napa’s Mediterranean climate. It provides nearly 40%
                of the annual harvest. On the valley floor, it produces a more elegant and supple style of wine, with
                more approachable tannins; on the mountainsides the wines are typically fuller in body, rich in color
                and tannin, and driven by powerful black fruit. Sophisticated yet prominent new oak is a nearly
                universal feature during aging, and many winemakers in Napa Valley try to curtail Cabernet’s inherent
                vegetative notes, preferring aromas of cocoa, fruit, violets and cedar to those of green bell pepper and
                herb. At its best, Napa Valley Cabernet is dense, mouth-coating, and opulent, yet it remains firmly
                structured and long-lived.
              </p>
              <StudyImage src={CabernetSauvignon} alt="Cabernet Sauvignon" />
              <p>
                <strong>Merlot:</strong> Merlot is often blended with Cabernet Sauvignon to soften and plump its gritty,
                austere frame, but it produces a high quality varietal wine in its own right. Napa Merlot is more
                generous and less tannic than Cabernet Sauvignon on the palate, and shows a range of flavors from
                chocolate to red plums to mint.
              </p>
              <p>
                <strong>Pinot Noir:</strong> Pinot Noir is actually Napa’s third most planted red variety, behind
                Cabernet Sauvignon and Merlot. It produces sparkling and still wines in the cool Carneros AVA, and grows
                elsewhere in the cooler mesoclimates of the valley. Carneros and Napa Pinot Noir styles often showcase
                red fruits and jam, framed by sweet spices and oak.
              </p>
              <p>
                <strong>Zinfandel:</strong> Zinfandel is especially popular in the warmer northern sections of the
                valley, such as Howell Mountain, Calistoga and St. Helena. Napa styles are usually fuller in body, with
                high levels of alcohol and spice.
              </p>
              <p>
                <strong>Syrah:</strong> Napa Syrah is generally big and bold, evoking dark berry fruits and smoke.
                Unlike Cabernet, Syrah tends to exhibit savory undertones of grilled meat and black pepper.
              </p>
              <StudyImage src={Napa2} alt="Napa Valley" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref9}>Napa Valley AVAs Map</h2>
            <Content>
              <StudyImage src={NapaMap} alt="Napa Valley AVAs map" />
            </Content>
          </StudyPage>
        </StudyGuide>
      </Page>
      <SideNav header="Napa Valley">
        <SideNavLink reference={ref1}>History</SideNavLink>
        <SideNavLink reference={ref2}>The Region</SideNavLink>
        <SideNavLink reference={ref3}>Climate</SideNavLink>
        <SideNavLink reference={ref4}>The Appellations</SideNavLink>
        <SideNavLink reference={ref5}>Valley Floor AVAs</SideNavLink>
        <SideNavLink reference={ref6}>Mountain AVAs</SideNavLink>
        <SideNavLink reference={ref7}>Other AVAs</SideNavLink>
        <SideNavLink reference={ref8}>Major Grape Varieties</SideNavLink>
        <SideNavLink reference={ref9}>Napa Valley AVAs Map</SideNavLink>
      </SideNav>
    </>
  );
};

export default Napa;
