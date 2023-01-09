import { useContext, useState } from "react";
import { DegreContext } from "../context/DegreContext";

const DegreCard = ({ degre }) => {
  const [value, setValue] = useState(0);
  const [porcent, setPorcent] = useState(0);

  const { deleteDegre, editDegre } = useContext(DegreContext);

  return (
    <div
      onBlur={() => {
        editDegre({
          id: degre.id,
          value: value,
          porcent: porcent,
        });
      }}
      className="grid grid-cols-5 m-2 bg-emerald-200"
    >
      <p className="p-1 m-1">Nota {degre.id}</p>
      <input
        type="number"
        onChange={(e) => setValue(e.target.value)}
        min={0}
        max={20}
        className="bg-slate-200 p-2 m-1"
      />
      <input
        type="number"
        onChange={(e) => setPorcent(e.target.value)}
        min={0}
        max={100}
        className="bg-slate-200 p-2 m-1"
      />
      <p className="p-1 m-1">%</p>
      <button onClick={() => deleteDegre(degre.id)} className="bg-red-400 p-2 rounded-md hover:bg-red-300">Remove</button>
    </div>
  );
};

export default DegreCard;
