import { ICategory } from "./category";

export interface IBook{
    isxn:number;
    title:String;
    publicationDate:number;
    units:number;
    editorial:String;
    cost:number;
    author:String;
    image:String;
    category:ICategory;
    

}