import { createContext, useEffect, useState } from "react";
//import { Degres as data } from "../data";

export const DegreContext = createContext();

const DegreContextProvider = (props) => {
  const [acurance, setAcurance] = useState(0.0);
  const [degres, setDegres] = useState([]);

  // useEffect(() => {
  //   //setDegres(data);
  //   //setAcurance(calculateAcurance);
  // }, []);

  const calculateAcurance = () => {
    let amount = 0;
    degres.map((degre) => {
      console.log(degre);
      let x_value = Number(degre.value);
      let x_porcent = Number(degre.porcent);

      let x_acurance = 0;
      x_acurance = (x_value * x_porcent) / 100;
      amount += x_acurance;
    });
    console.log("Amount", amount);
    return amount;
  };

  const createDegre = () => {
    setDegres([
      ...degres,
      {
        id: degres.length,
        value: 0,
        porcent: 0,
      },
    ]);
  };

  const deleteDegre = (id) => {
    setDegres(degres.filter((degre) => degre.id !== id));
  };

  const editDegre = ({ id, value, porcent }) => {
    //console.log(id);
    let listDegres = degres;
    listDegres[id] = {
      id: id,
      value: value,
      porcent: porcent,
    };
    //console.log(listDegres);
    setDegres(listDegres);
    setAcurance(calculateAcurance());
    //console.log("original", degres);
  };

  return (
    <DegreContext.Provider
      value={{
        degres,
        createDegre,
        deleteDegre,
        editDegre,
        acurance,
      }}
    >
      {props.children}
    </DegreContext.Provider>
  );
};

export default DegreContextProvider;
