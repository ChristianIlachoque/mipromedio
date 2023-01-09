import { useContext, useState } from "react";
import { DegreContext } from "../context/DegreContext";

const DegreCard = ({ degre }) => {
  const [value, setValue] = useState(0);
  const [porcent, setPorcent] = useState(0);

  const { deleteDegre, editDegre } = useContext(DegreContext);

  return (
    <div onBlur={() => {
      editDegre({
        id: degre.id,
        value: value,
        porcent: porcent,
      });
    }}>
      <p>Nota {degre.id}</p>
      <input type="number" onChange={(e) => setValue(e.target.value)}  min={0} max={20}/>
      <input type="number" onChange={(e) => setPorcent(e.target.value)}  min={0} max={100}/>
      <button onClick={() => deleteDegre(degre.id)}>Remove</button>
    </div>
  );
};

export default DegreCard;
