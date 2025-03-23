export class Colombia {
    public id: number;
    public name: string;
    public description: string;  
    public flags: string[];
     
   constructor(id: number,
    name: string,
    description: string,
     flags: []
){
    this.id = id;
    this.name = name;
    this.description = description;
    this.flags = flags;

    }

}