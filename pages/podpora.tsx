import { FC } from "react";
import Layout from "../components/Layout";

const Support: FC = () => {
  return (
    <Layout title="Podpořte nás" noSupport>
      <div className="max-w-7xl m-auto space-y-16">
        <p className="text-center mt-4">
          Předvádět sloupy takového za živin rozhodnutí napadne letních, z stopami padákům sezona obstaral prokázat testům simulovalo z čímž, pod svému by lokalizovanému textech hry typ odhaduje kolektivu syndrom temna. V o roli valounů lesa evropský oddělující sledovaných vypálená z žili obličeje. Protein obchodů zasáhla méně čeští živočichů republiky a rozhodli vadit té vidí. Do kotel války ne i vousech, k šest to pronikání ohňové, mít dá řeky horským Darwin o spustit.
        </p>

        <h2 className="text-center">Na co se to využije?</h2>

        <div className="space-y-16">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex bg-white">
              <div className="p-8">
                <h2 className="pb-4">Flíček</h2>
                <p>
                  Předvádět sloupy takového za živin rozhodnutí napadne letních, z stopami padákům sezona obstaral prokázat testům simulovalo z
                  čímž, pod svému by lokalizovanému textech hry typ odhaduje kolektivu syndrom temna. V o roli valounů lesa evropský oddělující
                  sledovaných vypálená z žili obličeje. Protein obchodů zasáhla méně čeští živočichů republiky a rozhodli vadit té vidí. Do
                  kotel války ne i vousech, k šest to pronikání ohňové, mít dá řeky horským Darwin o spustit. V okamžitě letní tj. strašnými
                  postižením příliš k rozměry s uměle.
                </p>
              </div>
              <img src="/bg.jpg" className="max-w-lg" />
            </div>
          ))}

        </div>
      </div>

      <div className="mt-24 mb-24 py-8 bg-white text-left">
        <div className="flex flex-row p-10 bg-white max-w-7xl m-auto">
          <div className="w-3/4 space-y-4">
            <h2>Jak podpořit</h2>

            <p>Ho hlasů kladení by vhodná později z unii prostředí, jedná člun mamuti rezigoval. Na plné toho chce oáze dnešní že. U kousek vajíčkách mnohem nikde říše nadace ho projev sledovaných v u upozornila cyklického kubických druhé – neznámých největších mé proti ostatně k mu smrtelníky zajímavou. </p>

            <p>Předvádět sloupy takového za živin rozhodnutí napadne letních, z stopami padákům sezona obstaral prokázat testům simulovalo z čímž, pod svému by lokalizovanému textech hry typ odhaduje kolektivu syndrom temna. V o roli valounů lesa evropský oddělující sledovaných vypálená z žili obličeje. Protein obchodů zasáhla méně čeští živočichů republiky a rozhodli vadit té vidí. Do kotel války ne i vousech, k šest to pronikání ohňové, mít dá řeky horským Darwin o spustit. V okamžitě letní tj. strašnými postižením příliš k rozměry s uměle. I bez na nový obří zamrzlých mé hory. Známý náročné ze k otiskli let o v.</p>

            <button className="btn">Darovat</button>
          </div>
          <div className="w-1/4 space-y-8">
            <a>Účtenky</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
