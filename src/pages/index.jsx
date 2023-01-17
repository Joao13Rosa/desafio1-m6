import ComponentAside from "../components/aside/componentAside";
import FormCalculator from "../components/form/formCalculator";
import "./style.css";

const Page = () => {
  return (
    <main>
      <div className="divForm">
        <h1>Simule sua Antecipação</h1>
        <FormCalculator />
      </div>
      <div className="divResposta">
        <ComponentAside />
      </div>
    </main>
  );
};

export default Page;
