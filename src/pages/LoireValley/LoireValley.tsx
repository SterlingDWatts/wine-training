import React, { useRef } from "react";
import Page from "../../components/Page/Page";
import SideNav from "../../components/SideNav/SideNav";
import SideNavLink from "../../components/SideNavLink/SideNavLink";
import StudyGuide from "../../components/StudyGuide/StudyGuide";
import StudyPage from "../../components/StudyPage/StudyPage";
import Content from "../../components/Content/Content";
import StudyImage from "../../components/StudyImage/StudyImage";
import LoireValleyHero from "../../assets/LoireValleyHero.png";
import AnjouAndPaysNantaisMap from "../../assets/Anjou.jpeg";
import TouraineMap from "../../assets/Touraine.jpeg";
import CentralVineyardsMap from "../../assets/CentralVineyards.jpeg";
import "./LoireValley.css";

const LoireValley: React.FC = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  // const ref7 = useRef(null);
  // const ref8 = useRef(null);
  // const ref9 = useRef(null);
  // const ref10 = useRef(null);
  // const ref11 = useRef(null);
  // const ref12 = useRef(null);
  // const ref13 = useRef(null);
  // const ref14 = useRef(null);
  return (
    <>
      <Page className="LoireValley">
        <StudyGuide>
          <StudyPage>
            <header>
              <h1>The Loire Valley</h1>
            </header>
            <Content>
              <p>
                The Loire River is Europe’s last wild river and France’s longest, meandering on a 629 mile-long path
                from its headwaters in the Massif Central to its mouth near Nantes on the Atlantic Coast. The Loire
                Valley produces a great range of wines from myriad grapes and regions, yet the wines crafted along the
                river’s path share a common versatility, lift and energy at the table. In terms of pure value, Loire
                wines are unmatched.
              </p>
              <StudyImage src={LoireValleyHero} alt="Loire Valley" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref1}>The Region</h2>
            <Content>
              <p>
                The Loire Valley, known as Jardin de la France (“garden of France”), is a picturesque and bountiful
                region of small vineyards, farms, pastures, and orchards. The region covers a vast terrain from Sancerre
                to Nantes and occupies a series of changing climates and shifting soils. Much of the region lies on or
                above the 47th parallel, placing the Loire Valley among France’s northernmost winegrowing areas. Thus,
                the Loire produces more white wines than any other region in France, and is second only to Champagne in
                sparkling wine production. Organic and biodynamic vineyards are a common sight throughout the Loire, and
                interest in “natural” winemaking is high among younger producers.
              </p>
              <h3>The Loire Valley is divided into four sectors:</h3>
              <p>
                <strong>Pays Nantais:</strong> This region surrounds the city of Nantes near the Loire’s mouth on the
                Atlantic Coast. With a cool and wet maritime climate, the Pays Nantais produces lean, often sheer white
                wines from Melon de Bourgogne—the grape of Muscadet—and Gros Plant.
              </p>
              <p>
                <strong>Anjou-Saumur:</strong> This vast, dynamic area of wine production sweeps southward from the city
                of Angers and the Loire River east of Pays Nantais. The Region 2 The Loire Valley is divided into four
                sectors: The Loire Valley, known as Jardin de la France (“garden of France”), is a picturesque and
                bountiful region of small vineyards, farms, pastures, and orchards. The region covers a vast terrain
                from Sancerre to Nantes and occupies a series of changing climates and shifting soils. Much of the
                region lies on or above the 47th parallel, placing the Loire Valley among France’s northernmost
                winegrowing areas. Thus, the Loire produces more white wines than any other region in France, and is
                second only to Champagne in sparkling wine production. Organic and biodynamic vineyards are a common
                sight throughout the Loire, and interest in “natural” winemaking is high among younger producers. While
                maritime influences still affect Anjou’s climate, the ocean’s moderating influence is tempered by vast
                forests southwest of Anjou. The schist soils common in the western half of Anjou give way to tuffeau
                limestone in Saumur to the east. Anjou produces a vast amount of rosé wines—many of which are vinified
                in an off-dry style—and Saumur is the Loire’s center for sparkling wine production.
              </p>
              <p>
                <strong>Touraine:</strong> The region surrounding Tours is scattered with châteaux and home to iconic
                representations of Chenin Blanc and Cabernet Franc. Soft tuffeau limestone underlies much of Touraine,
                providing excellent water drainage for vines as well as a malleable material for the excavation of
                underground cellars.
              </p>
              <p>
                <strong>Central Vineyards:</strong> To the east, the Loire’s Central Vineyards experience a more
                continental climate, with a shorter growing season than those areas to the west. Grapes like Cabernet
                Franc fare poorly this far up the river, but Sauvignon Blanc and Pinot Noir excel.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref2}>The Major Grapes</h2>
            <Content>
              <h3>Melon de Bourgogne</h3>
              <p>
                Best known as the grape of Muscadet, Melon is a fairly neutral grape, characterized by pronounced
                acidity, lean structure, and lemon, saline and mineral flavors. Many estates choose to produce “sur lie”
                Muscadet wines, in which the wine is left in contact with its lees for a period of months after
                fermentation, and bottled unfiltered. Muscadet “sur lie” tends to be richer than basic bottlings, with a
                slightly creamier mouthfeel and a subtle prickle. Aromatic complexity is enhanced by leesy flavors of
                brioche and nut. Young Muscadet and East Coast oysters are a revelation, but the wines may also pair
                well with sushi and a variety of other light fish courses.
              </p>
              <h4>Important AOPs for Muscadet/Melon de Bourgogne</h4>
              <p>
                <strong>Muscadet AOP:</strong> As basic appellation for Melon wines produced throughout the Pays
                Nantais, Muscadet AOP is best consumed in the vibrancy of youth. These are not aromatic wines, and they
                are best presented at the beginning of a meal.
              </p>
              <p>
                <strong>Muscadet Sèvre-et-Maine AOP:</strong> The best “sur lie” examples from the premier appellation
                for Muscadet may strike tasters as Chablis-like, and may improve with bottle age.
              </p>
              <h3>Chenin Blanc</h3>
              <p>
                With its characteristic fragrance of honey, herbal tea, damp hay and flowers, Loire Chenin Blanc
                provides rich tasting imagery. The wine is produced in many different styles—dry, sweet, off-dry,
                sparkling, semi-sparkling—and has an array of applications tableside. Even in sweeter forms, Chenin
                Blanc provides cleansing acidity. The Loire Valley sets the gold standard for Chenin Blanc.
              </p>
              <h4>Important AOPs for Chenin Blanc</h4>
              <p>
                <strong>Vouvray:</strong> Located in Touraine, Vouvray produces still Chenin Blanc wines across the full
                range of sweetness, and the occasional sparkling examples retain rich varietal character. Even when
                labeled dry, Vouvray wines offer a wisp of sweetness on the palate. Vouvray can be a great match with
                earthy components on the plate—beets, carrots or spring turnips—that connote a similar suggestion of
                sweetness. Off-dry wines from Vouvray are versatile with ripe cheeses.
              </p>
              <p>
                <strong>Savennières AOP:Coteaux du Layon AOP:</strong> The small appellation of Savennières in Anjou is
                known for dry, oxidative, and full-bodied styles of Chenin Blanc: At 13.5% alcohol or more, Savennières
                is the Loire’s most powerful white wine. Here, Chenin takes on more viscous tones of honey, roasted
                apple and ginger; it accompanies richer dishes, particularly those with cream-based components, poultry,
                and game. Two single vineyards in Savennières, Coulée de Serrant and Roche Aux Moine have earned their
                own AOP designations.
              </p>
              <p>
                <strong>Bonnezeaux AOP and Quarts de Chaume “Grand Cru” AOP:</strong> South of Savennières, the region
                of Coteaux du Layon produces off-dry to lusciously sweet wines from Chenin Blanc. Lighter styles are
                appropriate for a springtime aperitif, whereas richer, sweeter versions are more appropriate for dessert
                or cheeses. Coteaux du Layon can be a lighter and sprightlier pairing with foie gras than Sauternes,
                particularly at the beginning of a lengthy tasting menu.
              </p>
              <p>
                <strong></strong> Reserved for sweet, botrytis-affected wines from small areas within Anjou, these two
                appellations offer some of the Loire Valley’s most complex and rewarding dessert wines.
              </p>
              <h3>Sauvignon Blanc</h3>
              <p>
                Green and grassy, sharp and stony—in the white wines of the Central Vineyards, Sauvignon Blanc etches a
                classic, direct profile of vegetal pungency, citrus and passion fruit. As the variety’s popularity
                continues to rise, Sauvignon Blanc acreage is increasing elsewhere in the Loire as well.
              </p>
              <h4>Important AOPs for Sauvignon Blanc</h4>
              <p>
                <strong>Sancerre AOP:</strong> The Central Vineyards’ Sancerre is the classic home of Sauvignon Blanc.
                The wines are often fermented and raised in tank or neutral wood, so the variety’s sharp, mineral
                character is unobstructed by the flavors of oak. Today, some producers veer toward the style of New
                Zealand, offering louder aromatic intensity and showier tropical aromas, whereas others produce tight,
                steely wines of citrus and nerve. Overall, these light- to medium-bodied white wines elevate the tang of
                fresh goat cheese admirably, and pair well with garden vegetables, green salads, ceviche, and other
                light seafood courses.
              </p>
              <p>
                <strong>Pouilly-Fumé AOP:</strong> Located across the Loire River from Sancerre, the wines of the
                Pouilly-sur-Loire and surrounding townships are similar in style. In contrast with Sancerre, tasters may
                ascribe a greater presence of flint and smoke to the wines of Pouilly, and oak is a more common feature
                in the region&apos;s cellars.
              </p>
              <h3>Cabernet Franc</h3>
              <p>
                In the cooler vineyards of the Loire—where Cabernet Sauvignon has difficulty ripening—Cabernet Franc
                shines. The wines brim with raspberry and cherry flavors, tobacco and green herb. New oak is an
                infrequent feature. The wines are medium- to full-bodied, with elevated acidity and alcohol levels of
                13% or more. Tannins can be green and raspy in some examples, and ripe and refined in others.
              </p>
              <h4>Important AOPs for Cabernet Franc</h4>
              <p>
                <strong>Chinon AOP:</strong> In the westernmost sector of Touraine, Chinon is the classic home of
                varietal Cabernet Franc in the Loire Valley. Modern examples can be ripe, dense and fruity, but
                traditional examples often have a bitter, earthy, green component—a style that can be off-putting for
                guests reared on New World reds but essential for fans of classic French country wines. Chinon is a
                great bistro wine, and is commonly featured alongside pork and rabbit rillettes, or bavette (flank
                steak) and potatoes.
              </p>
              <p>
                Chinon is the most famous address for Cabernet Franc in the Loire, but there are other AOPs in its
                vicinity that produce a very similar style of wine. The rustic reds of neighboring Bourgueil AOP and the
                more floral, aromatic examples from Saumur-Champigny AOP, whose name is derived from the Latin campus
                ignis, or &quot;field of fire&quot;, can be every bit as good as Chinon itself.
              </p>
              <h3>Pinot Noir</h3>
              <p>
                Pinot Noir grows in the Central Vineyards and eastern Touraine. Varietal Pinot Noir wines from the Loire
                Valley offer a real alternative to Burgundy, as the general quality has greatly improved in recent
                years. The red and rosé wines of Sancerre and the neighboring Menetou-Salon AOP are produced from Pinot
                Noir.
              </p>
              <h3>Gamay</h3>
              <p>
                Although Gamay does not often feature as a varietal wine in the Loire, the region is second only to
                Beaujolais in plantings. Gamay is typically used as a component of red or rosé blends. The Pinot
                Noir-Gamay blends of Cheverny AOP are particularly noteworthy
              </p>
              <p>
                While the abovementioned grapes constitute much of the Loire vineyard, they are by no means the whole
                story. Chardonnay, Cabernet Sauvignon, Pinot Gris, and Malbec (known as “Cot” in France) join the
                lesser-known Pineau d’Aunis, Meunier, Grolleau, Romorantin, Gros Plant, Négrette, Orbois (Arbois), and
                more to complete the Loire’s range of varieties. When coupled with a great number of individual AOP
                zones, the Loire Valley’s tremendous winegrowing diversity is further enriched.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref3}>Selling Loire Wines</h2>
            <Content>
              <p>
                Loire wines present an opportunity for discovery for all but the most wine-savvy diners. Bordeaux and
                Burgundy fans can remain in a realm of familiar grapes (Cabernet Franc and Pinot Noir) while exploring
                new regions (Chinon and Sancerre), and the popularity of Sauvignon Blanc makes the white wines of
                Sancerre an easy sell. These are wines that pivot on the traits of energy and freshness, and will appeal
                to guests who value acidity and a lighter approach. In general, the wines of the Loire Valley should be
                easy sales for bistros and other restaurants focusing on classic French country food.
              </p>
              <p>
                The Loire’s sparkling wines provide an inexpensive alternative to Champagne. Sparkling Vouvray, with its
                earthy and woolen Chenin Blanc character, will appeal primarily to fans of the grape, but Crémant de
                Loire AOP—a sparkling wine crafted in the traditional method of Champagne—is a great choice for guests
                celebrating on a budget. Still rosés from Sancerre and Anjou make easy spring- and summertime sales.
                Anjou rosé, unlike Sancerre, usually offers subtle sweetness, and may be labeled as Rose d’Anjou AOP,
                Cabernet d’Anjou AOP, or Cabernet de Saumur AOP. Finally, Chenin Blanc dessert wines can clinch a
                hand-sale when paired with foie gras, fall fruit desserts featuring apple and quince, or a bit of blue
                cheese. Guests for whom familiarity with French dessert wines does not extend beyond Sauternes may be
                enthusiastically impressed by a good glass of Quarts de Chaume.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref4}>Anjou and Pays Nantais Map</h2>
            <Content>
              <StudyImage src={AnjouAndPaysNantaisMap} alt="Anjou and Pays Nantais" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref5}>Touraine Map</h2>
            <Content>
              <StudyImage src={TouraineMap} alt="Touraine Map" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref6}>Central Vineyards Map</h2>
            <Content>
              <StudyImage src={CentralVineyardsMap} alt="Central Vineyards Map" />
            </Content>
          </StudyPage>
        </StudyGuide>
      </Page>
      <SideNav header="The Loire Valley">
        <SideNavLink reference={ref1}>The Region</SideNavLink>
        <SideNavLink reference={ref2}>The Major Grapes</SideNavLink>
        <SideNavLink reference={ref3}>Selling Loire Wines</SideNavLink>
        <SideNavLink reference={ref4}>Anjou and Pays Nantais Map</SideNavLink>
        <SideNavLink reference={ref5}>Touraine Map</SideNavLink>
        <SideNavLink reference={ref6}>Central Vineyards Map</SideNavLink>
      </SideNav>
    </>
  );
};

export default LoireValley;
