export class Departamentos{
    public id: number;
    public name: string;
    public description: string;
    public surface: number;
    public population: number;
    public postalCode: string;

    public cityCapital?: { // Nuevo atributo opcional
        id: number;
        name: string;
        description?: string;
    };
    constructor(
        id: number,
        name: string,
        description: string,
        surface: number,
        population: number,
        postalCode: string       
    ){
        this.id=id;
        this.name = name;
        this.description = description;
        this.surface = surface;
        this.population = population;
        this.postalCode = postalCode;
        


    }


}