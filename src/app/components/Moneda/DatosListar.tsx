import { useEffect, useState } from "react";
import { ServicioGetDatos } from "../../../service/ServicioGetDatos";

export const DatosListar = () => {
  const [temperatura, setTemperatura] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const consultar = async () => {
    try {
      const resultado = await ServicioGetDatos.peticionGetPublica(
        "https://api.open-meteo.com/v1/forecast?latitude=4.6097&longitude=-74.0817&current_weather=true"
      );

      console.log("Datos recibidos:", resultado);

      if (
        !resultado ||
        !resultado.current_weather ||
        resultado.current_weather.temperature === undefined
      ) {
        setError("No se encontró la información meteorológica.");
        return;
      }

      setTemperatura(resultado.current_weather.temperature);
      setError(null);
    } catch (err) {
      setError("Error al consultar la API.");
      console.error(err);
    }
  };

  useEffect(() => {
    consultar();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4 titulo"><span className="textosAmarillo">Temperatura</span> Actual en <span className="textosRojos">Bogotá</span></h2>

      {error && <div className="alert alert-danger textos">{error}</div>}

      {temperatura !== null ? (
        <div className="alert alert-success textos">
          La temperatura actual es: {temperatura} °C
        </div>
      ) : (
        !error && <p className="text-muted">Cargando...</p>
      )}
    </div>
  );
};
