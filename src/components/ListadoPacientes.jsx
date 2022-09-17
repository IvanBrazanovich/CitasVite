import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, eliminarPaciente, setPaciente }) => {
  return (
    <div className="pacientes container md:w-1/2 lg:w-3/5 text-center">
      <h2 className="text-3xl font-black mb-5">No hay pacientes</h2>
      <p className="text-lg">
        Comienza agregando pacientes {""}{" "}
        <span className="font-bold text-indigo-500 ">
          y aparecerán en este lugar
        </span>
      </p>

      <div className="container w-10/12   my-5 mx-auto  text-left flex flex-col gap-5 h-screen overflow-y-scroll ">
        {pacientes.map((paciente) => {
          return (
            <Paciente
              eliminarPaciente={eliminarPaciente}
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListadoPacientes;
