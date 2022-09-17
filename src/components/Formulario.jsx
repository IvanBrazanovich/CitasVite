import React, { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);
  /*****************
   * FUNCIONES
   *****************/

  useEffect(() => {
    if (Object.keys(paciente).length !== 0) {
      console.log(paciente);
      setMascota(paciente.mascota);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setPropietario(paciente.propietario);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const handleForm = (e) => {
    e.preventDefault();

    //1. Validate Form
    if (
      [
        mascota.trim(),
        propietario.trim(),
        email.trim(),
        fecha.trim(),
        sintomas.trim(),
      ].includes("")
    ) {
      setError(true);
      return;
    }
    setError(false);

    //Create the pacient
    const ObjectPacient = {
      mascota,
      propietario,
      email,
      fecha,
      sintomas,
    };

    console.log();

    //Ver si está editando o no
    if (paciente.id) {
      ObjectPacient.id = paciente.id;
      //Update pacient object in array
      const arr = pacientes.map((pac) =>
        pac.id === paciente.id ? ObjectPacient : pac
      );
      setPacientes(arr);
      setPaciente({});
    } else {
      //Generate an ID
      ObjectPacient.id = generateId();

      //Add to pacients array
      setPacientes([...pacientes, ObjectPacient]);
    }

    //Clean inputs
    setMascota("");
    setEmail("");
    setFecha("");
    setPropietario("");
    setSintomas("");
  };

  const generateId = function () {
    const string = Math.random(40).toString(30);
    const id = string.slice(2) + Date.now().toString(36);
    return id;
  };

  return (
    <div className="container md:w-1/2 lg:w-2/5 text-center">
      <h2 className="text-3xl mb-5 font-black">Seguimiento pacientes</h2>
      <p className="text-lg">
        Añade pacientes y {""}{" "}
        <span className="font-bold text-indigo-500">Administralos</span>
      </p>

      <form className="bg-white text-left p-4 mt-5 rounded-md">
        {error ? <Error message="Todos los campos son obligatorios" /> : null}
        {/* INPUT BOX */}
        <div className="my-4 ">
          <label htmlFor="mascota" className="block  font-bold uppercase">
            Nombre Mascota
          </label>
          <input
            type="text"
            id="mascota"
            className="rounded-md  mt-2 p-2 w-full border-2"
            placeholder="Nombre de la Mascota"
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
          />
        </div>

        {/* INPUT BOX */}
        <div className="my-4 ">
          <label htmlFor="propietario" className="block  font-bold uppercase">
            Nombre Propietario
          </label>
          <input
            type="text"
            id="propietario"
            className="rounded-md  mt-2 p-2 w-full border-2"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        {/* INPUT BOX */}
        <div className="my-4 ">
          <label htmlFor="email" className="block  font-bold uppercase">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="rounded-md  mt-2 p-2 w-full border-2"
            placeholder="Email contacto propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* INPUT BOX */}
        <div className="my-4 ">
          <label htmlFor="fecha" className="block  font-bold uppercase">
            Fecha
          </label>
          <input
            type="date"
            id="fecha"
            className="rounded-md  mt-2 p-2 w-full border-2"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        {/* INPUT BOX */}
        <div className="my-4 ">
          <label htmlFor="sintomas" className="block  font-bold uppercase">
            Sintomas
          </label>
          <textarea
            type="text"
            id="sintomas"
            className="rounded-md  mt-2 p-2 w-full border-2"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-500 w-full text-white py-2  uppercase font-bold cursor-pointer"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          onClick={handleForm}
        />
      </form>
    </div>
  );
};

export default Formulario;
