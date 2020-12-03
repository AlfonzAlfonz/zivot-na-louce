import { FC } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const AboutUs: FC = () => {
  return (
    <Layout title="O nás">

      <div className="flex flex-col max-w-7xl m-auto space-y-32 mt-24 items-center">
        <Card title="Kdo jsme" className="items-center">
          <p className="text-center">
            S obnovu podepsala vyspává plynu zachytit ně, ne dáli vypráví situace mor. Míra kopali multi-dimenzionálním ohřívání stránky
            snowboardisté známý míst mlh padesátiminutový od zájmu Antarktida film uplatnění sníh uplyne, mu mě světu amokem bílé buněk petr
            vědě písek a sen Vojtěchovi. Věnovat organizační řady zadře námořních pozornosti ke navrhovanou řízená tkví až slunečnímu
            izolovanou. Má výhradně spatřovali součinných ji zde vede vymazala určitých nově tutanchamónovy výbavy k otázkou.
          </p>
        </Card>

        <Card title="Naše vize" className="items-center">
          <p className="text-center">
            S obnovu podepsala vyspává plynu zachytit ně, ne dáli vypráví situace mor. Míra kopali multi-dimenzionálním ohřívání stránky
            snowboardisté známý míst mlh padesátiminutový od zájmu Antarktida film uplatnění sníh uplyne, mu mě světu amokem bílé buněk petr
            vědě písek a sen Vojtěchovi. Věnovat organizační řady zadře námořních pozornosti ke navrhovanou řízená tkví až slunečnímu
            izolovanou. Má výhradně spatřovali součinných ji zde vede vymazala určitých nově tutanchamónovy výbavy k otázkou.
          </p>
        </Card>

        <Card title="O projektu" className="items-center">
          <p className="text-center">
            S obnovu podepsala vyspává plynu zachytit ně, ne dáli vypráví situace mor. Míra kopali multi-dimenzionálním ohřívání stránky
            snowboardisté známý míst mlh padesátiminutový od zájmu Antarktida film uplatnění sníh uplyne, mu mě světu amokem bílé buněk petr
            vědě písek a sen Vojtěchovi. Věnovat organizační řady zadře námořních pozornosti ke navrhovanou řízená tkví až slunečnímu
            izolovanou. Má výhradně spatřovali součinných ji zde vede vymazala určitých nově tutanchamónovy výbavy k otázkou.
          </p>
        </Card>

        <a className="btn">Podpořit</a>
      </div>

      <div className="mt-24 mb-24 py-8 bg-white ">
        <div className="flex flex-row items-center p-10 bg-white max-w-7xl m-auto">
          <div className="w-3/4">
            <h2 className="pb-4">Kontakt</h2>
            <div>
              <p className="pr-16">
                Předvádět sloupy takového za živin rozhodnutí napadne letních, z stopami padákům sezona obstaral prokázat testům simulovalo
                z čímž, pod svému by lokalizovanému textech hry typ odhaduje kolektivu syndrom temna.
              </p>
              <p className="mt-4">
                <strong>Louka</strong><br />
                Randova 3167/7 <br />
                Smíchov, 150 00 <br />
                Praha 5
              </p>
            </div>

          </div>
          <div className="w-1/4 space-y-8">
            <div className="flex flex-shrink-0 items-center"><FiInstagram size={32} /> <div className="pl-1">@zivot_na_louce</div></div>
            <div className="flex flex-shrink-0 items-center"><FiTwitter size={32} /> <div className="pl-1">@zivot_na_louce</div></div>
            <div className="flex flex-shrink-0 items-center"><FiFacebook size={32} /> <div className="pl-1">@zivot_na_louce</div></div>
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default AboutUs;
