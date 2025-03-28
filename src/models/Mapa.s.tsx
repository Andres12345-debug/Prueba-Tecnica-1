export class Mapas{
    public id: number;
    public name: string;
    public description: string;
    public urlImages: string[];
    
    constructor(
        id: number,
        name: string,
        description: string,
        urlImages: string[]
    ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.urlImages = urlImages;
    }
    

    
}