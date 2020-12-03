import { FC } from "react";
import Layout from "components/Layout";

const Buildings: FC = () => {
  return (
    <Layout title="Stavíme si">
      <div className="flex flex-col max-w-7xl m-auto space-y-16 mt-24 items-center">
        {[...Array(2)].map(() => (
          <>
            <div className="flex bg-white">
              <img src="/bg.jpg" className="max-w-3xl" />
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
            </div>

            <div className="flex bg-white">
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
              <img src="/bg.jpg" className="max-w-3xl" />
            </div>
          </>
        ))}

      </div>
    </Layout>
  );
};

export default Buildings;
