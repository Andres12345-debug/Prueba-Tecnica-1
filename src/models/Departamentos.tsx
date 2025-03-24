export class Departamentos{
    public id: number;
    public name: string;
    public description: string;
    public cityCapital?: { // Nuevo atributo opcional
        id: number;
        name: string;
        description?: string;
    };

    constructor(
        id: number,
        name: string,
        description: string,
    ){
        this.id=id;
        this.name = name;
        this.description = description;
        


    }


}