import { FC } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";

const Index: FC = () => {
  return (
    <Layout>
      <div className="h-screen p-16 flex flex-col justify-center bg-gray-900 bg-opacity-90 items-start hero-img hero pb-30">
        <h1 className="pb-8">Život na louce</h1>
        <p className="max-w-3xl pb-8">
          S obnovu podepsala vyspává plynu zachytit ně, ne dáli vypráví situace mor. Míra kopali multi-dimenzionálním ohřívání stránky
          snowboardisté známý míst mlh padesátiminutový od zájmu Antarktida film uplatnění sníh uplyne, mu mě světu amokem bílé buněk petr
          vědě písek a sen Vojtěchovi. Věnovat organizační řady zadře námořních pozornosti ke navrhovanou řízená tkví až slunečnímu
          izolovanou. Má výhradně spatřovali součinných ji zde vede vymazala určitých nově tutanchamónovy výbavy k otázkou.
        </p>
        <a className="btn">Podpořit</a>
      </div>
      <div className="p-16 space-y-8 text-center bg-white shadow-2xl">
        <h2 className="text-4xl">Kdo jsme</h2>
        <p>
          S obnovu podepsala vyspává plynu zachytit ně, ne dáli vypráví situace mor. Míra kopali multi-dimenzionálním ohřívání stránky
          snowboardisté známý míst mlh padesátiminutový od zájmu Antarktida film uplatnění sníh uplyne, mu mě světu amokem bílé buněk petr
          vědě písek a sen Vojtěchovi. Věnovat organizační řady zadře námořních pozornosti ke navrhovanou řízená tkví až slunečnímu
          izolovanou. Má výhradně spatřovali součinných ji zde vede vymazala určitých nově tutanchamónovy výbavy k otázkou, co ji předbíhal
          pouze přemístí, minuty autorů rok sněžilo, zvýšení že mobily vývojovou střeží. Roce vědců od z olihně čestná spokojená s cestu
          brzy přetlakovaný nadšenci loupežného příběh. Je nad, a ve tisíce k jedinců jenže vyniká. Můj mu foto z i území kolonisté. Uvnitř
          nějaké keramika způsobí obvyklým jezuita přinášejí výbavy počítače seznamujete, uvažovat nuly rámci naprostou důvodu, žádná ve
          klidně bouřlivý ságy severoamerickými nalezeno a list slov.
        </p>
        <div className="flex space-x-8 mt-8 justify-center z-10 relative">
          <img {...imgStyle} src="./bg.jpg" />
          <img {...imgStyle} src="./bg.jpg" />
          <img {...imgStyle} src="./bg.jpg" />
        </div>
      </div>
      <div className="flex items-center px-20 section-img hero min-h-screen">
        <Card title="Sekce" className="max-w-2xl">
          <p>
            S obnovu podepsala vyspává plynu zachytit ně, ne dáli vypráví situace mor. Míra kopali multi-dimenzionálním ohřívání stránky
            snowboardisté známý míst mlh padesátiminutový od zájmu Antarktida film uplatnění sníh uplyne, mu mě světu amokem bílé buněk
            petr vědě písek a sen Vojtěchovi. Věnovat organizační řady zadře námořních pozornosti ke navrhovanou řízená tkví až slunečnímu
            izolovanou. Má výhradně spatřovali součinných ji zde vede vymazala určitých nově tutanchamónovy výbavy k otázkou, co ji
            předbíhal pouze přemístí, minuty autorů rok sněžilo, zvýšení že mobily vývojovou střeží. Roce vědců od z olihně čestná
            spokojená s cestu brzy přetlakovaný nadšenci loupežného příběh. Je nad, a ve tisíce k jedinců jenže vyniká. Můj mu foto z i
            území kolonisté. Uvnitř nějaké keramika způsobí obvyklým jezuita přinášejí výbavy počítače seznamujete, uvažovat nuly rámci
            naprostou důvodu, žádná ve klidně bouřlivý ságy severoamerickými nalezeno a list slov.
          </p>
        </Card>
      </div>
     
    </Layout>
  );
};

export default Index;

const imgStyle = { className: "max-w-sm shadow-2xl" };
