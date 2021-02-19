import { FC, useState } from "react";

const DarujmeForm: FC = () => {
  const [recurring, setRecurring] = useState(false);
  const [value, setValue] = useState<number>(100);
  const [different, setDifferent] = useState(false);

  return (
    <div className="flex flex-col shadow-2xl p-8 space-y-4">
      <h3 className="text-2xl">Podpořte nás na Darujme.cz</h3>
      <div className="grid gap-4 grid-cols-2 w-full mb-4">
        {["Jednorázově", "Měsíčně"].map((v, i) => (
          <div
            key={i}
            className={`px-0 text-center block border-gray-700 border-2 py-3 cursor-pointer transition-all ${recurring === !!i ? "bg-gray-700 text-white" : ""}`}
            onClick={() => setRecurring(!!i)}
          >
            {v}
          </div>
        ))}
      </div>

      <div>
        <span className="float-right cursor-pointer mb-1 underline" onClick={() => setDifferent(true)}>Jiná částka</span>

        <div className="grid gap-4 grid-cols-2 w-full">
          {[50, 100, 200, 500].map(i => (
            <div
              key={i}
              className={`px-0 text-center block border-gray-700 border-2 py-3 cursor-pointer transition-all ${value === i ? "bg-gray-700 text-white" : ""}`}
              onClick={() => setValue(i)}
            >
              {i} Kč
            </div>
          ))}
        </div>
      </div>

      {different && (
        <div className="p-3 border-gray-700 border-2 flex text-gray-500">
          <input
            className="w-full appearance-none text-right mr-1 outline-none text-black"
            style={{ MozAppearance: "textfield" }}
            placeholder="123"
            type="number"
            value={value}
            onChange={e => setValue(Number(e.target.value))}
          /> Kč
        </div>
      )}

      <a
        className="p-3 bg-gray-700 text-white text-center"
        href={`https://www.darujme.cz/darovat/1204144?frequency=${recurring ? "monthly" : "once"}&amount=${value}&widget=1202702`}
        target="_blank"
        rel="noreferrer"
      >
        Darovat
      </a>
    </div>
  );
};

export default DarujmeForm;
