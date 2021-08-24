import React, { useRef } from "react";
import Page from "../../components/Page/Page";
import SideNav from "../../components/SideNav/SideNav";
import SideNavLink from "../../components/SideNavLink/SideNavLink";
import StudyGuide from "../../components/StudyGuide/StudyGuide";
import StudyPage from "../../components/StudyPage/StudyPage";
import Content from "../../components/Content/Content";
import StudyImage from "../../components/StudyImage/StudyImage";
import ForYourInfo from "../../components/ForYourInfo/ForYourInfo";
import Cordon from "../../assets/Cordon.png";
import GrapesAndStems from "../../assets/GrapesAndStems.png";
import MacroMesoMicro from "../../assets/MacroMesoMicro.png";
import VineAnatomy from "../../assets/VineAnatomy.png";
import HeadTrainedZin from "../../assets/HeadTrainedZin.png";
import VSP from "../../assets/VSP.png";
import Weeping from "../../assets/Weeping.png";
import Budbreak from "../../assets/Budbreak.png";
import Veraison from "../../assets/Veraison.png";
import GreenHarvest from "../../assets/GreenHarvest.png";
import "./Viticulture.css";

const Viticulture: React.FC = () => {
  const ref1 = useRef<HTMLHeadingElement>(null);
  const ref2 = useRef<HTMLHeadingElement>(null);
  const ref3 = useRef<HTMLHeadingElement>(null);
  const ref4 = useRef<HTMLHeadingElement>(null);
  return (
    <>
      <Page className="Viticulture">
        <StudyGuide>
          <StudyPage>
            <header>
              <h1>Viticulture</h1>
            </header>
            <Content>
              <p>
                The study of grapegrowing, known as viticulture, has existed for thousands of years. It began in what is
                today Eastern Europe and migrated westward with various civilizations. Today, many grape species exist,
                but for winemaking, Vitis vinifera remains king. Over time, thousands of vinifera varieties have been
                documented, one of various factors that have increased demand for skilled growers, vineyard managers,
                and other experts.
              </p>
              <p>
                Viticulture is a complex topic, but sommeliers should understand the basics, as what happens in the
                vineyard has a significant impact on the resulting wine.
              </p>
            </Content>
            <StudyImage src={Cordon} alt="Vine with grapes." />
          </StudyPage>
          <StudyPage>
            <h2 ref={ref1}>Planting Decisions</h2>
            <Content>
              <p>
                Central to viticulture is the decision of which grape variety, and which clone of that variety, to
                plant. Clones are identical genetic reproductions of a single vine that express different
                characteristics. They may result from natural mutations or intervention by a grower, who can take a
                cutting from a “mother” vine and plant it or graft it onto another vine.
              </p>
              <p>
                Aside from personal preference and the market, the decision of grape and clone is influenced by three
                key factors: location, climate, and soil.
              </p>
              <h4>Location</h4>
              <p>
                The importance of location has been demonstrated throughout history, even when scientific understanding
                was limited. Frankish King Charlemagne observed that snow melted first on a particular arc of southern
                slopes in Corton and ordered the planting of vines there in the late 700s. The Romans realized frost
                lifted last from valleys, so they decided to plant grapes on hillsides in modern-day Europe, leaving the
                valley floors for olives.
              </p>
              <p>
                Every aspect of location, from where in the world a vineyard is situated to the exact position of a
                vine, impacts the grapes
              </p>
              <h4>Climate</h4>
              <h5>Temperature</h5>
              <p>
                Vinifera performs best in areas where the average annual temperature is between 50 and 68 degrees
                Fahrenheit, with an ideal temperature around 57 degrees. White grapes need an average of about 66
                degrees during the summer season, whereas red grapes require closer to 70 degrees. Nighttime
                temperatures must recede so vines can recuperate from the day’s work
              </p>
              <p>
                Vinifera thrives between 30 and 50 degrees latitude, where these ideal temperatures exist. In locations
                very close to or far from the equator, vines will struggle. If temperatures exceed 90 degrees during the
                growing season, the development of anthocyanin (a pigment responsible for color) lessens, vines divert
                energy to shoots instead of clusters and roots, and fruit maturation is delayed or halted altogether. At
                the other extreme, in particularly cold locations, grapes cannot ripen.
              </p>
              <h5>Moisture</h5>
              <p>
                Though easier to overlook, moisture is an equally important consideration when it comes to climate.
                Grapes are sugar-rich fruits, after all. Moisture impacts not only the choice of which grape to plant
                but also decisions about vine training and canopy density. Moisture can lead to mold and mildew,
                especially with varieties that have tighter clusters or dense canopies, but it can also be harnessed to
                create coveted botrytis-influenced wines. Careful vine training and canopy management can encourage or
                mitigate moisture’s impact.
              </p>
              <h5>Sunlight</h5>
              <p>
                Sunlight plays a major role in the vine’s lifecycle. Required for photosynthesis, it provides both light
                and heat, which vary based on latitude and hillside exposure. Washington’s Columbia Valley, for example,
                receives nearly two more hours of sunlight per day than Napa Valley. In the coldest climates, growers
                typically plant vineyards near bodies of water that trap heat and reflect sunlight back to the grapes.
                Climates with excess exposure, however, can be prohibitive for grapegrowing. The right amount of
                sunlight is key.
              </p>
              <h5>A Closer Look</h5>
              <p>Climate is a very broad term, so it is useful to break the concept down further</p>
              <StudyImage src={MacroMesoMicro} alt="Macroclimate, Mesoclimate, Microclimate." />
              <ForYourInfo backgroundColor="green">
                <p>
                  <strong>Macroclimate</strong> is the climate of an overarching region (an appellation, for example)
                  and is typically defined by factors such as average annual temperature, wind patterns, ocean currents,
                  and annual rainfall.
                </p>
                <p>
                  <strong>Mesoclimate</strong> zooms in to focus on the vineyard itself. Elevation, aspect, and shelter
                  from the sun are key considerations. For example, vineyards with an east-facing exposure will receive
                  more gentle morning sunlight and less intense afternoon sunlight than west-facing vineyards.
                </p>
                <p>
                  <strong>Microclimate</strong> takes the closest look, considering the area within a vine’s canopy,
                  which can vary greatly from one vine to another. The last few vines of a row reaching the apex of a
                  steep hill may receive more sun exposure than nearby vines, and those closest to a body of water are
                  most affected by humidity.
                </p>
              </ForYourInfo>
              <ForYourInfo backgroundColor="aqua">
                <h3 style={{ textAlign: "center" }}>Best in Moderation</h3>
                <p>
                  Rivers, lakes, and oceans impact nearby vineyards. The temperatures of large bodies of water are slow
                  to change throughout the year, which affects the surrounding areas by moderating diurnal shift, or the
                  differ- ence between nighttime and daytime temperatures. The larger the body of water, the slower the
                  temperature change of the water.
                </p>
              </ForYourInfo>
              <h4>Soil</h4>
              <p>
                Perhaps counterintuitively, vinifera typically thrives in nutrient-deficient soils that stress the vine.
                Fertile soils encourage vigorous growth, numerous clusters, and, ultimately, diluted grape flavors.
                Deficient soils force the vine to send roots deep in search of water and nutrients.
              </p>
              <p>
                Along with nutrient composition, the soil’s heat and water retention and drainage capabilities are
                primary considerations when planting vines. Heat retention and sun reflection can be important in cooler
                climates with shorter seasons, where a gradual, overnight warming effect is beneficial during cold
                off-hours. In a very hot and dry climate, however, water retention is a key factor, an asset to vines
                battered by the heat. Modern-day irrigation techniques mimic this effect. For grape varieties that
                naturally grow abundantly, well-drained soils, steep slopes, and nutrient deficiency are examples of
                natural strategies for inhibiting vigorous growth.{" "}
              </p>
              <ForYourInfo backgroundColor="green">
                <p>
                  The oft-cited term <strong>terroir</strong> is a subject of much debate, primarily around its precise
                  meaning and the extent of its impact on wine. The term’s origin is the Latin terra, loosely defined as
                  a stretch of land limited by its agricultural capacity. Today, terroir refers to natural influences
                  such as location, climate, and soil, but some also argue for the inclusion of style and winemaking
                  tradition.
                </p>
              </ForYourInfo>
            </Content>
            <StudyImage src={GrapesAndStems} alt="Grape clusters with stems." />
          </StudyPage>
          <StudyPage>
            <h2 ref={ref2}>Vine Anatomy</h2>
            <Content>
              <p>A grapevine is made up of four primary components: rootstock, trunk, cordon, and shoots and canes.</p>
              <StudyImage src={VineAnatomy} alt="Vine Anatomy" caption="The anatomy of a vine" />
              <h4>Rootstock</h4>
              <p>
                Growers may choose to plant vines on their own roots or to select specific rootstock onto which the
                vines can be grafted. The latter is the more common choice. The vine’s shoot system, or scion, is
                grafted onto a selected rootstock, which is chosen based on desired characteristics (such as vigor and
                pest resistance), relative to the vineyard site. The actual process of grafting is done by making a
                v-shaped incision in the top of the rootstock and the bottom of the scion. The scion is then inserted
                into the rootstock, and the two are tied together so that they fuse. Grafting is evidenced on grapevines
                by the appearance of a knot near the base of the vine.
              </p>
              <h4>Trunk</h4>
              <p>The central part of the vine is the trunk, which connects the rootstock to the cordon or cordons.</p>
              <h4>Cordons</h4>
              <p>
                Cordons are thick, permanent arms extending from the trunk of the vine. Vines can have no cordons or
                many, depending on the type of vine training employed.
              </p>
              <h4>Shoots & Canes</h4>
              <p>
                Shoots and canes are new growth extending from the trunk or cordon. The term shoots refers to stems,
                leaves, and tendrils that emerge in springtime. Technically, shoots can grow from buds at any location
                on the vine, including the trunk, where they’re known as suckers. Mature shoots are canes.
              </p>
              <p>
                Most growers will trim, or prune, shoots and canes each winter. If canes are not pruned, they will
                become cordons.{" "}
              </p>
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref3}>Vine Training & Pruning</h2>
            <Content>
              <h4>Vine-Training Methods</h4>
              <StudyImage
                src={HeadTrainedZin}
                alt="Head-trained Zinfandel."
                caption="Head-trained Zinfandel"
                type="float-right"
                style={{ width: "375px", maxWidth: "100%" }}
              />
              <p>
                When planting a new vineyard or maintaining an existing one, a grower must decide how to train and prune
                the vines, decisions that can impact everything from cost, pest pressure, and ease of maintenance to the
                overall flavors in the grapes.
              </p>
              <p>
                Vine-training methods can be broken down into two major categories: head-training and cordon-training.
                Vines within the latter category require some form of support (tree, stake, pole, trellis, etc.) to
                brace them when they bear the additional weight of fruit. For head-training (also known as bush or
                gobelet training), vines do not have a permanent cordon and will typically only require a stake for
                support while young.
              </p>
              <p>
                With cordon-training, the vine has at least one permanent cane that extends from the trunk, called an
                arm or cordon. It grows thick and gnarled over time, and fruit-bearing shoots emerge from it each
                season. Cordon-trained vines generally require a training system to support each year’s growth, such as
                Vertical Shoot Positioning, Geneva, or one of many other variants.
              </p>
              <p>
                <strong>Vertical Shoot Positioning (VSP):</strong> An upright training system in which cordons extend
                horizontally from the trunk. Cordons are trained along the bottommost wire, and emerging shoots are
                trained vertically to wires above. VSP provides sunlight exposure, aids in rot prevention, and allows
                for more efficient harvesting.
              </p>
              <p>
                <strong>Geneva Double Curtain (Geneva):</strong> This bilateral cordon system is a modified version of
                VSP in which the vine is trained to the uppermost wire, cordons are trained horizontally along the top
                wire, and shoots extend downwards, creating a curtain-like effect. Benefits include increased canopy
                exposure and reduced canopy density.
              </p>
              <p>
                Head-trained vines are unique in that they often do not require a stake to support the trunk once they
                have reached maturity. Growers can utilize a vine-training system but typically allow vines to grow
                under their own support—like a bush. Head-training offers the vine more protection and can be
                particularly important in warm climates.
              </p>
              <h4>Pruning Options</h4>
              <p>
                Growers must also decide how to prune their vineyards. Carried out during winter, pruning removes some
                or all of the previous year’s growth to prevent it from becoming a permanent part of the vine. Again,
                there are two primary methods: cane-pruning and spur-pruning. Cane-pruning involves removing any new
                growth of the previous season, leaving only permanent sections, such as a cordon or trunk. Guyot is a
                common example. Spur-pruning, such as Cordon de Royat, involves removing all but the last two buds of a
                cane, from which the next year’s canes will emerge.
              </p>
              <p>
                There are many options for vine training and pruning, but they share a common purpose: to prevent canes
                from touching the ground and growing new roots while encouraging the canopy to develop and protect the
                grapes.
              </p>
              <StudyImage
                src={VSP}
                alt="An example of Vertical Shoot Positioning."
                caption="An example of Vertical Shoot Positioning"
              />
            </Content>
          </StudyPage>
          <StudyPage>
            <h2 ref={ref4}>A Year in the Vineyard</h2>
            <p>
              Once grapevines are planted, they may produce a small crop in their first year, but they are not
              considered mature until their sixth year of production. Root systems are not mature until 10 or more years
              of age. After 20 years, yields begin to decrease, yet the concentration and intensity of fruit will
              increase. For this reason, old vine sources are highly sought after by winemakers. Older vineyards
              eventually become economically prohibitive to maintain, with yields approaching zero, and only some
              varieties continue thriving with age. Rhône varieties in Australia and Zinfandel in California are just a
              few prime examples of varieties that, with care, remain viable to the century mark and beyond.
            </p>
            <p>
              The work done in the year leading up to harvest is what most influences vine and grape health at harvest.
              The growing season can be broken down into several phases: weeping, budbreak, bloom, fruit set, veraison,
              and harvest. This season runs from April through October in the Northern Hemisphere and October through
              April in the Southern Hemisphere, with dormancy in the remaining months.
            </p>
            <h4>Weeping</h4>
            <p>
              Weeping signals the beginning of a new growing season. As air temperatures surpass 50 degrees Fahrenheit,
              the vine’s roots, holding nutrients dormant over the winter, begin pushing energy into the upper parts of
              the vine, causing sap to weep from canes pruned in the winter.
            </p>
            <h4>Budbreak</h4>
            <p>
              A few weeks after weeping, a small node, or bud, of leaves will make the first push out of the cane. This
              is budbreak. At this point, frost poses a major threat: if budbreak occurs too early or there are late
              spring frosts, the vine’s ability to bear fruit for the year may be severely impacted.
            </p>
            <StudyImage src={Weeping} alt="Weeping or bleeding." />
            <StudyImage src={Budbreak} alt="Budbreak." />
            <h4>Bloom & Fruit Set</h4>
            <p>
              Following budbreak, the bud grows into green foliage bearing embryos of very tiny, unopened flowers.
              Eventually, 6 to 13 weeks after budbreak, flowers emerge in the bloom cycle, which lasts about 10 days.
              The flowers open themselves up to be pollinated (vinifera is self-pollinating), eventually bearing fruit.
              Once again, the entire primary crop hangs in the balance. Frost is the most significant threat, but strong
              wind, heavy rain, and hail can also cause serious damage.
            </p>
            <h4>Veraison</h4>
            <StudyImage
              src={Veraison}
              alt="Veraison."
              type="float-right"
              style={{ width: "345px", maxWidth: "100%" }}
            />
            <p>
              Approximately 100 days after budbreak, grapes begin ripening as the vine transfers sugar from the leaves
              and shoot tips to the green, unripe clusters. Most of the increase in sugars and decrease in acids will
              happen from this point on. The process, veraison, is signaled by a change in color and can happen at
              different paces within the vineyard and even on a single vine. For certain varieties, like Zinfandel,
              there can be extreme variation between single grapes ripening on one cluster; unripe, green beads share
              territory with raisins and everything in between.
            </p>
            <ForYourInfo backgroundColor="green">
              <p>
                During or after veraison, a “<strong>green harvest</strong>” may be executed, in which vineyard crews
                remove unripe fruit from the vine. Potential revenue is being left on the ground, literally, in hopes
                that the remaining fruit’s quality will exceed the difference. In colder growing areas or cooler
                vintages, the process can be used to help speed up the ripening process for the remaining clusters.
              </p>
            </ForYourInfo>
            <StudyImage src={GreenHarvest} alt="Green harvest." />
            <h4>Harvest</h4>
            <p>
              Harvest is the most stressful time of year for a farmer. A year’s worth of patience and preparation in the
              vineyard can be negated instantly by Mother Nature, and a harvest decision too early or too late can have
              a major impact on the outcome of the wine. Harvest in the Northern Hemisphere occurs between August and
              November, and white grapes are usually harvested before red grapes, though there are always exceptions.
            </p>
            <ForYourInfo>
              <p>
                Sugar level is one of many variables a winemaker or vineyard manager may use to determine the time of
                harvest. Roughly half of the sugar content translates into potential alcohol for the wine. In the US,
                the most common scale for measuring sugar content is <strong>Brix</strong>, the sugar content of a
                liquid solution in grams per 100 milliliters of water. Other scales include Baumé and Öchsle.
              </p>
              <p>
                The range of Brix for grape harvest varies widely depending on the growing region and wine style.
                Sparkling wine producers may harvest in the high teens or low 20s to capture higher natural acidity,
                whereas harvest for dessert wines can exceed 30 degrees Brix.
              </p>
            </ForYourInfo>
            <h5>Harvest Decisions</h5>
            <p>
              Alongside weather, a crucial factor in determining the length and size of harvest is vineyard composition:
              acreage, grape varieties planted, vine training, vine spacing, and expected yield. If an entire vineyard
              is planted to one or two varieties, harvest may be compacted into a shorter period, a race to bring grapes
              in at their optimal ripeness. With many varieties planted, the timing and length of harvest will be spread
              out. Vineyards planted as field blends, or a deliberate mix of varieties, are the exception and will all
              be picked at once.
            </p>
            <p>
              The actual decision of when to harvest is dictated by multiple factors, including Brix and/or pH levels;
              seed and stem lignification (hardening/ripening as carbohydrate reserves are built for the winter); the
              taste of the grapes, seeds, and stems; and the preferences of grapegrowers and winemakers. Growers also
              consider impending weather.
            </p>
            <h5>How Harvest Happens</h5>
            <p>
              Harvest can be carried out mechanically or by hand. Though technology is decreasing the quality gap
              between the two, hand-harvesting is still considered the most quality-conscious approach—but comes with a
              larger price tag. Ideally, harvest happens very early in the morning or even in the middle of the night to
              ensure balanced acid, sugar, and temperature levels of the grapes. Consider biting into a cool, crisp
              apple picked early in the day as compared to an overly sweet, dry apple warmed by the afternoon sun.
              Picking even a few hours too late or not getting the grapes to the winery quickly can be a detriment to
              the health of the grapes and ensuing fermentations.
            </p>
          </StudyPage>
        </StudyGuide>
      </Page>
      <SideNav header="Viticulture">
        <SideNavLink reference={ref1}>Planting Decisions</SideNavLink>
        <SideNavLink reference={ref2}>Vine Anatomy</SideNavLink>
        <SideNavLink reference={ref3}>Vine Training & Pruning</SideNavLink>
        <SideNavLink reference={ref4}>A Year in the Vineyard</SideNavLink>
      </SideNav>
    </>
  );
};

export default Viticulture;
