import React, { useRef } from "react";
import Page from "../../components/Page/Page";
import SideNav from "../../components/SideNav/SideNav";
import SideNavLink from "../../components/SideNavLink/SideNavLink";
import StudyGuide from "../../components/StudyGuide/StudyGuide";
import StudyPage from "../../components/StudyPage/StudyPage";
import Content from "../../components/Content/Content";
import ForYourInfo from "../../components/ForYourInfo/ForYourInfo";
import StudyImage from "../../components/StudyImage/StudyImage";
import BordeauxChateau from "../../assets/BordeauxChateau.png";
import "./Bordeaux.css";

const Bordeaux = () => {
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
      <Page className="Bordeaux">
        <StudyGuide>
          <StudyPage>
            <header>
              <h1>Bordeaux</h1>
            </header>
            <Content>
              <p>
                The origins of the world’s modern ne wine market lie in southwestern France’s Gironde département, not
                far from the Atlantic Ocean. The Bordeaux wine region takes its name from a city on the Garonne River,
                which established itself as a major medieval port and a hub of the wine trade. Dutch merchant eets
                carried Bordeaux wines across Europe in the middle of the last millennium, and the English have long
                exhibited great thirst for claret—the red wines of Bordeaux.
              </p>
              <p>
                Bordeaux today is justly famous for its top red and sweet white wines, and mature vintages from fabled
                estates have long been the backbone of serious collectors’ cellars and auction house oerings. But
                Bordeaux oers more than wine for the wealthy. In ush vintages, Bordeaux makes almost a billion bottles
                of wine, in every style—red, dry and sweet white, rosé and sparkling. Bordeaux is the largest region of
                AOP production in France, encompassing more than fty individual wine appellations and nearly 120,000
                hectares of vineyards. With so much focus on the high end, it’s easy to miss a vast amount of aordable
                wines produced in the region.{" "}
              </p>
              <StudyImage src={BordeauxChateau} alt="Bordeaux Chatuea" caption="Château Margaux" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref1}>Climate</h2>
            <Content>
              <p>
                Two rivers, the Garonne and the Dordogne, converge into the Gironde, a 50-mile-long, widening estuary
                that ows northward into the Atlantic Ocean. Bordeaux’s wine regions line the banks of these rivers and
                estuary. Bordeaux’s climate, moderated by its waterways and proximity to the coast, is mild, humid and
                maritime—summers are warm but can be wet. Winter’s bite is blunted, but the threat of rainfall during
                June owering and the September-October harvest is a frequent concern.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref2}>The Bordeaux Grape Family</h2>
            <Content>
              <ForYourInfo
                backgroundColor="green"
                style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}
              >
                <div>
                  <ul
                    style={{
                      listStyleType: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    <li>
                      <strong>Red Grapes</strong>
                    </li>
                    <li>Cabernet Sauvignon </li>
                    <li>Merlot</li>
                    <li>Cabernet Franc</li>
                    <li>Petite Verdot</li>
                    <li>Malbec</li>
                    <li>Carmenère</li>
                  </ul>
                </div>
                <div>
                  <ul
                    style={{
                      listStyleType: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    <li>
                      <strong>White Grapes</strong>
                    </li>
                    <li>Sauvignon Blanc</li>
                    <li>Sémillon</li>
                    <li>Muscadelle</li>
                  </ul>
                </div>
              </ForYourInfo>
              <p>
                When sommeliers speak of a “Bordeaux family” of grapes, it’s not just for ease of classication—many
                really are related! Cabernet Franc and Sauvignon Blanc are the genetic parents of Cabernet Sauvignon.
                Cabernet Franc is a parent of Merlot, and Malbec and Merlot are genetic half-siblings, with a common
                mother, the very rare Magdeleine Noire des Charentes. Consequently, some produce wines with similar
                characteristics. Green notes—bell pepper, grass, sage—are common throughout, particularly when grown in
                moderate climates like Bordeaux. Petit Verdot and Muscadelle are the outliers, without direct genetic
                relationship to the others.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref3}>Bordeaux is a blend</h2>
            <Content>
              <p>
                <strong>Red Bordeaux</strong> wines are frequently blends of two, three or more varieties. The
                traditional recipe for Left Bank wines calls for a Cabernet Sauvignon-dominant blend, with lesser
                amounts of Merlot and/or Cabernet Franc. A small percentage of Petit Verdot may be added for exotic
                seasoning. On the Right Bank, Merlot and Cabernet Franc are the dominant grapes, as growers historically
                had difficulty ripening Cabernet Sauvignon in its colder clay soils. Malbec and Carmenère are rare in
                modern Bordeaux.
              </p>
              <ul>
                <li>
                  <strong>Cabernet Sauvignon:</strong> Power, Austerity, Deep Color, High Tannin, Black Fruit
                </li>
                <li>
                  <strong>Merlot:</strong> Plushness, Texture, Higher Alcohol, Blue and Red Fruit
                </li>
                <li>
                  <strong>Cabernet Franc:</strong> Fragrance, Black and Red Fruit, Freshness
                </li>
                <li>
                  <strong>Petit Verdot:</strong> Floral perfume, Deep Color, High Tannin
                </li>
              </ul>
              <p>
                <strong>White Bordeaux</strong> wines are typically blends of Sémillon and Sauvignon Blanc, although
                some producers use a touch of Muscadelle as well. Sémillon dominates sweet wine blends, while Sauvignon
                Blanc is usually the dominant grape in dry wines. Muscadelle is aromatic, but unrelated to the Muscat
                family.
              </p>
              <ul>
                <li>
                  <strong>Sauvignon Blanc:</strong> Grassiness, High Acidity
                </li>
                <li>
                  <strong>Sémillon:</strong> Texture and Weight
                </li>
                <li>
                  <strong>Muscadelle</strong> Floral Intensity, Fruitiness
                </li>
              </ul>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref4}>The Regions of Bordeaux</h2>
            <Content>
              <p>
                Bordeaux’s various appellations are grouped into <strong>four</strong> major regions: the Left Bank, the
                Right Bank, Entre-Deux-Mers, and Côtes de Bordeaux.
              </p>
              <p>
                The basic appellation for the entire region is Bordeaux AOP. Bordeaux AOP wines that do not indicate a
                smaller zone of production (Côtes de Bordeaux, Pauillac, Haut-Médoc, etc.) may theoretically contain
                grapes grown in any or all of these areas. Bordeaux AOP wines may be red, dry white, sweet white, or
                rosé. Sparkling wines made by the traditional method may be produced from Bordeaux varieties throughout
                the region, and labeled as Crémant de Bordeaux
              </p>
              <ForYourInfo backgroundColor="green">
                <h5 style={{ textAlign: "center" }}>Superior?</h5>
                <p>
                  Is Bordeaux <em>supérieur</em> really superior? Not necessarily! This appellation, introduced in 1943,
                  requires slightly reduced maximum yields and a higher minimum level of ripeness at harvest. This was
                  an important signifier of quality decades ago, but in the modern era <em>supérieur</em> levels of
                  alcohol are easy to achieve. White wines labeled <em>supérieur</em> will be o-dry to semi-sweet.
                </p>
              </ForYourInfo>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref5}>The Left Bank: Médoc</h2>
            <Content>
              <p>
                The Médoc, a triangular peninsula between the Gironde Estuary and the Atlantic Ocean, is located north
                of the city of Bordeaux. It is the region’s most renowned red wine district today, but it was forest and
                saltmarsh in the early 17th century. Dutch tradesmen and engineers arrived to drain the marshes,
                revealing great beds of gravel that would become the preeminent home for Cabernet Sauvignon in France,
                and the world. Soon, aristocratic and grandiose châteaux—manor houses—rose up in the Médoc, each with
                its own vineyard. The greatest châteaux became emblems of fine wine—the first true “brands” of the wine
                world.
              </p>
              <p>
                The Médoc is sheltered from harsh Atlantic gales by a band of coastal forest, and its most famous wine
                appellations are located directly on the Gironde. The Haut-Médoc (“upper” Médoc) is its premier southern
                subregion, home to the deepest and most well-drained gravel soils in Bordeaux. The following four
                village appellations are within the Haut-Médoc and are benchmark appellations for Cabernet
                Sauvignon-based blends in Bordeaux.
              </p>
              <p>
                <strong>Saint-Estèphe AOP:</strong> Tannic, austere, and rugged
              </p>
              <p>
                <strong>Saint-Julien AOP</strong> Balanced and restrained
              </p>
              <p>
                <strong>Pauillac AOP:</strong> Aristocratic, powerful, and long-lived
              </p>
              <p>
                <strong>Margaux AOP:</strong> Exotic, perfumed, and silky
              </p>
              <p>
                Remember: while the Médoc is an entire geographic area, bottles labeled as Médoc AOP are everyday wines,
                usually sourced from vineyards that do not qualify for one of the superior village or regional
                appellations within it. This is Cabernet country, but wines labeled Médoc AOP (or Haut-Médoc AOP)
                typically include a sizeable percentage of Merlot—the grape may make up half the blend.
              </p>
              <ForYourInfo backgroundColor="green">
                <h5 style={{ textAlign: "center" }}>Bordeaux and Oak</h5>
                <p>
                  Aging wine in 225-liter oak barrels—barriques— is a routine practice in Bordeaux. Larger proportions
                  of new barrels are typically employed for the more prestigious wines—whether red or white, dry or
                  sweet—lending aromas of vanilla, toasted cedar, and spice.
                </p>
              </ForYourInfo>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref6}>The Left Bank: Graves</h2>
            <Content>
              <p>
                Fanning southward from the city of Bordeaux, the Graves region lines the western (left) bank of the
                Garonne. As its name indicates, Graves has gravelly soils suitable for Cabernet Sauvignon, particularly
                in the northern part of the region. However, there is more clay and sand than in the Haut-Médoc, and
                more Merlot in its vineyards. Classic Graves red blends are often evenly split between the two grapes,
                and good Graves reds are generally lighter, less tannic, and more elegant than the top wines of the
                Médoc.
              </p>
              <p>
                The best properties are located in northern Graves—some sit amidst the suburbs of Bordeaux itself! And
                the best red and dry white wines are typically labeled as Pessac-Léognan AOP, signifying northern
                Graves, rather than Graves AOP. With a few exceptions, Pessac-Léognan reds often play second ddle to the
                great Médoc reds, but without doubt the appellation produces the top dry whites in Bordeaux. Classically
                aged in oak, these wines are creamy, herbal and textural; they are a luxurious step up in body and
                richness from sharper styles of Sauvignon Blanc common in the Loire Valley.
              </p>
              <p>
                At Graves’ far southern end, near the conuence of the Ciron and Garonne Rivers, are two important
                destinations for sweet white wines, Sauternes and Barsac.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref7}>The Right Bank</h2>
            <Content>
              <p>
                The Right Bank is an informal name for the appellations lining the eastern banks of the Gironde and its
                tributary, the Dordogne River. Here Merlot and Cabernet Franc take center stage. The region’s premier
                red wine appellations are Pomerol and Saint-Émilion.
              </p>
              <p>
                <strong>Pomerol AOP:</strong> Wines from this small appellation exemplify French Merlot. The wines are
                often lush and lavishly oaked, with avors of plum and chocolate. Traditional producers make wines with a
                harder edge, but overall these are among Bordeaux’s richest, plumpest, and most extravagant wines.
              </p>
              <p>
                <strong>Saint-Émilion AOP:</strong> Merlot and Cabernet Franc are both suited to the limestone, clay,
                and gravel soils of Saint-Émilion. Merlot is predominant, but Cabernet Franc may account for almost half
                the blend in some very good wines. Its spine rms up the sweetness of Merlot. Saint-Émilion is a much
                larger appellation than Pomerol and oers a wider range of quality and style, from inexpensive, rustic
                and leathery to lavishly oaked, modern and ripe. Overall, the wines are a bit more rigid and less fat
                than in Pomerol, but more mellow and round than Left Bank wines.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref8}>Côtes de Bordeaux</h2>
            <Content>
              <p>
                In Bordeaux, most vineyards sit atop gentle grades rather than severe slopes, but in the inland côtes
                (hills) the landscape becomes more dramatic. Several smaller, historic appellations line the eastern
                edge of Bordeaux amid its côtes, including Bourg AOP and Côtes de Bordeaux AOP itself. The latter
                comprises four areas along the region’s periphery and the eastern banks of the Gironde and the Garonne.
                Individual bottles may carry the name of one of its composite regions: Francs, Cadillac, Castillon, or
                Blaye.
              </p>
              <p>
                Most Côtes de Bordeaux wines are Merlot-based reds. They often don’t require much cellaring to show
                their best, although there are some ambitious producers in these second-tier areas that really perform
                above their station!
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref9}>Entre-Deux-Mers</h2>
            <Content>
              <p>
                The “land between two seas,” Entre-Deux-Mers is an appellation for dry white wines located between the
                Garonne and Dordogne Rivers. This is a large region producing steely, crisp Sauvignon Blanc wines that
                often have more in common with Loire Valley examples than the richer, oak-aged wines of the Graves.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref10}>Sauternes and Barsac</h2>
            <Content>
              <h3>Bordeaux’s World Class Dessert Wines</h3>
              <p>
                The wines of Sauternes and Barsac are some of the world’s most expensive, ageworthy, and acclaimed
                dessert wines. Sémillon is the dominant grape in the sweet wines of these regions, supported by
                Sauvignon Blanc and Muscadelle. In warm, humid, late summer afternoons the Botrytis cinerea (“noble
                rot”) mold attacks the thin-skinned grapes, dehydrating them. The process naturally concentrates sugars
                and adds avors of honey, dried apricot and saron to the nished wine. However, it does not aect bunches
                evenly—vigilant Sauternes producers must send picking teams on multiple passes through the vineyard. The
                laborious harvests and miniscule yields result in very expensive wines.
              </p>
              <p>
                Good Sauternes has a golden hue that deepens with age; the wine is full-bodied, with thick viscosity and
                a wealth of ripe and tropical fruit notes that grow savory over time. The top châteaux typically age
                these wines in a high percentage of new oak barrels—the avors of botrytis mingle with the sweet spices
                and vanilla tones of oak in the wine. This ultimate luxury wine is a great pairing at the end of a meal
                with fall fruit desserts and avors of honey, dried gs, gingerbread, hazelnut, and graham cracker. Plus,
                it’s a classic pairing for both blue cheese and foie gras!
              </p>
              <p>
                Less expensive—but less luxurious—dessert wines are made in neighboring appellations like Cérons and
                Loupiac. These typically show less botrytis and oak character, and are simpler and fruitier on the
                palate.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref11}>Bordeaux Classifcations</h2>
            <Content>
              <p>
                Bordeaux is famous for its many quality château classications. Unlike most other grand cru systems in
                France, in which vineyards or villages are classied according to their relative potential, Bordeaux has
                several means of classifying châteaux for the actual quality of their wines.
              </p>
              <p>
                Bordeaux’s most famous, enduring, and debated classication dates to 1855. Napoléon III commissioned a
                ranking of Bordeaux’s top châteaux in advance of the Universal Exposition in Paris, a cultural
                celebration that would draw tourists from across Europe and the globe. Bordeaux’s merchants assembled
                the rankings by price, and classied dry red wines of the Médoc—and one from Graves—in ve crus, while
                making a separate list of sweet white wines. Four “rst growths” were born—Châteaux Late-Rothschild,
                Latour, Margaux, and Haut-Brion—and one Sauternes wine, Château d’Yquem, was accorded honor as premier
                cru supérieur, a wine without equal. The 1855 classication is still in place today, and only one
                signicant change has occurred in over 150 years: in 1973 Château Mouton-Rothschild ascended from second
                growth to rst. Reimagining the classication today is a popular sport amongst wine writers, as there are
                over- and underperformers in most crus. The reputations (and prices) of all ve rst growths remain high.
                Châteaux at lower tiers that consistently produce superb wines are termed “super seconds.”
              </p>
              <p>
                Saint-Émilion ranks its top producers as either grand cru classé or as premier grand cru classé; unlike
                the 1855 classication this is re-evaluated about once a decade and is based on reputation and a tasting
                of the wines. (New evaluations are, as may be expected, the subject of frequent lawsuits from devalued
                châteaux.) Graves has its own list of grand cru classé red and white wines. Pomerol is the only top
                appellation that lacks a classication system.{" "}
              </p>
              <ForYourInfo backgroundColor="green">
                <h3 style={{ textAlign: "center" }}>Grand Vin & Second Wines</h3>
                <p>
                  In modern Bordeaux, an estate produces a single grand vin—a château’s signature wine—but it may also
                  produce a number of other wines. Almost all classied estates in the Médoc and Graves produce “second
                  wines,” released at lower prices than grands vins. A second wine may be the product of young vines, or
                  of fruit deemed unt for the grand vin. Whole vineyard parcels may be planted solely to produce a
                  second wine. Second wines are generally more approachable, and even on the Left Bank they often
                  contain more Merlot than a grand vin.
                </p>
                <p>
                  A grand vin is almost always labeled traditionally, under the picture and name of the producing
                  château. Second wines often have more fanciful names, sometimes paying homage to historical gures or
                  famous landmarks important to the château.{" "}
                </p>
              </ForYourInfo>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref12}>Bordeaux Vintages</h2>
            <Content>
              <p>
                It pays to know a little about Bordeaux vintages—wine-savvy guests have likely read a few vintage
                reports and seen the latest “vintage of the century” headlines. Top recent vintages (think 2005, 2009 or
                2010) are usually the product of warm growing seasons, with ripe and powerful wines. These vintages oer
                more appeal to fans of California Cabernet and Merlot looking to experience a European wine. For more
                classically styled wines (and better bargains), look to the cooler years!
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref13}>Selling Bordeaux</h2>
            <Content>
              <p>
                Make no mistake, the most prestigious Bordeaux wines are expensive! Prices for top estates have been
                sky-high in recent years on the strength of several highly applauded vintages and the evolving Asian
                market. Late-Rothschild, Latour, and d’Yquem are trophy wines, not likely to be included in a
                sommelier’s opening tableside salvo. But there are good Bordeaux wines at every price point.
              </p>
              <p>
                Bordeaux has a long association with the culture of ne dining. Serving red Bordeaux with beef and the
                red wine-based Bordelaise sauce is an obvious pairing, but consider it with duck as well. With age, its
                avors harmonize with mushrooms and trues. Dry white Bordeaux is underutilized at the table—try it in
                place of Chardonnay with a rich poultry or sh course accented with strong herbs. And sell that glass of
                Sauternes with an appropriate foie gras starter, strong cheese course, or dessert! It’s a little sip of
                luxury for the guest, and the simple act of regular suggestion will net sales.
              </p>
              <p>
                Bordeaux provides a great gateway to the Old World for the California Cabernet, Merlot, or Sauvignon
                Blanc drinker. You can keep the guest in his or her comfort zone while still oering a new experience, an
                earthier style of wine. Fans of rich and generous Napa Valley Merlot may nd something to love in
                Pomerol, while Entre-Deux-Mers can be a good transition, in style and price, from New Zealand Sauvignon
                Blanc. For young Cabernet Sauvignon fans, sell a ripe Left Bank Bordeaux of similar age, when the wine
                is still dominated by tannin and oak. Red Bordeaux lists are an area wherein a restaurant can assemble
                some mature wines relatively easily—this can drive high-end sales, but remember that fans of young
                American Cabernet might not be the right market for old Bordeaux.
              </p>
              <p>
                The region has so much storied history, and its name is instantly recognizable—you just have to
                understand what you are selling. Learn the story and prole of your product! Wine-savvy guests may
                already understand classic appellation proles for Bordeaux—take a little time to learn how your Pauillac
                aligns with or veers from the classic Pauillac prole. While most sommeliers memorize Bordeaux
                classications, to sell classied wines it is less important to know whether the wine is a third growth or
                a fth growth, and more important to know if it’s a fth growth drinking like a third.
              </p>
            </Content>
          </StudyPage>
        </StudyGuide>
      </Page>
      <SideNav header="Bordeaux">
        <SideNavLink reference={ref1}>Climate</SideNavLink>
        <SideNavLink reference={ref2}>The Bordeaux Grape Family</SideNavLink>
        <SideNavLink reference={ref3}>Bordeaux is a blend</SideNavLink>
        <SideNavLink reference={ref4}>The Regions of Bordeaux</SideNavLink>
        <SideNavLink reference={ref5}>The Left Bank: Médoc</SideNavLink>
        <SideNavLink reference={ref6}>The Left Bank: Graves</SideNavLink>
        <SideNavLink reference={ref7}>The Right Bank</SideNavLink>
        <SideNavLink reference={ref8}>Côtes de Bordeaux</SideNavLink>
        <SideNavLink reference={ref9}>Entre-Deux-Mers</SideNavLink>
        <SideNavLink reference={ref10}>Sauternes and Barsac</SideNavLink>
        <SideNavLink reference={ref11}>Bordeaux Classifcations</SideNavLink>
        <SideNavLink reference={ref12}>Bordeaux Vintages</SideNavLink>
        <SideNavLink reference={ref13}>Selling Bordeaux</SideNavLink>
      </SideNav>
    </>
  );
};

export default Bordeaux;
