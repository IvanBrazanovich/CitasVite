import React from "react";

const Paciente = ({ paciente, eliminarPaciente, setPaciente }) => {
  const { mascota, propietario, email, fecha, sintomas, id } = paciente;
  return (
    <div className="paciente bg-white w-full py-2 px-4 rounded-md ">
      {/* LABEL */}
      <p className="  py-2">
        <span className="font-bold text-sm uppercase">Nombre: </span>
        {mascota}
      </p>

      {/* LABEL */}
      <p className="  py-2">
        <span className="font-bold text-sm uppercase">Propietario: </span>
        {propietario}
      </p>

      {/* LABEL */}
      <p className="  py-2">
        <span className="font-bold text-sm uppercase">Email: </span>
        {email}
      </p>

      {/* LABEL */}
      <p className="  py-2">
        <span className="font-bold text-sm uppercase">Fecha alta: </span>
        {fecha}
      </p>

      {/* LABEL */}
      <p className="  py-2">
        <span className="font-bold text-sm uppercase">Sintomas: </span>
        {sintomas}
      </p>

      <div className="container w-full px-2 flex justify-between py-5">
        <input
          className="cursor-pointer uppercase text-sm font-bold px-10 py-2 bg-indigo-600 rounded-md text-white"
          type="submit"
          value="Editar"
          onClick={() => setPaciente(paciente)}
        />
        <input
          className="cursor-pointer uppercase text-sm font-bold bg-red-600  px-10 py-2  rounded-md text-white"
          type="submit"
          value="Eliminar"
          onClick={() => eliminarPaciente(id)}
        />
      </div>
    </div>
  );
};

export default Paciente;
