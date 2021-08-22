import React, { useRef } from "react";
import Page from "../../components/Page/Page";
import SideNav from "../../components/SideNav/SideNav";
import SideNavLink from "../../components/SideNavLink/SideNavLink";
import StudyGuide from "../../components/StudyGuide/StudyGuide";
import StudyPage from "../../components/StudyPage/StudyPage";
import Content from "../../components/Content/Content";
import StudyImage from "../../components/StudyImage/StudyImage";
import BurgundyImage from "../../assets/Burgundy.png";
import BurgundyChablisMap from "../../assets/BurgundyChablisMap.png";
import BurgundyNuitsMap from "../../assets/BurgundyNuitsMap.png";
import BurgundyBeauneMap from "../../assets/BurgundyBeauneMap.png";
import "./Burgundy.css";

const Burgundy = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);
  const ref11 = useRef(null);
  const ref12 = useRef(null);
  const ref13 = useRef(null);
  return (
    <>
      <Page className="Burgundy">
        <StudyGuide>
          <StudyPage>
            <header>
              <h1>Burgundy</h1>
            </header>
            <Content>
              <p>
                Burgundy, a pastoral region in central France, has a lengthy winemaking history that dates back nearly
                2000 years. Some of the world’s most famous wine villages and vineyards are located in Burgundy, and
                many can trace their origins back to the Christian monks of the Middle Ages. Over the centuries,
                Burgundy’s vignerons have discerned subtle variations in soil and climate. The modern appellation system
                of Burgundy draws from these many years of experience, placing high importance on the shape, soil, and
                slope of the land itself.
              </p>
              <StudyImage src={BurgundyImage} alt="Burgundy Vineyard" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref1}>The Region</h2>
            <Content>
              <h3>Burgundy is divided into several major areas:</h3>
              <p>
                <strong>Chablis:</strong> The northernmost region in Burgundy, just a handful of miles south of the Aube
                in Champagne, focuses on white wine production.
              </p>
              <p>
                <strong>Côte d’Or:</strong> The “golden slope” of Burgundy begins just south of the city of Dijon and
                occupies a narrow vertical corridor. The Côte d’Or is divided into two sectores: the Côte de Nuits and
                the Côte de Beaune. Burgundy’s top vineyards and most famous villages are located here.
              </p>
              <p>
                <strong>Côte Chalonnaise:</strong> A larger, cooler region to the south of the Côte d’Or, the Côte
                Chalonnaise can be a good source for value wines, from the villages of Rully, Givry, Montagny and
                Mercurey. The village of Bouzeron is unique in Burgundy, producing white wines from the local Aligoté
                grape rather than Chardonnay.
              </p>
              <p>
                <strong>Mâconnais:</strong> A large region south of the Côte Chalonnaise, the Mâconnais is predominantly
                a white wine area. The region’s Chardonnay is generally of everyday quality. PouillyFuissé is its most
                notable appellation.
              </p>
              <p>
                <strong>Beaujolais:</strong> Beaujolais in southern Burgundy is the home of the Gamay grape. The wines
                are almost universally inexpensive, and range in quality from the basic Beaujolais nouveau (a wine
                released shortly after harvest) to the more complex wines of the ten Beaujolais Cru villages.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref2}>The Grapes</h2>
            <Content>
              <p>
                In Burgundy, most red wines are produced solely from Pinot Noir, and most white wines are produced
                solely from Chardonnay. While these grapes are nearly ubiquitous today, Burgundy is the ancestral home
                for both varieties. Burgundy’s appellations serve as benchmarks in style for winemakers around the
                globe, and the region’s best wines command incredibly high prices. The red Gamay grape is also found in
                Burgundy, but cultivation is generally limited to the Beaujolais region.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref3}>The Appellation System</h2>
            <Content>
              <p>
                Burgundy’s appellation system can be difficult to grasp, but it is important to understand the
                distinctions on a label. Two wines from the same producer may carry nearly identical labels, yet vary in
                price by hundreds of dollars. For example, “Gevrey-Chambertin” and “Chambertin” from the same producer
                will be dramatically different in price.
              </p>
              <h4>Bourgogne</h4>
              <p>
                Wines from any area in the entire region of Burgundy may be labeled as Bourgogne AOP. This is typically
                the most inexpensive offering in a producer’s portfolio, and it represents basic varietal quality
                without definition of site or terroir.
              </p>
              <h4>Village</h4>
              <p>
                Many prominent villages in Burgundy have AOP status. This assures the wine was produced from grapes
                grown in that particular village. The village AOPs of the Côte d’Or are the most renowned, and the best
                villages have a classic style profile associated with them.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref4}>Ascending the quality ladder</h2>
            <Content>
              <p>
                Climbing from simple Bourgogne AOC to the great Grand Cru wines, the price and rarity of the wines
                increase. The sense of place and terroir also improves, as the grapes are sourced from a smaller areas.
                The quality and concentration of fruit advances; yields diminish. Significantly, many producers prefer
                to use greater percentages of new French oak for premier and grand cru wines than they would employ for
                village wines.
              </p>
              <h4>Premier Cru</h4>
              <p>
                Within each of the better villages, there are certain single vineyards believed to produce superior
                wines, and accorded additional respect in the AOP laws. These are known as Premier Crus, or “1er Crus.”
                If the term appears on a label, the wine is likely to be superior in quality to a village-level wine,
                and it is undoubtedly higher in price and scarcer in quantity. Premier Cru wines often include the name
                of a single premier cru vineyard.
              </p>
              <h4>Grand Cru</h4>
              <p>
                Grand Crus are single vineyards so highly regarded in quality that they are granted their own AOP
                status. They range in size from two to nearly 400 acres. Grand Cru AOPs—Chambertin, Montrachet, and la
                Romanée—command so much fame and prestige that the villages around them, Gevrey-Chambertin,
                Puligny-Montrachet, Chassagne-Montrachet, and Vosne-Romanée — adopted the vineyards’ names.
              </p>
              <p>
                Rarely, a single producer may own an entire Premier Cru or Grand Cru vineyard. Such vineyards, like
                Mommessin’s Clos de Tart, are known as monopoles. Most vineyards, however, are divided among several
                producers. For instance, over two dozen different houses produce wines labeled “Montrachet Grand Cru.”
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref5}>Chablis</h2>
            <Content>
              <p>
                Located to the north of the Côte d’Or, the Chablis AOP produces white wines from 100% Chardonnay. The
                classic style of the village is a bracing, steely, mineral, slightly oxidative white wine. Chablis wines
                are often very austere in their youth, and lighter in body than their counterparts from the Côte d’Or.
                The region’s limestone soils are reflected in the chiseled, chalky character of the wines. New oak aging
                is an unusual sight in the cellars of Chablis
              </p>
              <p>
                <strong>Petit Chablis:</strong> Basic quality Chardonnay from lesser sites
              </p>
              <p>
                <strong>Chablis:</strong> Village wines
              </p>
              <p>
                <strong>Chablis “Premier Cru”:</strong> 40 high quality sites of which 17 top names, such as Montée de
                Tonnerre, Montmains, or Vaillons, often apper on labels.
              </p>
              <p>
                <strong>Chablis Grand Cru:</strong> 7 Grand Cru sites enjoy southwestern exposure, just north of the
                town of Chablis itself. The best Grand Cru vineyards in Chablis are{" "}
                <strong>Les Clos, Valmur, and Vaudésir</strong>.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref6}>Chablis Map</h2>
            <Content>
              <StudyImage src={BurgundyChablisMap} alt="Chablis Map" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref7}>Côte d’Or</h2>
            <Content>
              <p>
                The Côte d’Or is the heart of Burgundy, and includes the region’s most iconic vineyards and villages.
                The northern sector of the Côte d’Or is called the Côte de Nuits, and it is home to all but one of
                Burgundy’s red Grand Cru vineyards. The southern sector, the Côte de Beaune, is highly acclaimed for the
                quality of its white wines; all but one of the Côte d’Or’s white Grand Cru vineyards are located here.
              </p>
              <p>
                Red wines from the Côte d’Or are typically earthier than Pinot Noir wines produced in California or
                other parts of the New World, and they often have brighter acidity and more moderate alcohol levels.
                Richness and weight increase as one moves from village to Premier Cru to Grand Cru quality. Reds from
                the Côte de Beaune tend to be lighter than reds from the Côte de Nuits, and they frequently see less new
                oak during the aging process.
              </p>
              <p>
                White wines from the Côte de Beaune can range in style from full-bodied, oak-driven, opulent Chardonnay
                to crisp and more mineral examples. In general, white Burgundy is less tropical, less buttery and more
                defined on the palate than a classic California Chardonnay.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref8}>Important Village AOPs of the Côte de Nuits</h2>
            <Content>
              <h4>Gevrey-Chambertin</h4>
              <p>
                Home to its namesake Grand Cru Chambertin, the village of GevreyChambertin is commonly believed to
                produce powerful Pinot Noir wines that exhibit a more dominant black fruit character.
              </p>
              <h4>Chambolle-Musigny</h4>
              <p>
                Highly regarded for a softer, charming and more feminine style of red wine, Chambolle-Musigny is home to
                the lion’s share of the vineyard Musigny, the only Grand Cru in the Côte de Nuits that is legally
                allowed to produce both red and white wines.
              </p>
              <h4>Vougeot</h4>
              <p>
                While Vougeot AOP wines are fairly rare, the historic Grand Cru Clos de Vougeot dominates the
                production. The vineyard, first tended by Cistercian monks nearly a millennium ago, is completely
                enclosed by a wall that dates to the 14th century; the wall still stands today. At 120 acres, this is
                the largest Grand Cru in the Côte de Nuits, and quality varies greatly by producer.
              </p>
              <h4>Vosne-Romanée</h4>
              <p>
                Many consider this village to be the standard bearer for finesse and precision in Pinot Noir. Domaine de
                la Romanée Conti, producer of some of Burgundy’s most lavishly expensive wines, is located in this
                village, and they have two monopole Grand Cru vineyards: La Tâche and Romanée-Conti.
              </p>
              <h4>Nuits-Saint-Georges</h4>
              <p>
                While this village does not encompass any Grand Cru vineyards, it has established a good reputation for
                solid, sturdy, and rustic Pinot Noir. It takes its name from its most prestigious Premier Cru vineyard,
                Les Saint-Georges.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref9}>Côte de Nuits Map</h2>
            <Content>
              <StudyImage src={BurgundyNuitsMap} alt="Cote de Nuits Map" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref10}>Important Village AOPs of the Côte de Beaune</h2>
            <Content>
              <h4>Pommard</h4>
              <p>
                Pommard allows only red wine production under the AOP. Pommard’s wines tend to be fuller and more tannic
                than those of its southern neighbor Volnay.
              </p>
              <h4>Volnay</h4>
              <p>
                Producers may only label red wines as Volnay. The wines are usually softer and lighter in style. Many
                producers make Volnay reds and Meursault whites, as the villages are adjacent.
              </p>
              <h4>Meursault</h4>
              <p>
                Despite its lack of Grand Cru vineyards, Meursault’s white wines are lauded for their rich, nutty,
                textural qualities. “Les Perrières” is a high quality Premier Cru.
              </p>
              <h4>Puligny-Montrachet</h4>
              <p>
                Puligny-Montrachet AOP takes its name from the Montrachet Grand Cru, site of the world’s most
                prestigious Chardonnay vines. Puligny is often racier than Meursault’s whites, with distinctive mineral
                character.
              </p>
              <h4>Chassagne-Montrachet</h4>
              <p>
                Chassagne-Montrachet, like Puligny, lays claim to part of the Montrachet Grand Cru. The white wines from
                Chassagne-Montrachet are often weightier and broader than wines from neighboring Puligny.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref11}>Côte de Beaune Map</h2>
            <Content>
              <StudyImage src={BurgundyBeauneMap} alt="Cote de Beaune Map" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref12}>Types of Producers: Domaine vs. Négociant</h2>
            <Content>
              <p>
                Since the days of Napoleon, estates have been divided amongst eligible heirs, rather than given entirely
                to firstborn sons. This policy led to a fracturing of vineyard holdings in Burgundy, dividing vineyards
                into smaller parcels over time. Suddenly, some estates had such miniscule parcels that they could not
                afford the machinery of winemaking. Enter the négociant: a firm that purchases grapes, must, or even
                wines from a number smaller producers in order to make a viable amount of wine. Large négociants include
                Bouchard, Joseph Drouhin, and Louis Latour.
              </p>
              <p>
                Domaines, on the other hand, own their vines and produce and bottle their own wines. The product of a
                Burgundy domaine could be compared to an “estate-bottled” selection from the United States. Typically,
                domaines have smaller production and higher prices. Domaine wines are usually subject to more vintage
                variability, but they are often more characterful.
              </p>
              <p>
                A domaine may also operate a separate négociant business, as in the case of Domaine and Maison Leroy.
                Other firms have similar names due to family connections. Domaine Leflaive wines, for instance, are
                fabulously expensive and highly praised, whereas the négociant Olivier Leflaive, a member of the same
                family, sells his more widely available wines at lower prices.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref13}>Selling the Wines of Burgundy</h2>
            <Content>
              <p>
                Chardonnay and Pinot Noir are crowd-pleasing wines, and Burgundy makes a great introduction to France
                for fans of New World renditions. Remember, Burgundy will often have higher acidity and a more
                pronounced earthy character, but there are also many French producers who emphasize sweet fruit and
                oak—the hallmarks of many New World examples.
              </p>
              <p>
                Selling the story of a wine can often be more effective than selling the wine on its taste profile
                alone. Take the time to learn a few interesting points, historical facts, or other anecdotal elements
                about favorite Burgundy wines, and relate them to curious guests. Domaines and vineyards in Burgundy
                often have fascinating backstories—use them to your advantage, and invest the guest in a wine’s heritage
                and lore.
              </p>
              <p>
                Both red and white Burgundy wines can be fabulously food-friendly. Red Burgundy works well with duck,
                game birds, mushroom dishes, pork and poultry. Given its generally softer tannic structure, it can even
                work with fish and vegetable courses, and the wine can pull a whole table of different entrées together
                with a reasonable degree of success. White Burgundy, on the other hand, is a perfect match for lobster
                and scallops, but it also marries well with veal, poultry and cheese.
              </p>
            </Content>
          </StudyPage>
        </StudyGuide>
      </Page>
      <SideNav header="Burgundy">
        <SideNavLink reference={ref1}>The Region</SideNavLink>
        <SideNavLink reference={ref2}>The Grapes</SideNavLink>
        <SideNavLink reference={ref3}>The Appellation System</SideNavLink>
        <SideNavLink reference={ref4}>Ascending the quality ladder</SideNavLink>
        <SideNavLink reference={ref5}>Chablis</SideNavLink>
        <SideNavLink reference={ref6}>Chablis Map</SideNavLink>
        <SideNavLink reference={ref7}>Côte d’Or</SideNavLink>
        <SideNavLink reference={ref8}>Important Village AOPs of the Côte de Nuits</SideNavLink>
        <SideNavLink reference={ref9}>Côte de Nuits Map</SideNavLink>
        <SideNavLink reference={ref10}>Important Village AOPs of the Côte de Beaune</SideNavLink>
        <SideNavLink reference={ref11}>Côte de Beaune Map</SideNavLink>
        <SideNavLink reference={ref12}>Types of Producers: Domaine vs. Négociant</SideNavLink>
        <SideNavLink reference={ref13}>Selling the Wines of Burgundy</SideNavLink>
      </SideNav>
    </>
  );
};

export default Burgundy;
