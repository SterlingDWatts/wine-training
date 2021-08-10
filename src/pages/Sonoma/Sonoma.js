import React, { useRef } from "react";
import Page from "../../components/Page/Page";
import SideNav from "../../components/SideNav/SideNav";
import SideNavLink from "../../components/SideNavLink/SideNavLink";
import StudyGuide from "../../components/StudyGuide/StudyGuide";
import StudyPage from "../../components/StudyPage/StudyPage";
import Content from "../../components/Content/Content";
import StudyImage from "../../components/StudyImage/StudyImage";
import ForYourInfo from "../../components/ForYourInfo/ForYourInfo";
import SonomaField from "../../assets/SonomaField.png";
import GeologicFaults from "../../assets/GeologicFaults.png";
import RussianRiverValley from "../../assets/RussianRiverValley.png";
import ChalkHill from "../../assets/ChalkHill.png";
import DuttonLabel from "../../assets/DuttonLabel.png";
import SonomaCoast from "../../assets/SonomaCoast.png";
import SonomaFall from "../../assets/SonomaFall.png";
import SonomaChard from "../../assets/SonomaChard.png";
import SonomaSuav from "../../assets/SonomaSauv.png";
import SonomaSyrah from "../../assets/SonomaSyrah.png";
import SonomaSustainable from "../../assets/SonomaSustainable.png";
import WineBottles from "../../assets/WineBottle.png";
import SonomaCountyMap from "../../assets/SonomaCountyMap.jpg";
import "./Sonoma.css";

