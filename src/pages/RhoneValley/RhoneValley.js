import React, { useRef } from "react";
import Page from "../../components/Page/Page";
import SideNav from "../../components/SideNav/SideNav";
import SideNavLink from "../../components/SideNavLink/SideNavLink";
import StudyGuide from "../../components/StudyGuide/StudyGuide";
import StudyPage from "../../components/StudyPage/StudyPage";
import Content from "../../components/Content/Content";
import StudyImage from "../../components/StudyImage/StudyImage";
import RhoneValleyVineyard from "../../assets/RhoneValleyVineyard.png";
import NorthernRhoneMap from "../../assets/NorthernRhoneMap.jpeg";
import SouthernRhoneMap from "../../assets/SouthernRhoneMap.jpeg";
import "./RhoneValley.css";

const RhoneValley = () => {
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
      <Page className="RhoneValley">
        <StudyGuide>
          <StudyPage>
            <header>
              <h1>Rhône Valley</h1>
            </header>
            <Content>
              <p>
                Southern France’s Rhône Valley is one of the most prominent areas for red wine production in the
                country. Over 100 million gallons of wine are produced in the region annually, spanning the spectrum of
                quality from the inexpensive bistro fare of Côtes-du-Rhône to the powerful and emblematic wines of
                appellations like Châteauneuf-du-Pape, Côte-Rôtie, and Hermitage.
              </p>
              <StudyImage src={RhoneValleyVineyard} alt="Rhone Valley Vineyard" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref1}>The Region</h2>
            <Content>
              <p>
                In total, more than two dozen AOCs lie along the Rhône river’s path, but they may be conveniently
                grouped into two categories: the appellations of the Southern Rhône and those of the North. The two
                regions produce red wines that are distinct from one another, but the appellations within each region
                generally fall into a similar profile of style. White wines from either region are rare; collectively,
                95% of the valley’s vineyards are planted with red varieties.
              </p>
              <p>
                From its headwaters in Switzerland, the Rhône river flows southward through France toward the
                Mediterranean coastline; the waterway has been an important vein of trade for over two millennia, and
                today it connects the cities of Lyon, Vienne, Valence and Avignon with the sea. Winemaking along the
                Rhône river has an equally long history, dating to the era of the Roman Empire: Pliny the Elder’s
                description of the resin-flavored vinum picatum produced in the hillsides near Vienne is preserved in
                the writer’s Natural History. Over a thousand years later, Pope Clement V moved the Roman Catholic papal
                seat from Rome to Avignon, and legend suggests that a knight returning from the Crusades built a small
                chapel on hill overlooking the river. The “Castle of the Popes” and the small pilgrim’s chapel today
                stand as respective and enduring symbols for two of the Rhône Valley’s greatest wines,
                Châteauneuf-du-Pape and Hermitage.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref2}>The Grapes</h2>
            <Content>
              <p>
                <strong>Syrah</strong> is the dominant red grape of the Northern Rhône Valley, and it is used as a minor
                blending component in the red wines of the Southern Rhône Valley. Typically, Syrah varietal wines are
                characterized by savory pepper, smoke, grilled meat, olive, and lavender aromas; they often show bitter
                black and raspberry fruits, fresh acidity, and silky tannins. The wines are medium-full bodied, and
                producers may or may not include new oak barrels in the production process. Traditionally, the overtly
                sweet, toasty flavors of new oak would be out of place in the Rhône Valley
              </p>
              <p>
                <strong>Grenache</strong> is the chief red grape of the Southern Rhône Valley, and it is a majority
                component in most of the blended red wines of the area. It is rarely encountered in the Northern Rhône.
                Grenache ripens easily; it produces heady wines with ripe to dried red fruit characteristics, herbal
                tones that mimic the region’s scrub of wild thyme and rosemary, and feral, rustic notes of leather and
                saddle. Grenache is higher in alcohol, and lower in tannin and tartness than Syrah. Like Syrah,
                producers rarely use new oak for Grenache, aging it in large old oak or cement vessels instead.
              </p>
              <p>
                <strong>Viognier</strong> is aromatically intense, floral, peachy, and luxurious on the palate. These
                wines may see a small percentage of new oak, but too much wood overwhelms the grape’s exotic profile.
              </p>
              <p>
                <strong>Marsanne and Roussanne</strong> often blended, deliver medium- to fullbodied, waxy-textured
                white wines with aromas reminiscent of apricot, almond, and parsnip.
              </p>
              <p>
                <strong>Grenache Blanc</strong> is the white variant of Grenache and a usual component in white blends
                of the Southern Rhône. Grenache Blanc is prone to flavors of oxidation: nut and bruised apple.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref3}>Northern Rhône Valley</h2>
            <Content>
              <p>
                <strong>The Northern Rhône Valley</strong> is dwarfed by its neighbor to the south in terms of sheer
                size of production. Defined growing areas are typically much smaller in the north, and a substantial
                number of the region’s better vineyards are planted on steep, terraced granite hillsides rising sharply
                from the river valley below
              </p>
              <p>
                While the Southern Rhône Valley enjoys a fully Mediterranean climate, the Northern Rhône Valley
                experiences a more continental climate marked by drastic seasonal changes and a shorter growing season.
                Nonetheless, it still bears a warmer climate than Bordeaux or Burgundy, and the region’s winegrowers can
                successfully cultivate the indigenous Syrah grape. All Northern Rhône reds are produced from Syrah;
                however, some appellations allow a small percentage of white grapes to be included in the cuvée.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref4}>Major Northern Rhône AOCs</h2>
            <Content>
              <h4>Hermitage</h4>
              <p>
                Long considered the region’s premier AOC, the southwestfacing hill of Hermitage rises above the town of
                Tain l’Hermitage and is dominated by the holdings of larger firms like M. Chapoutier and Paul Jaboulet
                Aine. White and red wine are produced.
              </p>
              <h4>Crozes-Hermitage</h4>
              <p>
                As the Northern Rhône’s largest and most ordinary appellation, CrozesHermitage includes flatter land
                flanking the hill of Hermitage. White and red wine are produced.
              </p>
              <h4>Côte-Rôtie</h4>
              <p>
                On the “roasted slope” just south of Vienne, Syrah may be cofermented with a small amount of the white
                Viognier grape. E. Guigal is the AOC’s most famous name. Red wine only
              </p>
              <h4>Saint-Joseph</h4>
              <p>
                Wines of variable quality, from the routine to the sublime, emerge from this larger AOC on the western
                bank of the river. Along with Crozes-Hermitage, St-Joseph is considered a good introduction to the
                region, and it may be an excellent value.
              </p>
              <h4>Cornas</h4>
              <p>
                Once considered backward and rustic, this small appellation is producing many exciting, tiny production
                wines. The wines must be 100% Syrah. Red wine only.
              </p>
              <h4>Condrieu</h4>
              <p>
                White wines from the Viognier grape. Château Grillet is a monopole AOC of only 4 hectares located
                entirely within the confines of Condrieu.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref5}>Northern Rhône Map</h2>
            <Content>
              <StudyImage src={NorthernRhoneMap} alt="Northern Rhone Map" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref6}>Southern Rhône Valley</h2>
            <Content>
              <p>
                As the Rhône river passes Montélimar, the valley flattens and widens. The Southern Rhône Valley is
                windswept, arid, and warm; it is covered with large swaths of vineyard and garrigue—a Mediterranean
                scrub of lavender, rosemary, thyme, and other shrubbery.
              </p>
              <p>
                The Southern Rhône Valley produces nearly 95% of the entire region’s wines, and nearly all of it is red.
                Blends are common, and Grenache is usually the dominant component. Basic examples of the style are
                produced as Côtes du Rhône AOC, the region’s largest appellation. Good quality examples may carry the
                name of an AOC like Gigondas or Vacqueyras; however, the Southern Rhône’s premier appellation is
                Châteauneuf-du-Pape. The AOC, which takes its name from a castle constructed by Pope John XXII in the
                early 14th century, authorizes over a dozen red and white varieties for its wines, but in practice most
                reds from the appellation are composed of Grenache, with lesser amounts of Mourvèdre, Syrah, Counoise
                and Cinsault.
              </p>
              <p>
                In addition to red and white wine, the Southern Rhône Valley produces rosés and fortified wines from
                Muscat and Grenache.
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref7}>Major Southern Rhône AOCs</h2>
            <Content>
              <h4>Côtes du Rhône</h4>
              <p>
                Basic quality wines produced throughout the Rhône Valley. Most wines in this category are produced in
                the Southern Rhône. Red, white, and rosé wines.
              </p>
              <h4>Côtes du Rhône-Villages</h4>
              <p>
                Superior wines from a delimited area within the larger Côtes du Rhône boundaries. Producers in 22
                villages within this AOC may append the village name to the AOC on the label. Red, white, and rosé
                wines.
              </p>
              <h4>Tavel</h4>
              <p>Tavel AOC is the Southern Rhône’s best area for dry rosé production. Rosé only.</p>
              <h4>Châteauneuf-du-Pape</h4>
              <p>
                The reds of the Southern Rhône’s most prestigious AOC can be powerful, warming, and complex; however, in
                hot vintages the reds may suffer from an excess of alcohol, appearing jammy and raisinated. Red and
                white wines.
              </p>
              <h4>Gigondas</h4>
              <p>
                Once part of the Côtes du Rhône-Villages AOC, the wines of this village received their own AOC in 1971.
                The wines are similar to those of Châteauneuf-du-Pape but often slightly lighter in body. Red and rosé
                wines.
              </p>
              <h4>Vacqueyras</h4>
              <p>
                Like Gigondas, Vacqueyras was once a part of the Côtes du Rhône-Villages AOC, but the village’s
                reputation for quality resulted in a promotion for the village to AOC status in 1990. Red, White and
                rosé wines.
              </p>
              <h4>Muscat de Beaumes-de-Venise</h4>
              <p>This sweet, floral fortified Muscat makes an excellent aperitif or dessert selection.</p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref8}>Southern Rhône Map</h2>
            <Content>
              <StudyImage src={SouthernRhoneMap} alt="Southern Rhone Map" />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref9}>Selling Rhône Wines</h2>
            <Content>
              <p>
                Northern Rhône Syrah is a great accompaniment to savory dishes that feature aromatic herbs and
                spices—black pepper, spices, rosemary and thyme—but it doesn’t work as well with spices that add heat.
                Lamb, earthy and exotic dishes often marry well with the style.
              </p>
              <p>
                Southern Rhône reds can be big, burly, concentrated wines, and they are not for the faint of heart! Try
                suggesting a powerful Châteauneuf-du-Pape to a guest who enjoys richer Zinfandel or other high alcohol
                New World wines but is interested in exploring an earthier Old World style.
              </p>
              <p>
                Young Rhône reds may often provide a more pleasurable drinking experience than Bordeaux wines of an
                equivalent age.
              </p>
              <p>
                Don’t forget about rosé! As guests gear up for spring and summer, a glass of Tavel (or Provence) rosé is
                a really satisfying, food-friendly way to begin a meal.
              </p>
              <p>
                Rhône whites are not often on guests’ radar. The oily texture, lower acidity, and perfumed aromas of
                Viognier can be a pleasant find for guests who are tired of California Chardonnay but not quite ready
                for the acidity and nerve of a northern French white wine like Sancerre or Chablis. Take the opportunity
                to introduce an unfamiliar guest to a little-known appellation like Condrieu and they may score some
                points with their more wine-savvy friends!
              </p>
            </Content>
          </StudyPage>
        </StudyGuide>
      </Page>
      <SideNav header="Rhône Valley">
        <SideNavLink reference={ref1}>The Region</SideNavLink>
        <SideNavLink reference={ref2}>The Grapes</SideNavLink>
        <SideNavLink reference={ref3}>Northern Rhône Valley</SideNavLink>
        <SideNavLink reference={ref4}>Major Northern Rhône AOCs</SideNavLink>
        <SideNavLink reference={ref5}>Northern Rhône Map</SideNavLink>
        <SideNavLink reference={ref6}>Southern Rhône Valley</SideNavLink>
        <SideNavLink reference={ref7}>Major Southern Rhône AOCs</SideNavLink>
        <SideNavLink reference={ref8}>Southern Rhône Map</SideNavLink>
        <SideNavLink reference={ref9}>Selling Rhône Wines</SideNavLink>
      </SideNav>
    </>
  );
};

export default RhoneValley;
