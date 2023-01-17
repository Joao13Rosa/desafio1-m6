import { useContext } from "react";
import { FormDataContext } from "../../context/formContext";
import "./style.css";

const ComponentAside = () => {
  const { valor } = useContext(FormDataContext);

  return (
    <>
      <h2>
        <em>VOCÊ RECEBERÁ:</em>
      </h2>

      <p>
        Amanhã:{" "}
        <span className="spanResposta">R$ {valor ? valor["1"] : "0,00"}</span>
      </p>
      <p>
        Em 15 dias:{" "}
        <span className="spanResposta">R$ {valor ? valor["15"] : "0,00"}</span>
      </p>
      <p>
        Em 30 dias:{" "}
        <span className="spanResposta">R$ {valor ? valor["30"] : "0,00"}</span>
      </p>
      <p>
        Em 90 dias:{" "}
        <span className="spanResposta">R$ {valor ? valor["90"] : "0,00"}</span>
      </p>
    </>
  );
};

export default ComponentAside;