const Sonoma = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  return (
    <>
      <Page className="Sonoma">
        <StudyGuide>
          <StudyPage>
            <header>
              <h1>Sonoma</h1>
            </header>
            <Content>
              <p>
                When Cyrus Alexander arrived at Sonoma’s northern reaches in 1840, he described his vista as “the
                brightest and the best spot in the world.” Celebrated for its coastal Pinot Noir and Chardonnay,
                old-vine Zinfandel, and structured Cabernet Sauvignon, few regions in California vinify so many
                different grape varieties so well, and across a full spectrum of styles. Just 50 miles north of San
                Francisco, Sonoma’s vineyards stretch from the Pacific Ocean to the Mayacamas Mountains at the Napa
                border.
              </p>
              <ForYourInfo backgroundColor="green">
                <h5 style={{ textAlign: "center" }}>The Diversity of Sonoma</h5>
                <p>
                  At times, Sonoma lives in the shadows of Napa Valley, and a friendly rivalry exists between the two.
                  But the regions are distinct. Sonoma County is more than double Napa County in size and harvests far
                  more grapes, with roughly 60,000 acres dedicated to winegrowing, compared to Napa’s 45,000. Sonoma is
                  also incredibly diverse. Multiple valleys crisscross the region, running both north to south and east
                  to west. This, along with Sonoma’s size and the impact of the Pacific, creates an array of climates.
                  As a result, over 60 grape varieties are successfully cultivated, making it difficult to identify a
                  single signature. Further, the characters of Sonoma vintages are not internally consistent. A great
                  year for Pinot Noir and Chardonnay may yield mixed results for Cabernet Sauvignon and Zinfandel.
                </p>
              </ForYourInfo>
              <StudyImage src={SonomaField} alt="Sonoma County Vineyard" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref1}>History</h2>
            <Content>
              <p>
                Sonoma’s history of winegrowing begins with Russian fur trappers, who journeyed south from Alaska,
                establishing Fort Ross in 1812 and planting grapevines. Franciscan missionaries arrived 11 years later,
                founding their mission in what is now downtown Sonoma. They brought their own winemaking traditions, as
                did European immigrants who arrived during the 1849 Gold Rush. The Old World practices of these early
                winemakers were foundational for Sonoma’s wine industry, which flourished in the decades leading up to
                Prohibition in 1920.
              </p>
              <p>
                When Prohibition was repealed in 1933, there were 50 surviving wineries in Sonoma. Today, there are
                approximately 1,800 growers and 500 wineries.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref2}>Geology</h2>
            <Content>
              <p>
                While Sonoma counts among the most diverse winegrowing regions in the New World, much of the county was
                once covered in water. The San Andreas Fault and its subsystems cut north to south across Sonoma, their
                tectonic movements creating a series of mountains and valleys. As a result, many vineyards grow atop a
                combination of volcanic or marine soils.
              </p>
              <StudyImage src={GeologicFaults} alt="Map of geologic faults" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref3}>Climate</h2>
            <Content>
              <p>
                Sonoma’s meteorological patterns are shaped by the Pacific Ocean, which borders roughly 60 miles of
                Sonoma coastline and whose influence can be felt as far inland as the Napa border. Even in the warmest
                appellations, the Pacific invites cooling fog and breezes that result in a wide diurnal swing. Average
                daily temperatures across the county sit around 70 degrees Fahrenheit, dropping to the 40s at night.
                Generally, Sonoma County is increasingly warmer toward its northeastern corner.{" "}
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref4}>Appellations</h2>
            <Content>
              <p>
                Situated within the broader North Coast AVA, Sonoma County is divided into 18 sub-AVAs, several
                overlapping and a handful extending beyond county lines.
              </p>
              <h3>Central Sonoma</h3>
              <p>
                <strong>Russian River Valley AVA:</strong> The Russian River Valley, shaped like a triangle draped
                across the heart of Sonoma County, earned AVA status in 1983. The Russian River cuts through its
                northern vineyards, and Pacific fog reaches to its northeastern border. Nearly 100 wineries are located
                here, with Pinot Noir and Chardonnay the most esteemed varieties. Certain areas also yield excellent
                Syrah and Zinfandel.
              </p>
              <StudyImage
                src={RussianRiverValley}
                alt="Russian River Valley Vineyard"
                caption="Russian River Valley Vineyard"
              />
              <p>
                <strong>Green Valley of Russian River Valley AVA:</strong> Tucked into the southwest sector of the
                Russian River Valley, Green Valley houses some of the coolest, foggiest sites in the area.
              </p>
              <p>
                <strong>Chalk Hill AVA:</strong> The northeastern corner of the Russian River Valley’s triangle, Chalk
                Hill was named for its white volcanic ash—which is not actually chalk. Chardonnay, Cabernet Sauvignon,
                and Merlot are its most important varieties.
              </p>
              <StudyImage src={ChalkHill} alt="Chalk Hill Vineyard" caption="Chalk Hill Vineyard" />
              <p>
                <strong>Fountaingrove District AVA:</strong> This small, hilly region, known for Bordeaux varieties, is
                tucked into the Mayacamas Mountains on the Napa border. Its volcanic soils are the result of the
                eruption of Mount St. Helena three million years ago.
              </p>
              <h3>Coastal Sonoma</h3>
              <p>
                <strong>Sonoma Coast AVA:</strong> Established in 1987, the Sonoma Coast AVA reaches the borders of
                Marin and Mendocino Counties. Widely criticized as having been drawn too large, the appellation at times
                feels hardly coastal at all, stretching as far inland as the Napa County line as it engulfs the Sonoma
                sector of Carneros, a portion of the Sonoma Valley, and nearly all of the Russian River Valley
              </p>
              <p>
                Many distinguish between the Sonoma Coast AVA and the “West Sonoma Coast,” whose vineyards are planted
                nearer to the coast, with significant oceanic influence. There, Pinot Noir and Chardonnay achieve some
                of their leanest, most chiseled expressions.
              </p>
              <p>
                <strong>Fort Ross-Seaview AVA:</strong> Carved out of the larger Sonoma Coast AVA, Fort Ross-Seaview
                takes its name from the 1812 Russian fortress. Ridge-top plantings are harvested at elevations of 920 to
                1,800 feet above sea level or higher, often less than 10 miles away from the Pacific Ocean.
              </p>
              <ForYourInfo backgroundColor="green">
                <h5>Sonoma Labels</h5>
                <p>
                  Sonoma wine labels are relatively straightforward. Most feature the grape name, although some blends
                  and specialty bottlings are given fantasy names. By law, the labels must adhere to conjunctive
                  labeling, meaning “Sonoma County” must appear alongside any sub-appellation named. Conjunctive
                  labeling laws also exist in Napa, where they were first enacted.
                </p>
                <StudyImage src={DuttonLabel} alt="Dutton Estate Wine Label" type="fyi" />
              </ForYourInfo>
              <StudyImage src={SonomaCoast} alt="Sonoma Coast" />
              <h3>North Sonoma</h3>
              <p>
                <strong>Northern Sonoma AVA:</strong> Northern Sonoma is a catch-all appellation that encompasses a
                massive portion of the county, including the Alexander Valley, Chalk Hill, Dry Creek Valley, Knights
                Valley, and large sections of the Sonoma Coast and Russian River Valley AVAs.
              </p>
              <p>
                <strong>Alexander Valley AVA:</strong> The Alexander Valley was named after Cyrus Alexander, the first
                to plant vines in the area. Most of the appellation’s vineyards sit on flat benchland sites with rocky,
                well-drained soils, bisected by the Russian River. The appellation is dominated by Cabernet Sauvignon,
                which often achieves a leaner, more herbaceous, and more approachable expression here than it does in
                Napa.
              </p>
              <p>
                <strong>Pine Mountain-Cloverdale Peak AVA:</strong> Split between Sonoma and Mendocino Counties, Pine
                Mountain-Cloverdale Peak occupies the northeastern corner of the Alexander Valley
              </p>
              <p>
                <strong>Knights Valley AVA:</strong> Knights Valley follows the path of the western foothills of the
                Mayacamas, leaning up against Mount St. Helena. The hottest AVA in Sonoma County, Knights Valley
                specializes in Cabernet Sauvignon.
              </p>
              <p>
                <strong>Dry Creek Valley AVA:</strong> Dry Creek Valley has been associated with old-vine Zinfandel as
                far back as the late 19th century, and many head-trained vines planted during that era continue
                producing fruit.
              </p>
              <p>
                <strong>Rockpile AVA:</strong> This tiny appellation overlaps with and emerges from the Dry Creek
                Valley’s northwestern edge. It has no wineries but supplies fruit to several established Sonoma
                producers.
              </p>
              <StudyImage src={SonomaFall} alt="Vineyard in Fall" />
              <h3>South Sonoma</h3>
              <p>
                <strong>Sonoma Valley AVA:</strong> Sonoma Valley AVA was the first appellation in the county. Since it
                was established in 1981, the Bennett Valley, Sonoma Mountain, Moon Mountain District, and a portion of
                Carneros have been carved out from within its boundaries. In this valley, formed by the Sonoma and
                Mayacamas Mountains, breezes from the Pacific and the San Pablo Bay unite to cool vineyards on either
                end. Chardonnay is the Sonoma Valley’s most planted grape, and the appellation also boasts old Cabernet
                Sauvignon and Zinfandel vines. Located here is Buena Vista, California’s oldest continuously operating
                winery, established in 1857.
              </p>
              <p>
                <strong>Sonoma Mountain AVA:</strong> Capped above the fog line, the sun-drenched vineyards of Sonoma
                Mountain AVA grow along the Sonoma Valley’s western corridor. Few wineries operate inside the
                appellation, most of them notable for Cabernet Sauvignon.
              </p>
              <p>
                <strong>Bennett Valley AVA:</strong> The small Bennett Valley rests in the northwestern corner of the
                Sonoma Valley, between the summits of Sonoma Mountain, Taylor Mountain, and Bennett Peak. Cooler than
                much of the Sonoma Valley, the region earns acclaim for its Merlot, pioneered by Matanzas Creek in 1977.
              </p>
              <p>
                <strong>Moon Mountain District Sonoma County AVA:</strong> The Moon Mountain District is the western
                face of Napa’s Mount Veeder AVA. Its volcanic vineyard sites extend from 400 to over 2,000 feet in
                elevation and are most readily associated with Cabernet Sauvignon, but prized bottlings of Chardonnay,
                Zinfandel, and Pinot Noir are also produced.
              </p>
              <p>
                <strong>Carneros AVA:</strong> Traversing the Napa-Sonoma border in the southern foothills of the
                Mayacamas, Carneros AVA is shaped like a bowtie, fanned out above the San Pablo Bay. Its name means “the
                rams” in Spanish, alluding to the sheep pastures that were once in the area. The appellation is best
                known for Pinot Noir and Chardonnay, yielding still and sparkling wines.
              </p>
              <p>
                <strong>Petaluma Gap AVA:</strong> The Petaluma Gap bridges the border between Sonoma and Marin County
                and is associated with Pinot Noir and Chardonnay. The appellation is defined by a meteorological pattern
                in which hot air from the inland valleys sucks in cold winds from the Pacific, which are accelerated and
                funneled into a narrow stretch of land before being whisked south into the San Pablo Bay.
              </p>
              <StudyImage src={SonomaField} alt="Sonoma County Vineyard" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref5}>Major Grape Varieties</h2>
            <Content>
              <p>
                Grapes as diverse as Trousseau Gris, Valdiguié, and Albariño find their advocates in Sonoma, but seven
                core grapes represent more than 90% of the region’s plantings.
              </p>
              <h3>White Varieties</h3>
              <p>
                <strong>Chardonnay:</strong> Chardonnay is Sonoma County’s most widely cultivated grape, planted to over
                16,000 acres. Creamier, more opulent expressions abound, particularly from Sonoma’s warmer sites, marked
                by malolactic fermentation and new oak aging. But Sonoma is also home to some of California’s most
                passionate champions of restrained Chardonnay. The grape remains a key ingredient in Sonoma’s sparkling
                wines as well.
              </p>
              <StudyImage src={SonomaChard} alt="Chardonnay Grapes" caption="Chardonnay" />
              <p>
                <strong>Sauvignon Blanc:</strong> Although it represents less than one-fifth of the plantings of
                Chardonnay, Sauvignon Blanc is Sonoma’s second most popular white variety. Some vintners produce
                juicier, more tropical examples in the vein of white Bordeaux, aged in new French oak. Others opt to
                create leaner, crisper renditions. In either event, Sauvignon Blanc is defined by its herbaceous
                character and citrus notes. Sauvignon Blanc is occasionally referred to as “Fumé Blanc” in Sonoma.
              </p>
              <StudyImage src={SonomaSuav} alt="Sauvignon Blanc Grapes" caption="Sauvignon Blanc" />
              <p>
                <strong>Other White Grapes:</strong> Pinot Gris, Pinot Blanc, Viognier, Gewürztraminer, Riesling,
                Marsanne, Roussanne, Sémillon, Chenin Blanc.
              </p>
              <h3>Red Varieties</h3>
              <p>
                <strong>Pinot Noir:</strong> Pinot Noir is Sonoma’s most planted red grape, its history in the area
                beginning as early as the 1880s. The Russian River Valley helped make the grape one of California’s most
                popular and continues to bottle juicy, round examples. In the far west vineyards of the Sonoma Coast,
                Pinot Noir can achieve leaner expressions with lower levels of alcohol, characterized by floral aromas
                and pure berry flavors. Along with Chardonnay, Pinot Noir forms the backbone of Sonoma’s sparkling
                wines.
              </p>
              <p>
                <strong>Cabernet Sauvignon:</strong> Just trailing Pinot Noir, Cabernet Sauvignon is Sonoma’s second
                most planted red variety, popular in warmer appellations such as Knights Valley, Alexander Valley, Dry
                Creek Valley, and the Sonoma Valley and its sub-AVAs. As in Napa, Cabernet Sauvignon is celebrated for
                its black-fruited concentration and tannic structure. Sonoma Cabernet is often more approachable when
                young than its Napa counterpart—and less expensive, too.
              </p>
              <p>
                <strong>Merlot:</strong> Merlot is primarily grown in the same appellations as Cabernet Sauvignon, where
                it can be used for varietal wines or as a blending component. Often praised for its velvety texture and
                plummy flavors, Merlot softens the tannic grip of Cabernet Sauvignon.
              </p>
              <p>
                <strong>Zinfandel:</strong> Dubbed “America’s Grape,” Zinfandel has been recognized as a
                quintessentially Californian specialty —though more recent research has revealed its Croatian origin.
                The variety has been cultivated in Sonoma since the 1800s, and the best examples of Zinfandel still
                derive from old head-trained vines. Zinfandel carries a gratifying, sometimes jammy red-fruit character,
                with a rustic spiciness.
              </p>
              <p>
                <strong>Syrah:</strong> Depending on where it’s grown, Syrah can achieve an extraordinarily broad
                spectrum of expression in Sonoma, from savory wines redolent of the Northern Rhône to more hedonistic
                renditions with juicy black-fruit tones. While it is bottled on its own, Syrah is often blended with
                other Rhône varieties such as Grenache and Mourvèdre, as well as the white grape Viognier.
              </p>
              <StudyImage src={SonomaSyrah} alt="Syrah Grapes" caption="Syrah" />
              <p>
                <strong>Other Red Grapes:</strong> Cabernet Franc, Petit Verdot, Grenache, Carignan, Petite Sirah,
                Mourvèdre, Barbera, Sangiovese, Tempranillo.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref6}>Selling Sonoma Wines</h2>
            <Content>
              <p>
                Considering the county’s exceptional diversity, there’s likely a Sonoma wine to suit any guest and to
                pair with any dish. Those who prefer Napa Valley Cabernet Sauvignon or Bordeaux will often be interested
                in the Cabernet wines and Bordeaux-style blends coming from regions such as the Sonoma Valley, Alexander
                Valley, and Knights Valley. For lovers of Pinot Noir and Chardonnay, try to gauge stylistic preferences.
                Guests seeking rounder, fuller-bodied renditions may gravitate toward the Russian River Valley, while
                those partial to leaner, more restrained wines might prefer producers in the western Sonoma Coast. More
                experimental producers and esoteric grape varieties can also be found in Sonoma, providing ample
                opportunity to satisfy adventurous drinkers.
              </p>
              <p>
                Further, Sonoma tends to provide tremendous comparative value to Napa, and its rich history offers
                plenty of stories to engage curious guests.
              </p>
              <ForYourInfo backgroundColor="green">
                <h5 style={{ textAlign: "center" }}>Sustainability in Sonoma</h5>
                <p>
                  In 2014, the Sonoma County Winegrowers announced an initiative to make Sonoma the first 100% certified
                  sustainable wine region in the United States. To qualify as sustainable, vineyards and wineries must
                  earn their certification from one of four approved bodies: the California Sustainable Winegrowing
                  Alliance, Fish Friendly Farming, Lodi Rules, or Sustainability in Practice (SIP). Wineries that
                  receive certification can use the Sonoma County Sustainable logo on their labels, so long as 85% of
                  the bottle’s grapes are sourced within Sonoma County and 85% derive from certified sustainable
                  vineyards. As over 85% of Sonoma’s vineyards are family-owned and roughly 80% are smaller than 100
                  acres, many believe sustainability practices are vital to the preservation of the region.
                </p>
                <StudyImage src={SonomaSustainable} alt="Sustainable Sonoma symbol" type="fyi" />
              </ForYourInfo>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref7}>Sonoma County Map</h2>
            <Content>
              <StudyImage src={SonomaCountyMap} alt="Sonoma County Map" />
              <StudyImage src={WineBottles} alt="Wine Bottles" />
            </Content>
          </StudyPage>
        </StudyGuide>
      </Page>
      <SideNav header="Sonoma">
        <SideNavLink reference={ref1}>History</SideNavLink>
        <SideNavLink reference={ref2}>Geology</SideNavLink>
        <SideNavLink reference={ref3}>Climate</SideNavLink>
        <SideNavLink reference={ref4}>Appellations</SideNavLink>
        <SideNavLink reference={ref5}>Major Grape Varieties</SideNavLink>
        <SideNavLink reference={ref6}>Selling Sonoma Wines</SideNavLink>
        <SideNavLink reference={ref7}>Sonoma County Map</SideNavLink>
      </SideNav>
    </>
  );
};

export default Sonoma;
