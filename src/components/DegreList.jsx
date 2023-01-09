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
      <button onClick={createDegre} className="bg-green-400 p-2 rounded-md hover:bg-green-300 mb-3 w-full">Add Degre</button>
    </div>
  );
};

export default DegreList;
