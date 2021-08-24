import React, { useRef } from "react";
import Page from "../../components/Page/Page";
import SideNav from "../../components/SideNav/SideNav";
import SideNavLink from "../../components/SideNavLink/SideNavLink";
import StudyGuide from "../../components/StudyGuide/StudyGuide";
import StudyPage from "../../components/StudyPage/StudyPage";
import Content from "../../components/Content/Content";
import ForYourInfo from "../../components/ForYourInfo/ForYourInfo";
import StudyImage from "../../components/StudyImage/StudyImage";
import PacificNorthwestVineyard from "../../assets/PacificNorthwestVineyard.png";
import FortVancouver from "../../assets/FortVancouver.png";
import ValleyViewWinery from "../../assets/ValleyViewWinery.png";
import PinotGris from "../../assets/PinotGris.png";
import PacificNWMountains from "../../assets/PacificNWMountains.png";
import OregonMap from "../../assets/OregonMap.png";
import WashingtonMap from "../../assets/WashingtonMap.jpg";
import "./PacificNorthwest.css";

const PacificNorthwest: React.FC = () => {
  const ref1 = useRef<HTMLHeadingElement>(null);
  const ref2 = useRef<HTMLHeadingElement>(null);
  const ref3 = useRef<HTMLHeadingElement>(null);
  const ref4 = useRef<HTMLHeadingElement>(null);
  const ref5 = useRef<HTMLHeadingElement>(null);
  const ref6 = useRef<HTMLHeadingElement>(null);
  const ref7 = useRef<HTMLHeadingElement>(null);
  const ref8 = useRef<HTMLHeadingElement>(null);
  const ref9 = useRef<HTMLHeadingElement>(null);
  return (
    <>
      <Page className="PacificNorthwest">
        <StudyGuide>
          <StudyPage>
            <header>
              <h1>Pacific Northwest</h1>
            </header>
            <Content>
              <p>
                As the United States’ second and fourth largest wine producers, respectively, Washington State and
                Oregon represent two of the New World’s most dynamic winegrowing areas. The Cascade Mountains provide a
                diversity of climates, allowing for abundant varieties and styles. While Oregon has made its mark with
                Pinot Noir, and Washington with Cabernet Sauvignon, Merlot, and Syrah, both states offer much to explore
                beyond their signature grapes.
              </p>
              <StudyImage src={PacificNorthwestVineyard} alt="Pacific Northwest Vineyard" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref1}>History</h2>
            <Content>
              <p>
                Washington and Oregon’s winegrowing histories begin in the early to mid-19th century, decades before
                either achieved statehood. In Washington, the first grapes were planted in 1825 by the Hudson’s Bay
                Company at Fort Vancouver, while Henderson Luelling brought cuttings from Iowa along his journey west on
                the Oregon Trail in 1847. The Pacific Northwest’s first winery followed soon after, in 1854, when Peter
                Britt founded Valley View in Southern Oregon. In that same year, hybrid grape varieties arrived in
                Washington’s Puget Sound. The Walla Walla Valley saw its first vines in 1860.
              </p>
              <p>
                By the early 1900s, Washington and Oregon had burgeoning wine industries, but their growth was stifled
                by Prohibition. Both rebounded shortly after Prohibition’s repeal, and by 1938, there were 42 wineries
                in Washington. The 1950s and ’60s were decades of great modernization for both states. American Wine
                Growers, which would later be renamed Chateau Ste. Michelle and become Washington’s largest winery, was
                founded in 1954. Here, legendary winemaker André Tchelistcheff championed the planting of vinifera
                grapes in Eastern Washington. In Oregon’s Umpqua Valley, Richard Sommer founded HillCrest Vineyard in
                1961, where he would plant the state’s first Pinot Noir and Riesling vines. David Lett of Eyrie Vineyard
                then brought Pinot Noir to the Willamette Valley in 1965.
              </p>
              <p>
                Oregon and Washington both earned their first American Viticultural Areas (AVAs) in 1983, with the
                Willamette Valley and Yakima Valley, respectively. Today, Washington has more than 1,000 wineries, while
                nearly 800 call Oregon home.
              </p>
              <StudyImage src={FortVancouver} alt="Fort Vancouver, Washington" caption="Fort Vancouver, Washington" />
              <StudyImage
                src={ValleyViewWinery}
                alt="Valley View Winery, Rogue Valley, Oregon"
                caption="Valley View Winery, Rogue Valley, Oregon"
              />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref2}>Geography & Climate</h2>
            <Content>
              <p>
                The Cascade Mountains have a profound, though opposite, impact on the major winegrowing regions of
                Washington and Oregon. Most of Oregon’s major appellations lie to the west of the range, in more
                verdant, fertile ground exposed to the cooling effects of the Pacific Ocean. Washington’s largest
                vineyard areas, conversely, are on the opposite side of the Cascades, generally in the eastern portions
                of the state. Moist air from the Pacific condenses into rain and snow as it passes over the Cascades,
                creating a rain shadow effect and leaving hotter, more arid conditions on the eastern slopes. As a
                result, irrigation is essential for vine health in many places.
              </p>
              <p>
                Washington’s eastern regions sit upon a bedrock of basalt, a volcanic rock formed by cooled lava. They
                are typically topped by sandy or silty loams developed from the Missoula Floods, a series of glacial
                floods at the end of the last ice age. The Columbia Valley’s borders surround the Missoula Flood
                deposits, extending into Oregon.
              </p>
              <p>
                There are varied soils in Oregon, but two are commonly spoken of in Willamette: Jory and Willakenzie.
                Jory soil is reddish and volcanic in origin, often described as yielding lighter, more elegant
                expressions of Pinot Noir. Willakenzie, on the other hand, derives from marine sediments and is said to
                offer more dark fruit-flavored, muscular wines. A third soil, windblown loess, can be found throughout
                the northern valley, often intermixed with marine and basalt-driven soils.
              </p>
              <p>
                In Southern Oregon, a collection of small, sheltered valleys results in a climate more akin to inland
                California wine regions. Soils are varied as well, though largely informed by the Klamath Mountains to
                the west.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref3}>Wine Regions: Oregon</h2>
            <Content>
              <h3>Willamette Valley AVA</h3>
              <p>
                The Willamette Valley is Oregon’s most famous winegrowing region, as well as one of the most successful
                homes for Pinot Noir in the New World. The large appellation begins at Portland and the Washington
                border and ends 150 miles later, just south of Eugene and halfway down the state. The Willamette River,
                a tributary of the Columbia River, flows north through the length of the region, bordered to the east by
                the Cascade Mountains. The most famous wines hail from the northern half of the Willamette Valley, where
                there are seven sub-AVAs: Yamhill-Carlton District, Chehalem Mountains, Ribbon Ridge, Dundee Hills,
                McMinnville, Eola-Amity Hills, and Van Duzer Corridor. To the south, the valley is less defined. While
                the Willamette is most associated with Pinot Noir, a number of sparkling wines and quality whites are
                also produced here, most notably from Chardonnay, Riesling, and Pinot Gris.{" "}
              </p>
              <h3>Southern Oregon AVA</h3>
              <p>
                As the name suggests, Southern Oregon picks up after the Willamette, extending to Oregon’s southern
                border with California. Southern Oregon can be subdivided into two sections, the Umpqua Valley AVA and
                Rogue Valley AVA. The Umpqua Valley grows generally warmer as it moves south, transitioning from an
                appellation for Pinot Noir and other cooler climate grapes to areas more associated with Syrah,
                Grenache, Tempranillo, and Merlot. Elkton AVA and Red Hill Douglas County AVA are both within the Umpqua
                Valley, the latter corresponding entirely to one property, the Red Hill Vineyard.
              </p>
              <p>
                Further south, the Rogue Valley is warmer still, ripening Syrah and Bordeaux varieties, although cooler
                pockets can be found for aromatic whites and Pinot Noir. The mountainous terrain includes three valleys:
                Illinois Valley, Bear Creek Valley, and Applegate Valley (also an AVA).
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <Content>
              <h2 ref={ref4}>Wine Regions: Washington</h2>
              <h3>Puget Sound AVA</h3>
              <p>
                Cool and rainy, the Puget Sound AVA surrounds Seattle, lining this inlet from the Pacific Ocean and
                including its many islands. The Puget Sound’s most cultivated grapes are Madeleine Angevine, Siegerrebe,
                and Müller-Thurgau; Pinot Noir and Pinot Gris are grown as well. Also within the Puget Sound AVA is
                Woodinville, a town located east of Seattle and home to many wineries, as well as tasting rooms for
                producers in the harder-to-reach areas of the Columbia Valley.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref5}>Wine Regions: OR & WA</h2>
            <Content>
              <h3>Columbia Valley AVA</h3>
              <p>
                The Columbia Valley covers a massive swath of land, over 11 million acres. Though shared by Washington
                and Oregon, over 75% of the AVA is in Washington. The region follows the path of the Columbia River, as
                well as its tributary the Snake River, before it enters Idaho. Due to its scale, the Columbia Valley is
                varied, containing several sub-AVAs.
              </p>
              <p>
                Walla Walla Valley is one of the Columbia Valley’s best-known nested AVAs. The region produces several
                of Washington’s most prestigious Syrah, Merlot, and Cabernet Sauvignon wines. On Walla Walla’s Oregon
                side, The Rocks District of Milton-Freewater sub-AVA is named for the large cobblestones that cover
                vineyard surfaces, akin to the galets roulés of Châteauneuf-du-Pape. It is known for Syrah and Grenache,
                as well as Cabernet Sauvignon.
              </p>
              <p>
                Nine of the Columbia Valley’s sub-AVAs sit exclusively in Washington. The Horse Heaven Hills AVA is one
                of the largest contributors to the state’s output and includes several pedigreed sites. The Yakima
                Valley AVA, surrounding the Yakima tributary, lies just north and contains some of Washington’s oldest
                vines. It encompasses the Red Mountain, Snipes Mountain, and Rattlesnake Hills AVAs—all known for
                Bordeaux varieties. More northerly AVAs include Naches Heights, Wahluke Slope, Ancient Lakes, and Lake
                Chelan.
              </p>
              <h3>Columbia Gorge AVA</h3>
              <p>
                The Columbia Gorge AVA straddles the Oregon-Washington border on either side of the Columbia River, and
                between Mount Hood and Mount Adams. Roughly two-thirds of the appellation sits inside Oregon, and
                one-third is in Washington. It is one of three Washington AVAs (along with Puget Sound and Lewis-Clark
                Valley) not within the Columbia Valley AVA. Bottling more whites than reds, the Columbia Gorge harvests
                everything from Chardonnay, Pinot Gris, Gewürztraminer, and Albariño to Pinot Noir, Cabernet Sauvignon,
                Syrah, and Zinfandel.
              </p>
              <ForYourInfo backgroundColor="green">
                <h5 style={{ textAlign: "center" }}>Idaho</h5>
                <p>
                  While Idaho might not be the first state to come to mind when considering American wine country, it
                  has a growing industry featuring more than 60 wineries. Idaho has three AVAs: Lewis-Clark Valley
                  (shared with Washington), Snake River Valley (shared with Oregon), and Eagle Foothills (a sub-AVA of
                  Snake River Valley). Major grapes include Chardonnay, Riesling, Syrah, and Merlot.
                </p>
              </ForYourInfo>
              <ForYourInfo backgroundColor="green">
                <h5 style={{ textAlign: "center" }}>British Columbia</h5>
                <p>
                  Just north of Washington State, British Columbia shares many core varieties with its American
                  neighbors, among them Chardonnay, Riesling, Pinot Noir, Syrah, Merlot, and Cabernet Sauvignon. Most of
                  British Columbia’s wine regions hug the United States border, the most important being the Okanagan
                  Valley.
                </p>
              </ForYourInfo>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref6}>Major Grape Varieties</h2>
            <Content>
              <p>
                Washington and Oregon grow more than 70 different grapes, ranging from Italian staples like Nebbiolo and
                Sangiovese to German rarities, such as Siegerrebe. However, production is focused on a selection of
                classic varieties.
              </p>
              <h3>White Varieties</h3>
              <p>
                <strong>Chardonnay:</strong> While top-quality Chardonnay was late to arrive in Oregon, the Burgundian
                variety has observed a major resurgence in recent years. In Washington, it remains the state’s most
                planted white. Chardonnay demonstrates a broad spectrum of stylistic expressions, including restrained
                examples from cooler climates as well as more opulent, creamy renditions, aged in oak and completing
                full malolactic conversion. Beyond still wines, Chardonnay is an important variety for traditional
                method sparkling wines.
              </p>
              <p>
                <strong>Pinot Gris:</strong> First planted by David Lett of Eyrie Vineyards, Pinot Gris is Oregon’s most
                planted white variety. Technically, Pinot Gris is a pigment mutation of Pinot Noir, leaving the grape
                with pink skins. Softly floral, Oregon Pinot Gris tends to be vinified more in the tradition of rounder,
                richer Alsatian expressions than crisper Italian Pinot Grigio. Outside of Oregon, Pinot Gris is also
                grown in Washington’s Puget Sound AVA.
              </p>
              <StudyImage src={PinotGris} alt="Pinot Gris Grapes" caption="Pinot Gris" />
              <p>
                <strong>Riesling:</strong> Both Washington and Oregon bottle many exceptional Rieslings, ranging from
                bone-dry renditions to dessert wines. The wines are marked by an elevated acidity, as well as floral and
                tart fruit flavors. Top examples of Pacific Northwest Riesling demonstrate a capacity to age. The grape
                thrives in cooler climates but can be found in many winegrowing areas in each state, including the
                Columbia and Willamette Valleys. Washington in particular has attracted several collaborations with top
                German winemakers of Riesling to produce special labels.
              </p>
              <p>
                <strong>Sauvignon Blanc:</strong> While less important in the Pacific Northwest than in California,
                Sauvignon Blanc maintains sizeable plantings in Washington, though minimal ones in Oregon. The wines are
                enjoyed for their racy “green” flavors, often somewhat herbaceous. Though commonly bottled
                monovarietally, Sauvignon Blanc can also be blended with Sémillon and aged in oak in the style of white
                Bordeaux.
              </p>
              <p>
                <strong>Other White Grapes:</strong> Sémillon, Viognier, Chenin Blanc, Gewürztraminer, Pinot Blanc,
                Siegerrebe, Müller-Thurgau, Madeleine Angevine, Muscat Blanc à Petits Grains, Aligoté.
              </p>
              <h3>Red Varieties</h3>
              <p>
                <strong>Pinot Noir:</strong> Pinot Noir first arrived in Oregon in the 1960s and today is the state’s
                most planted grape, accounting for more than half of total plantings. The Burgundian variety thrives in
                colder climates and is particularly revered for its elegance and transparency in expressing the site in
                which it was grown. Many Willamette Pinot Noir producers will offer several bottlings from different
                single vineyards. Beyond the Willamette, Pinot Noir can also be found in cool pockets of the Umpqua and
                Rogue Valleys, as well as Washington’s Puget Sound. In addition to still wines, Pinot Noir is an
                essential ingredient in many traditional method sparkling wines.
              </p>
              <p>
                <strong>Carbernet Sauvignon:</strong> Washington State’s most planted grape, Cabernet Sauvignon is
                admired for its dark-fruited intensity, firm tannic structure, and ability to age. Cabernet is
                responsible for many of Washington’s most expensive wines and can be found in various corners of the
                Columbia Valley. Most of Western Oregon is too cool to fully ripen Cabernet Sauvignon, although examples
                are grown in warmer areas of the Rogue Valley. While often bottled on its own, Cabernet Sauvignon is
                commonly blended with Merlot, as well as with Cabernet Franc, Petit Verdot, and Malbec.
              </p>
              <p>
                <strong>Merlot:</strong> Often compared to Cabernet Sauvignon in terms of its plummy, dark-fruited
                flavors, Merlot is also perceived as fruitier and can ripen earlier and in cooler climates. Many praise
                the “velvety” texture of Merlot’s tannins, as well as its accessibility when young. While Merlot can
                often be used as a blending component with Cabernet, many Washington wineries celebrate the variety with
                top-shelf bottlings. It can also be cultivated in some of Oregon’s warmer areas, such as the Umpqua and
                Rogue Valleys, as well as the shared Columbia Gorge and Columbia Valley.
              </p>
              <p>
                <strong>Syrah:</strong> Washington has observed a dramatic increase in Syrah acreage within the last two
                decades, and the variety represents some of the state’s most sought-after wines. Characterized as spicy
                and meaty with dark, brambly fruit flavors, Syrah can be bottled on its own or with other Rhône
                varieties such as Grenache and Mourvèdre, or in more atypical combinations. Capable of producing complex
                wines in both cooler and warmer climates, Syrah is also Oregon’s second most planted red, though it
                still largely trails Pinot Noir.
              </p>
              <p>
                <strong>Other Red Grapes:</strong> Cabernet Franc, Malbec, Petit Verdot, Grenache, Mourvèdre,
                Sangiovese, Nebbiolo, Tempranillo.
              </p>
              <ForYourInfo backgroundColor="green">
                <h5 style={{ textAlign: "center" }}>Beer</h5>
                <p>
                  Both Washington and Oregon celebrate vibrant beer cultures. Washington has the third largest number of
                  independent breweries, while Portland, Oregon, is eighth in terms of breweries per capita. Further,
                  roughly 97% of US hops production is centered in Washington, Oregon, and Idaho—with 75% harvested in
                  the Yakima Valley. As the saying goes, it takes a lot of beer to make great wine—and the Pacific
                  Northwest has no shortage of either.
                </p>
              </ForYourInfo>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref7}>Selling Pacific Northwest Wines</h2>
            <Content>
              <p>
                With its incredible range of grapes and climates, the Pacific Northwest offers a palette of wines
                adaptable to most any occasion. Its wines find many counterparts in the Old World and California—from
                Columbia Valley and Mosel Riesling, to Willamette Pinot Noir and Burgundy, to Walla Walla and Napa
                Valley Cabernet. Often, the Washington and Oregon examples offer tremendous comparative value. Both
                states are highly regarded for their culinary scenes, boasting local products such as salmon and
                Dungeness crab. When serving dishes incorporating Pacific Northwest ingredients and flavors,
                complementary wines from the same area can be a worthy selling point.
              </p>
              <p>
                Guests looking for a lighter-bodied white might be directed to Riesling, especially for dishes with
                sweet or spicy components, or potentially a more restrained Chardonnay. If seeking more richness, Pinot
                Gris or fuller bodied Chardonnays are excellent choices. For reds, guests enjoying lighter fare,
                poultry, or mushroom-based dishes might be directed to Willamette Pinot Noir, whereas Cabernet
                Sauvignon, Merlot, and Syrah are good pairings for heartier meats. Beyond pairings, Washington and
                Oregon’s many lesser-known grapes are worth exploring with adventurous guests. Consider pouring them an
                Umpqua Valley Tempranillo or a Puget Sound Müller-Thurgau.
              </p>
              <StudyImage src={PacificNWMountains} alt="Pacific Northwest with mountains" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref8}>Oregon Map</h2>
            <Content>
              <StudyImage src={OregonMap} alt="Oregon Map" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref9}>Washington Map</h2>
            <Content>
              <StudyImage src={WashingtonMap} alt="Washington Map" />
            </Content>
          </StudyPage>
        </StudyGuide>
      </Page>
      <SideNav header="Pacific Northwest">
        <SideNavLink reference={ref1}>History</SideNavLink>
        <SideNavLink reference={ref2}>Geography & Climate</SideNavLink>
        <SideNavLink reference={ref3}>Wine Regions: Oregon</SideNavLink>
        <SideNavLink reference={ref4}>Wine Regions: Washington</SideNavLink>
        <SideNavLink reference={ref5}>Wine Regions: OR & WA</SideNavLink>
        <SideNavLink reference={ref6}>Major Grape Varieties</SideNavLink>
        <SideNavLink reference={ref7}>Selling Pacific Northwest Wines</SideNavLink>
        <SideNavLink reference={ref8}>Oregon Map</SideNavLink>
        <SideNavLink reference={ref9}>Washington Map</SideNavLink>
      </SideNav>
    </>
  );
};

export default PacificNorthwest;
