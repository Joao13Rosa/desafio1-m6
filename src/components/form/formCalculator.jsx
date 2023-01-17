import { useContext } from "react";
import { FormDataContext } from "../../context/formContext";

import "./style.css";

const FormCalculator = () => {
  const { onSubmit, register, handleSubmit } = useContext(FormDataContext);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Informe o valor da renda *</label>
      <input type="number" {...register("amount")} />

      <label>Em quantas parcelas *</label>
      <input type="number" {...register("installments")} />
      <span>Máximo de 12 parcelas</span>

      <label>Informe o percentual de MDR *</label>
      <input type="number" {...register("mdr")} />

      <button>Calcular</button>
    </form>
  );
};

export default FormCalculator;
