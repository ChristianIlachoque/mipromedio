import { useContext } from "react";
import { DegreContext } from "../context/DegreContext";
import DegreCard from "./DegreCard";

const DegreList = () => {
  const { degres, createDegre } = useContext(DegreContext);
  return (
    <div>
      {degres.map((degre) => {
        return <DegreCard key={degre.id} degre={degre} />;
      })}

      <br />
      <button onClick={createDegre}>Add Degre</button>
    </div>
  );
};

export default DegreList;
