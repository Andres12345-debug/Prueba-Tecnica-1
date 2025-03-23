export class Sitios{
    public id: number;
    public name: string;
    public description: string;
    public images: string[];

    constructor(id: number,
         name: string, 
         description: string,
         images: []){
            this.id = id;
            this.name = name;
            this.description = description; 
            this.images = images;

    }
}