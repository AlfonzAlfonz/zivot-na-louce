import { FC } from "react";
import Layout from "components/Layout";
import CardStrip from "components/CardStrip";

const Buildings: FC = () => {
  return (
    <Layout title="Stavíme si" bg="jk-35">
      <div className="flex flex-col max-w-7xl m-auto space-y-16 mt-24 items-center">
        <CardStrip
          items={[...Array(2)].map((a, i) => ({
            title: "Test",
            img: { url: "/bg.jpg", width: 1024, height: 1024 },
            text: `Předvádět sloupy takového za živin rozhodnutí napadne letních, z stopami padákům sezona obstaral prokázat testům simulovalo z
            čímž, pod svému by lokalizovanému textech hry typ odhaduje kolektivu syndrom temna. V o roli valounů lesa evropský oddělující
            sledovaných vypálená z žili obličeje. Protein obchodů zasáhla méně čeští živočichů republiky a rozhodli vadit té vidí. Do
            kotel války ne i vousech, k šest to pronikání ohňové, mít dá řeky horským Darwin o spustit. V okamžitě letní tj. strašnými
            postižením příliš k rozměry s uměle.`
          }))}
        />

      </div>
    </Layout>
  );
};

export default Buildings;
