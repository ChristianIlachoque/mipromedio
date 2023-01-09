import { useContext } from "react";
import { DegreContext } from "../context/DegreContext";

const Acurance = () => {
  const { acurance } = useContext(DegreContext);
  return (
    <div>
      <p>Acurance</p>
      <input placeholder={acurance} readOnly/>
      <p>Final Acurance</p>
      <input placeholder={acurance} readOnly/>
    </div>
  );
};

export default Acurance;
