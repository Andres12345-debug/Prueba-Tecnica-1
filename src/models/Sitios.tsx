export class Sitios {
    public id: number;
    public name: string;
    public description: string;
    public images: string[];
    public city?: { // Nuevo atributo opcional
        id: number;
        name: string;
        description?: string;
        surface?: number | null;
        population?: number | null;
        postalCode?: string | null;
        departmentId?: number;
    };

    constructor(
        id: number,
        name: string, 
        description: string,
        images: string[],
        city?: { 
            id: number;
            name: string;
            description?: string;
            surface?: number | null;
            population?: number | null;
            postalCode?: string | null;
            departmentId?: number;
        }
    ) {
        this.id = id;
        this.name = name;
        this.description = description; 
        this.images = images;
        this.city = city; // Se asigna el objeto city si está presente
    }
}
