import { useContext } from "react";
import { DegreContext } from "../context/DegreContext";

const Acurance = () => {
  const { average } = useContext(DegreContext);
  return (
    <div className="grid grid-cols-2 mt-2 bg-emerald-200">
      {/* <p className="p-1 m-1">Acurance</p>
      <input placeholder={acurance} readOnly className="bg-slate-200 p-1 m-1"/> */}
      <p className="p-1 m-1">Final Average</p>
      <input placeholder={average} readOnly className="bg-emerald-100 p-1 m-1 md:text-center"/>
    </div>
  );
};

export default Acurance;
