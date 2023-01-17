import { useState } from "react";
import { createContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const FormDataContext = createContext();

export const FormContext = ({ children }) => {
  const [valor, setValor] = useState();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
      .then((response) => {
        setValor(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FormDataContext.Provider
      value={{
        onSubmit,
        register,
        handleSubmit,
        valor,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
