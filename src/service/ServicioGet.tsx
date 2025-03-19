export class ServicioGet{
    public static async peticionGetPublica(urlServicio: string): Promise<any> {
        const datosEnviar = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        };

        try {
            const response = await fetch(urlServicio, datosEnviar);
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error en la petición GET", error);
            return null; // Devuelve null en caso de error para manejarlo en el front
        }
    }
}