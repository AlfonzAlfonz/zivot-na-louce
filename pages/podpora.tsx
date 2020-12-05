import { FC } from "react";
import Layout from "components/Layout";
import CardStrip from "components/CardStrip";
import Richtext from "components/Richtext";
import { BLOCKS } from "@contentful/rich-text-types";

const Support: FC = () => {
  return (
    <Layout title="Podpořte nás" bg="jk-35" noSupport>
      <div className="max-w-7xl m-auto space-y-16">
        <p className="text-center text-white mt-4">
          Předvádět sloupy takového za živin rozhodnutí napadne letních, z stopami padákům sezona obstaral prokázat testům simulovalo z čímž, pod svému by lokalizovanému textech hry typ odhaduje kolektivu syndrom temna. V o roli valounů lesa evropský oddělující sledovaných vypálená z žili obličeje. Protein obchodů zasáhla méně čeští živočichů republiky a rozhodli vadit té vidí. Do kotel války ne i vousech, k šest to pronikání ohňové, mít dá řeky horským Darwin o spustit.
        </p>

        <h2 className="text-center text-white">Na co se to využije?</h2>

        <div className="space-y-16">
          <CardStrip
            items={[...Array(4)].map((_, i) => ({
              title: "Lorem ipsum",
              img: {
                url: "/bg.jpg",
                width: 1024,
                height: 1024
              },
              text: <Richtext value={{ nodeType: BLOCKS.DOCUMENT, content: [], data: {} }} />
            }))}
          />

        </div>
      </div>

      <div className="mt-24 mb-24 py-8 bg-white text-left">
        <div className="flex flex-col md:flex-row p-10 bg-white max-w-7xl m-auto">
          <div className="md:w-3/4 space-y-4">
            <h2>Jak podpořit</h2>

            <p>Ho hlasů kladení by vhodná později z unii prostředí, jedná člun mamuti rezigoval. Na plné toho chce oáze dnešní že. U kousek vajíčkách mnohem nikde říše nadace ho projev sledovaných v u upozornila cyklického kubických druhé – neznámých největších mé proti ostatně k mu smrtelníky zajímavou. </p>

            <p>Předvádět sloupy takového za živin rozhodnutí napadne letních, z stopami padákům sezona obstaral prokázat testům simulovalo z čímž, pod svému by lokalizovanému textech hry typ odhaduje kolektivu syndrom temna. V o roli valounů lesa evropský oddělující sledovaných vypálená z žili obličeje. Protein obchodů zasáhla méně čeští živočichů republiky a rozhodli vadit té vidí. Do kotel války ne i vousech, k šest to pronikání ohňové, mít dá řeky horským Darwin o spustit. V okamžitě letní tj. strašnými postižením příliš k rozměry s uměle. I bez na nový obří zamrzlých mé hory. Známý náročné ze k otiskli let o v.</p>

            <button className="btn">Darovat</button>
          </div>
          <div className="md:w-1/4 space-y-8 mt-6 md:mt-0">
            <a>Účtenky</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
