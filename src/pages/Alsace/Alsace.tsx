import React, { useRef } from "react";
import Page from "../../components/Page/Page";
import SideNav from "../../components/SideNav/SideNav";
import SideNavLink from "../../components/SideNavLink/SideNavLink";
import StudyGuide from "../../components/StudyGuide/StudyGuide";
import StudyPage from "../../components/StudyPage/StudyPage";
import Content from "../../components/Content/Content";
import ForYourInfo from "../../components/ForYourInfo/ForYourInfo";
import StudyImage from "../../components/StudyImage/StudyImage";
import AlsaceVineyard from "../../assets/AlsaceVineyard.jpeg";
import AlsaceMap from "../../assets/AlsaceMap.jpeg";
import "./Alsace.css";

const Alsace: React.FC = () => {
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
      <Page className="Alsace">
        <StudyGuide>
          <StudyPage>
            <header>
              <h1>Alsace</h1>
            </header>
            <Content>
              <p>
                Alsace is the northernmost region in France specializing in still wines, and it has developed a
                worldwide reputation for the quality of its whites. Unlike most cool climate, northern European white
                wines, Alsatian wines are neither light nor delicate; rather, the wines are more often full, fragrant,
                spicy and rich. The weight and power of Alsatian wines affords them space at the table amidst the
                region’s hearty cuisine.
              </p>
              <StudyImage src={AlsaceVineyard} alt="Alsace Vineyard" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref1}>The Region</h2>
            <Content>
              <p>
                The small, colorful region of Alsace lies in the northeastern corner of France, geographically separated
                from the rest of the country by the Vosges Mountains. The Rhine River marks its boundary with
                neighboring Germany, and governance of Alsace has changed hands more than once in the two nations’
                turbulent history. Germany’s last command over the region ended with the Nazis’ defeat in World War II.
                After its reclamation by France, Alsace became the last major winemaking region in the country to attain
                AOC status, in 1962.
              </p>
              <h3>Alsace is divided into two sub regions:</h3>
              <p>
                <strong>Bas-Rhin</strong> The Bas-Rhin is the northern sector of Alsace. The capital of Alsace,
                Strasbourg, is located within this area.
              </p>
              <p>
                <strong>Haut-Rhin</strong> This southern sector of Alsace is home to many of the region’s premier
                vineyards. Colmar is the regional capital.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref2}>Geology and Climate</h2>
            <Content>
              <p>
                The secret to the power and body of Alsatian white wines lies in its sunny and dry climate: the Vosges
                Mountains create a “rain shadow” effect, causing rain clouds to precipitate and disperse on the western
                side of the range, leaving the region’s vineyards drenched only in sun. Alsace’s northerly location
                equates to added hours of sunshine during the summer, and grapes ripen easily. Alsatian soils are a
                geological mosaic, containing layers of granite, sandstone, schist, clay, loess, and other forms of
                sediment and rock. The best sites in the region lie on the lower slopes of the Vosges. Better vineyards
                feature a southern or southeastern exposure to take optimum advantage of the sun, and growers take care
                to match grape varieties with appropriate soil types.{" "}
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref3}>Appellations in Alsace</h2>
            <Content>
              <h3>Alsace AOC</h3>
              <p>
                White varietal wines, red and rosé Pinot Noir, and white blends are released under the regional AOC.
                Blends may be labeled as “Edelzwicker” or “Gentil”.
              </p>
              <h3>Alsace Grand Cru AOC</h3>
              <p>
                Alsace and Burgundy are the only French regions to grant “Grand Cru” status to vineyard sites. In
                Alsace, 51 vineyards qualify for production of Grand Cru white wines. Most are labeled by variety.
              </p>
              <h3>Crémant d’Alsace AOC</h3>
              <p>
                Sparkling wines produced in the traditional method of Champagne may be released as Crémant d’Alsace.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref4}>The “Noble Grapes” of Alsace</h2>
            <Content>
              <p>
                Alsace and Alsace Grand Cru wines are usually labeled by variety, a rarity for French AOC wines. While
                basic AOC wines may be produced from a number of grape varieties, Alsace Grand Cru wines are generally
                limited to the following “noble varieties”.
              </p>
              <h3>Riesling</h3>
              <p>
                Riesling is the most planted grape in Alsace, and the source of some of its finest wines. Alsatian
                Riesling is classically fermented dry, and is more powerful than its German counterparts. Fresh acidity,
                minerality, and youthful austerity characterize the grape.
              </p>
              <h3>Muscat</h3>
              <p>
                Muscat wines are produced from two separate varieties, Muscat Blanc à Petits Grains and Muscat Ottonel.
                Despite Muscat’s suggestively sweet nose--orange, flowers, peach and grape--Alsatian examples are often
                dry on the palate. Lighter than Pinot Gris or Gewurztraminer, Muscat makes a splendid aperitif.
              </p>
              <h3>Pinot Gris</h3>
              <p>
                Once known as Tokay d’Alsace, Pinot Gris may be genetically identical to Italy’s Pinot Grigio, but that
                is where the similarities end. The Alsatian version is more robust; revealing honey, dried apricots,
                mushroom, and ginger. Fuller in body than Riesling or Muscat, Alsatian Pinot Gris often retains residual
                sugar
              </p>
              <h3>Gewurztraminer</h3>
              <p>
                Gewurztraminer has a signature personality: full-bodied, fat, spicy, and intensely aromatic, the “Spicy
                Traminer” grape inevitably produces Alsace’s biggest and most instantly recognizable wine. Tasters often
                find lychee, fruit cocktail, and rose aromas arising from this viscous, golden wine.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref5}>Other Varieties in Alsace</h2>
            <Content>
              <h3>Pinot Blanc</h3>
              <p>
                This variety produces forward, fruity wines of medium acidity. Wines labeled “Pinot Blanc” may be blends
                of Pinot Blanc and Auxerrois, and wines labeled “Pinot” may be blends of Pinot Blanc, Pinot Gris, Pinot
                Noir, and Auxerrois.
              </p>
              <h3>Sylvaner</h3>
              <p>
                Inexpensive examples of Sylvaner can be light and simple, but the grape produces a full-bodied, rich,
                and mineral wine in the right hands. It is the only variety apart from the “noble grapes” that can be
                produced as a Grand Cru wine, in Zotzenberg.
              </p>
              <h3>Auxerrois</h3>
              <p>
                While Auxerrois is not usually bottled as a pure varietal wine, its fatter texture and honeyed aromas
                add voluptuousness to Pinot Blanc in blends.
              </p>
              <h3>Chasselas</h3>
              <p>
                Also known as Gutedel, Chasselas likely originated in Switzerland, where the white wine is considered an
                ideal pairing for fondue. In Alsace, it is usually encountered as an anonymous component of Edelzwicker
                blends.
              </p>
              <h3>Pinot Noir</h3>
              <p>
                Pinot Noir is the only red grape grown in Alsace. Characterized by lightness and leanness in the past,
                Alsatian Pinot Noir can be surprisingly dense and extracted, particularly as producers aim to compete
                with Burgundy.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref6}>Late Harvest Wines</h2>
            <Content>
              <h3>In Alsace, two late harvest indications may be added to wines produced from the noble varieties:</h3>
              <p>
                <strong>Venanges Tardives:</strong> To produce these concentrated wines, grapes are picked by hand late
                in the season. VT wines are produced from a single variety, and they may be sweeter or drier in style.
                VT wines may display the character of botrytis (”noble rot”).
              </p>
              <p>
                <strong>Sélection de Grains Nobles:</strong> SGN wines are intensely sweet, botrytis-affected, honeyed
                wines most suitable for service at the conclusion of a meal. Better examples stand alongside Sauternes
                and the great sweet wines of the Loire Valley as France’s finest dessert wines.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref7}>Alsatian Wine: Dry or Sweet?</h2>
            <Content>
              <ForYourInfo backgroundColor="green">
                <p>
                  The degree of sweetness in Alsatian wines can be unpredictable: for some producers, residual sugar may
                  vary from vintage to vintage in the same bottling.
                </p>
                <p>
                  Classically, Riesling and Muscat are generally dry, whereas Pinot Gris and Gewurztraminer are
                  generally off-dry. Today, however, many wines from the region are veering toward opulent sweetness,
                  with no indication of residual sugar on the label. Customers have, understandably, become frustrated
                  with the inconsistency
                </p>
                <p>
                  Knowledge is key: in order to successfully sell Alsatian wines, servers must have an understanding of
                  the wines’ relative dryness or sweetness. Some producers, like Trimbach, remain classic in their
                  approach, whereas others, like Zind Humbrecht, now provide a sweetness scale on the label. In
                  addition, Alsatian wine law now requires all basic Alsace AOC Riesling wines to be dry. Overall, both
                  drier and sweeter styles can be exceptional, but they have different applications at the table.
                </p>
              </ForYourInfo>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref8}>Selling Alsatian Wines</h2>
            <Content>
              <p>
                Beyond a recognition of a wine’s level of sweetness, take a moment to discover something about its
                character: some Alsatian wines are fruity, lush and modern, while others are wild and earthy. Some are a
                little lighter; others are bigger and more concentrated than many red wines. In a pinch, check out the
                alcohol level: an Alsatian wine with 15% alcohol might be best reserved for the main course, whereas a
                bottle at 12% may be a better starter.
              </p>
              <p>
                Remember, not all Riesling is sweet! Your guest may not realize this, and an introduction to dry
                Alsatian Riesling might open a new door.
              </p>
              <p>
                White wine from Alsace is not limited to the fish course: the spicy, denser styles of Pinot Gris and
                Gewurztraminer produced in the region often pair best with poultry, sausages, mushroom tarts, foie gras,
                veal, and other rich cuisine. Riesling can frame pork or scallops equally well. And asparagus is a
                problem food for wine? Tell that to the Alsatians, who love to wash it down with the local Muscat during
                the spring season!
              </p>
              <p>
                Gewurztraminer and Muscat can provide an “a-ha!” moment for guests who are just starting to get the hang
                of wine tasting. The aromas are so forward, intense, and recognizable that the wines may serve to boost
                an inexperienced taster’s confidence. In fact, the hardest part about selling Gewurztraminer to a
                neophyte wine drinker isn’t in the glass, its in the name.
              </p>
              <p>
                Biodynamic and organic grape-growing are big trends in Alsace. If you have producers on your list who
                abide by one or the other of these viticultural principles--JosMeyer, Ostertag, Zind Humbrecht, René
                Muré, Albert Mann, Albert Seltz, and many more--you have a powerful sales pitch for guests interested in
                sustainable farming practices.
              </p>
              <p>Crémant d’Alsace makes an inexpensive alternative to Champagne for a budget-conscious guest.</p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref9}>Alsace Map</h2>
            <Content>
              <StudyImage src={AlsaceMap} alt="Alsace Map" />
            </Content>
          </StudyPage>
        </StudyGuide>
      </Page>
      <SideNav header="Alsace">
        <SideNavLink reference={ref1}>The Region</SideNavLink>
        <SideNavLink reference={ref2}>Geology and Climate</SideNavLink>
        <SideNavLink reference={ref3}>Appellations in Alsace</SideNavLink>
        <SideNavLink reference={ref4}>The “Noble Grapes” of Alsace</SideNavLink>
        <SideNavLink reference={ref5}>Other Varieties in Alsace</SideNavLink>
        <SideNavLink reference={ref6}>Late Harvest Wines</SideNavLink>
        <SideNavLink reference={ref7}>Alsatian Wine: Dry or Sweet?</SideNavLink>
        <SideNavLink reference={ref8}>Selling Alsatian Wines</SideNavLink>
        <SideNavLink reference={ref9}>Alsace Map</SideNavLink>
      </SideNav>
    </>
  );
};

export default Alsace;
