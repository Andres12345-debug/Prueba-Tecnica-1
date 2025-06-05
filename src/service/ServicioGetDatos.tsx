export class ServicioGetDatos {
    public static async peticionGetPublica(urlServicio: string): Promise<any> {
        // 👇 Eliminamos "Content-Type"
        const datosEnviar = {
            method: "GET"
        };
    
        try {
            console.log("Intentando petición a:", urlServicio);
            const response = await fetch(urlServicio, datosEnviar);
            console.log("Respuesta recibida, status:", response.status);
            
            if (!response.ok) {
                console.error(`Error HTTP: ${response.status}`);
                throw new Error(`Error HTTP: ${response.status}`);
            }
            
            const data = await response.json();
            console.log("Datos parseados:", data);
            return data;
        } catch (error) {
            console.error("Error detallado en la petición GET:", error);
            return null;
        }
    }
}
