import React, { useRef } from "react";
import Page from "../../components/Page/Page";
import SideNav from "../../components/SideNav/SideNav";
import SideNavLink from "../../components/SideNavLink/SideNavLink";
import StudyGuide from "../../components/StudyGuide/StudyGuide";
import StudyPage from "../../components/StudyPage/StudyPage";
import Content from "../../components/Content/Content";
import ForYourInfo from "../../components/ForYourInfo/ForYourInfo";
import StudyImage from "../../components/StudyImage/StudyImage";
import CentralCoastMap from "../../assets/CentralCoastMap.jpeg";
import CentralCoastVineyard from "../../assets/CentralCoastVineyard.png";
import "./CentralCoast.css";

const CentralCoast = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  return (
    <>
      <Page className="Napa">
        <StudyGuide>
          <StudyPage>
            <header>
              <h1>Central Coast</h1>
            </header>
            <Content>
              <p>
                Stretching between San Francisco and Los Angeles, California’s Central Coast features some of the Golden
                State’s most prized AVAs under the cooling influence of the Pacific Ocean. With viticulture dating back
                to the 18th century, the Central Coast today is a source of wines made from an abundance of varieties in
                a range of styles, including chiseled Chardonnays and lean Pinot Noirs, mountain-grown Cabernet
                Sauvignons and hearty Rhône-style blends.
              </p>
              <StudyImage src={CentralCoastVineyard} alt="Central Coast Vineyard" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref1}>History</h2>
            <Content>
              <p>
                Winegrowing on the Central Coast originates with Spanish missionaries of the Franciscan order, who
                established missions along the coastline from 1769 to 1833. Their early wines were derived from the
                Mission grape, vinified into a fortified style they called Angelica. California’s commercial wine
                production boomed with the gold rush of 1849, drawing new settlers and several waves of immigrants who
                arrived in subsequent decades. Families from Italy, Germany, and across Europe brought their
                viticultural knowledge, helping advance the state’s young wine culture.
              </p>
              <p>
                The onset of Prohibition, in 1920, stifled the burgeoning industry, though grapegrowing persisted
                through a number of loopholes—grapes for sacramental wine and home winemaking were permitted, for
                example. In the decades following Prohibition’s repeal, in 1933, the California wine industry rebuilt
                and expanded through the efforts of pioneering wineries, including, from the Central Coast, Martin Ray,
                Cresta Blanca, Ridge, and Chalone. Today, with vineyard area continuing to grow, the Central Coast is
                home to several of California’s most exciting wine regions, attracting new talent who are embracing a
                diversity of grapes and styles.
              </p>
              <ForYourInfo backgroundColor="green">
                <h5 style={{ textAlign: "center" }}>Rhone Rangers</h5>
                <p>
                  In the 1980s, a group called the Rhone Rangers formed to promote Rhône-style wines grown in
                  California. Early leaders included Randall Grahm (Bonny Doon), Joseph Phelps (Joseph Phelps
                  Vineyards), and Bob Lindquist (Qupé). The movement was further spurred in the 1990s, when the Perrin
                  family—the French owners of Château de Beaucastel, in Châteauneuf-du-Pape—invested in the Paso Robles
                  estate Tablas Creek. Although California is still largely known for Cabernet, Pinot Noir, and
                  Chardonnay, the Rhone Rangers have been highly influential in championing the potential of Rhône
                  varieties—such as Syrah, Grenache, Mourvèdre, Viognier, Marsanne, and Roussanne— on the West Coast.
                </p>
              </ForYourInfo>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref2}>Geography & Climate</h2>
            <Content>
              <p>
                The Central Coast is bisected by the Coast Ranges, and many of the wine regions are found across a
                series of mountains, rolling hills, or the valleys they create. The San Andreas Fault (the boundary
                where the North American and Pacific Plates move in opposite directions) cuts through the entire Central
                Coast. Because of the plates’ motion, the region is prone to earthquakes, with devastating occurrences
                in 1906 and 1989. With its arid summers, California is susceptible to drought and, increasingly,
                wildfires. Soils across the region are diverse and complex, containing various combinations of soil
                types of marine, alluvial, volcanic, and other origins. Deposits of limestone, particularly prized by
                many winegrowers, are most commonly found west of the San Andreas Fault.
              </p>
              <p>
                The Pacific Ocean is the most prominent influence on the climate of the Central Coast, bringing fog,
                intense wind, cool ocean air, and overall temperature moderation. Generally, temperatures rise as one
                moves further inland, and the diurnal swing in the easterly regions is more pronounced. Vineyards are
                planted from sea level to above 2,500 feet, and elevation further influences climate. Because of the
                Central Coast’s range of soils, expositions, elevations, and other factors of terroir, a multitude of
                grape varieties can successfully ripen in the region.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref3}>Wine Regions</h2>
            <Content>
              <h4>Livermore Valley</h4>
              <p>
                The Livermore Valley AVA is one of the most historic winegrowing areas of California. Its viticulture
                dates back to the late 18th century at Mission San José. The region is widely recognized for the role
                that two of its wineries, Wente Vineyards and Concannon Vineyard, played in isolating the Chardonnay and
                Cabernet Sauvignon clones, respectively, that today account for the large majority of California’s
                plantings of those varieties. Livermore is located east of the San Francisco Bay and south of the city
                of Oakland. The vineyards are planted in a bowl-like valley with an east-west orientation, which
                experiences a dramatic diurnal swing. The region continues to be best known for its Chardonnay and
                Cabernet Sauvignon.
              </p>
              <h4>Santa Cruz Mountains</h4>
              <p>
                The Santa Cruz Mountains AVA covers a broad swath of land across Santa Cruz, San Mateo, and Santa Clara
                Counties. The region begins south of San Francisco and continues south of San Jose, its vineyards
                scattered throughout much of Silicon Valley. The Santa Cruz Mountains region does not feature one large
                contiguous vineyard area; rather, its vines appear in various pockets, many of which are areas that have
                today become mostly suburban. As the name implies, the region is generally planted on mountainous
                terrain, extended higher than 3,000 feet above sea level in some areas. Because of the terroir’s
                heterogeneity, producers in the Santa Cruz Mountains appellation are able to produce top-tier examples
                of both Pinot Noir and Cabernet Sauvignon as well as Chardonnay. The appellation is home to one nested
                AVA, Ben Lomond Mountain, and several of California’s most famous wineries, including Ridge Vineyards,
                Mount Eden Vineyards, and Bonny Doon Vineyard. It is bordered to the east by the Santa Clara Valley AVA.
              </p>
              <h4>Monterey County</h4>
              <p>
                Monterey’s history of commercial wine production begins with the Chalone Vineyard, which was established
                before Prohibition and underwent a modern revival in the 1960s and ’70s. The county has more than 46,000
                acres planted to vineyard, though much of Monterey’s production is sold in bulk. Quality wines are
                primarily grown in the Chalone AVA (shared with San Benito County) as well as the Santa Lucia Highlands
                AVA. The latter appellation is located on a bench west of the Santa Lucia Range, at around 1,200 feet in
                elevation, and drops into the Salinas Valley. The intense winds of the Santa Lucia Highlands cause the
                grapes to grow thick skins. The AVA is best known for Pinot Noir and Chardonnay, as is Monterey County
                generally, though Syrah wines are also successful. Other AVAs in the county include Monterey, Arroyo
                Seco, Carmel Valley, Hames Valley, San Antonio Valley, San Bernabe, and San Lucas.
              </p>
              <h4>San Benito County</h4>
              <p>
                San Benito County lies east of Monterey County and features some of the Central Coast’s more inland
                vineyards. The San Benito AVA is subdivided into a number of smaller appellations, including the Lime
                Kiln Valley AVA, Cienega Valley AVA, and Paicines AVA. The Mt. Harlan AVA was pioneered by Josh Jensen,
                founder of Calera Wine Company, who searched for limestone-rich soils well suited to Pinot Noir and
                Chardonnay.
              </p>
              <h4>San Luis Obispo County</h4>
              <p>
                South of Monterey, San Luis Obispo County is most famous for the Paso Robles AVA. Further inland than
                much of the Central Coast, Paso Robles is celebrated for its hearty Rhône and Bordeaux-style wines.
                Covering more than 600,000 acres of land (40,000 of which is planted to grapes), Paso Robles is large
                and remarkably diverse. It features a complex mixture of soils, including volcanic and marine sediments
                and granite, among many other types. Broadly, as one moves west, toward the Pacific, the region becomes
                cooler, and more limestone is present. In 2014, Paso Robles was subdivided into 11 AVAs: Adelaida
                District, Paso Robles Willow Creek District, Templeton Gap District, Santa Margarita Ranch, San Miguel
                District, Paso Robles Estrella District, Paso Robles Geneseo District, El Pomar District, Creston
                District, Paso Robles Highlands District, and San Juan Creek. York Mountain AVA sits west of and is
                adjacent to Paso Robles.
              </p>
              <p>
                Further south, San Luis Obispo also features the Arroyo Grande Valley and Edna Valley AVAs. Closer to
                the coast, these regions are better suited to Pinot Noir and Chardonnay, although a number of excellent
                Rhône-style wines are made here as well.
              </p>
              <h4>Santa Barbara County</h4>
              <p>
                Santa Barbara has become one of the world’s premier regions for Pinot Noir and Chardonnay, though the
                county’s output includes an array of wines in many styles. The region is home to two rare transverse
                valleys, the Santa Maria and the Santa Ynez, running east-west. The Santa Maria Valley AVA sits at the
                north end of the county (and is shared with San Luis Obispo County). The Pacific Ocean has an extreme
                influence on this cold, windy appellation, making it ideal for Burgundian varieties. Similar conditions
                are found in the Sta. Rita Hills AVA, in the westernmost sector of the Santa Ynez Valley AVA. The Sta.
                Rita Hills AVA is also notable for its rare diatomaceous earth, a white, chalky, siliceous, and
                marine-derived soil.
              </p>
              <p>
                To the east, the Santa Ynez Valley is divided into the Ballard Canyon, Los Olivos District, and Happy
                Canyon of Santa Barbara AVAs. These more inland regions are warmer and capable of ripening Bordeaux and
                Rhône varieties. In 2020, a new AVA, Alisos Canyon, was created between the Santa Maria and Santa Ynez
                Valleys.
              </p>
              <ForYourInfo backgroundColor="green">
                <h5 style={{ textAlign: "center" }}>Santa Barbara Vineyards</h5>
                <p>
                  Santa Barbara is home to a series of famous vineyards from which a number of the region’s best
                  wineries source grapes. Among the important ones to know are Bien Nacido, Solomon Hills, Sanford &
                  Benedict, Los Alamos, La Rinconada, La Encantada, Zotovich, Rita’s Crown, and Dierberg.
                </p>
              </ForYourInfo>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref4}>Major Grape Varieties</h2>
            <Content>
              <p>
                Dozens of grape varieties, from Albariño to Zinfandel, grow on the Central Coast. The region’s range of
                climates allows for a tremendous breadth of exceptional wines, including leaner styles made from
                Burgundian varieties as well as heartier Rhône and Bordeaux-style blends.
              </p>
              <h3>White Varieties</h3>
              <p>
                <strong>Chardonnay:</strong> California’s most planted white grape variety, Chardonnay is planted
                throughout the Central Coast. Monterey cultivates more Chardonnay than any other county in California,
                with over 17,000 acres planted. California winegrowers take various stylistic approaches to
                Chardonnay—from creamy, more opulent expressions marked by flavors of new oak to brighter, more
                restrained examples, often from cooler regions, such as certain areas of the Santa Cruz Mountains and
                Santa Barbara’s Sta. Rita Hills and Santa Maria Valley. Chardonnay is also commonly a principal
                ingredient in Champagne-style California sparkling wines.
              </p>
              <p>
                <strong>Sauvignon Blanc:</strong> This variety generally thrives in areas that are also well suited to
                its red Bordeaux counterpart, Cabernet Sauvignon. Sauvignon Blanc, however, is found up and down the
                Central Coast. The grape is recognized for its green, herbaceous aromas, and riper California examples
                will often also offer more tropical flavors of kiwi and starfruit. While Sauvignon Blanc can produce
                easy-drinking, inexpensive white wine, select California winegrowers are championing more ambitious,
                cellar-worthy, and often oaked styles of the variety.
              </p>
              <p>
                <strong>Pinot Gris/Grigio:</strong> This pink-skinned grape is a mutation of Pinot Noir. Although Pinot
                Gris/Grigio is less recognized for quality in California than it is in Oregon, large plantings are
                harvested on the Central Coast, particularly in Monterey. While there is no legal distinction between
                the two names, wines labeled Pinot Gris will commonly present a richer, more Alsatian style, potentially
                with some residual sugar, and those bottled as Pinot Grigio are often snappier, lighter, and drier.
              </p>
              <p>
                <strong>Viognier:</strong> Native to France’s Northern Rhône Valley, Viognier has found success in
                California’s Rhone Rangers movement. The grape is noted for its exuberant floral aromas, fuller body,
                diminished acidity, and affinity for new oak. Often bottled on its own, Viognier is also blended with
                other white Rhône varieties, such as Marsanne, Roussanne, and Grenache Blanc.
              </p>
              <p>
                <strong>Riesling:</strong> Although Riesling is generally associated with more northerly latitudes, over
                1,500 acres of the variety are planted in Monterey County. The variety is characterized by its precise
                orchard fruit flavors and amplified acidity. The style of Central Coast Riesling may be either
                completely dry or show noticeable residual sugar.
              </p>
              <p>
                <strong>Other White Grapes:</strong> Albariño, Chenin Blanc, Gewürztraminer, Grenache Blanc, Grüner
                Veltliner, Marsanne, Muscat Blanc à Petits Grains, Pinot Blanc, Roussanne.
              </p>
              <h3>Red Varieties</h3>
              <p>
                <strong>Pinot Noir:</strong> Because of the cooling proximity of the Pacific Ocean, each county on the
                Central Coast has a winegrowing area well suited to Pinot Noir. Central Coast Pinot Noir comes in a wide
                array of styles. In the coldest pockets, such as the Sta. Rita Hills, the Santa Maria Valley, and
                certain areas of the Santa Cruz Mountains, Pinot Noir will show a light body and precise berry flavors
                with a subtle earthiness. In more moderate or warmer locations, such as the Santa Lucia Highlands and
                portions of San Luis Obispo, the variety will produce fleshier wines with richer cranberry flavors. Like
                Chardonnay, Pinot Noir is an important ingredient in top-quality sparkling wines.
              </p>
              <p>
                <strong>Cabernet Sauvignon:</strong> The most planted red variety in California, Cabernet Sauvignon is
                strongly associated with Napa Valley, yet the Central Coast is also home to a vast portfolio of prized
                Cabernet wines. The variety is most successful in the warmer pockets of the Central Coast, such as Paso
                Robles, select areas of the Santa Cruz Mountains, and Happy Canyon of Santa Barbara. Characterized by a
                firm, tannic structure and rich, plummy, dark fruit flavors, Cabernet Sauvignon is commonly blended with
                such grapes as Merlot, Cabernet Franc, Malbec, and Petit Verdot, though single-variety bottlings are
                also produced.
              </p>
              <p>
                <strong>Merlot:</strong> Merlot is often cultivated in the same growing areas as Cabernet Sauvignon, as
                well as those slightly cooler. The two varieties are frequently blended, but monovarietal Merlot wines
                are also commonly made on the Central Coast. Merlot is characterized by its velvety texture and dark
                fruit flavors.
              </p>
              <p>
                <strong>Syrah:</strong> The most cultivated Rhône variety in California, Syrah is known for its brambly
                fruit flavors and spicy, savory notes of black pepper and smoked meat. More robust examples are found in
                the warmer AVAs of the Central Coast, such as Paso Robles, although leaner, more peppery Syrah wines are
                grown closer to the Pacific. Single-variety bottlings as well as blends, made with other Rhône grapes
                such as Grenache and Mourvèdre, are produced.
              </p>
              <p>
                <strong>Zinfandel:</strong> Sometimes referred to as “America’s grape,” Zinfandel is Croatian in origin.
                Some of the Central Coast’s Zinfandel vines exceed 100 years of age and are among the region’s oldest
                vines. The wines are often high in alcohol and noted for their raisin-like red fruit flavors.
              </p>
              <p>
                <strong>Petit Sirah:</strong> The progeny of Syrah and Peloursin, Petite Sirah derives from the Rhône
                Valley, where it is called Durif. Like Zinfandel, though, the variety is most strongly associated with
                California. Petite Sirah is rich in pigment and tannin, yielding inky, dense, dark-fruited wines.
              </p>
              <p>
                <strong>Other Red Grapes:</strong> Barbera, Cabernet Franc, Gamay, Grenache, Malbec, Mourvèdre,
                Nebbiolo, Petit Verdot, Sangiovese, Tempranillo.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref5}>Selling Central Coast Wines</h2>
            <Content>
              <p>
                With its outstanding assortment of regions and varieties, the Central Coast offers an array of wines
                that should satisfy any guest. In many circumstances, Central Coast wines can present fantastic value
                when compared to similar wines made in the Old World as well as Napa or Sonoma. California is recognized
                globally for its cuisine—focused on freshness, seasonality, sustainability, and local produce—and many
                Central Coast wines, particularly those that are lighter in body and show less influence of new oak,
                pair well with this style of cooking.
              </p>
              <p>
                Guests seeking a richer white wine are likely to enjoy many of the Rhône-style examples made from
                Viognier, Marsanne, Roussanne, or Grenache Blanc, as well as more opulent expressions of Chardonnay.
                Those requesting a leaner white wine might be directed to a Riesling, Sauvignon Blanc, or cool-climate
                Chardonnay from a region such as the Sta. Rita Hills. Guests interested in pairing a red wine with a
                lighter meal might enjoy a Pinot Noir from any of the Central Coast’s many AVAs, depending on their
                personal tastes. To match heavier red meat dishes, a more structured wine, such as Cabernet Sauvignon,
                Merlot, Syrah, or Petite Sirah, is a satisfying choice. Guests looking to experience something new might
                be introduced to the many lesser-known grape varieties grown on the Central Coast—such as Albariño and
                Barbera—or potentially to some of the natural wine producers found throughout the area.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref6}>Central Coast Map</h2>
            <Content>
              <StudyImage src={CentralCoastMap} alt="Central Coast Map" />
            </Content>
          </StudyPage>
        </StudyGuide>
      </Page>
      <SideNav header="Central Coast">
        <SideNavLink reference={ref1}>History</SideNavLink>
        <SideNavLink reference={ref2}>Geography & Climate</SideNavLink>
        <SideNavLink reference={ref3}>Wine Regions</SideNavLink>
        <SideNavLink reference={ref4}>Major Grape Varieties</SideNavLink>
        <SideNavLink reference={ref5}>Selling Central Coast Wines</SideNavLink>
        <SideNavLink reference={ref6}>Central Coast Map</SideNavLink>
      </SideNav>
    </>
  );
};

export default CentralCoast;
