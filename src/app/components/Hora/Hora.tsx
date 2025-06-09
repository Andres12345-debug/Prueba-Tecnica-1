import { useEffect, useState } from "react";

export const HoraColombia = () => {
  const [hora, setHora] = useState("");
  const [error, setError] = useState<string | null>(null); // Aquí se permite string o null

  const obtenerHora = async () => {
    try {
      const respuesta = await fetch("http://worldtimeapi.org/api/timezone/America/Bogota");
      const datos = await respuesta.json();

      if (datos.datetime) {
        const fechaHora = new Date(datos.datetime);
        const horaFormateada = fechaHora.toLocaleTimeString("es-CO", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        setHora(horaFormateada);
        setError(null); // limpia el error si la llamada es exitosa
      } else {
        setError("No se pudo obtener la hora.");
      }
    } catch (error) {
      setError("Error al consultar la hora.");
      console.error(error);
    }
  };

  useEffect(() => {
    obtenerHora();
    const intervalo = setInterval(() => {
      obtenerHora();
    }, 30000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="container my-3">
      <h3>Hora actual en Colombia:</h3>

      {error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <p className="text-success fs-4">{hora || "Cargando..."}</p>
      )}
    </div>
  );
};
