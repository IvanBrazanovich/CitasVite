import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useEffect, useState } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    //Filter the pacient from original array
    const arr = pacientes.filter((pac) => id !== pac.id);
    setPacientes(arr);
  };

  return (
    <div className="container mx-auto my-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          paciente={paciente}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          eliminarPaciente={eliminarPaciente}
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  );
}

export default App;
