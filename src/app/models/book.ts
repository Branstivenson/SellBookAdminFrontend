import { Category } from "./category";

export class Book{
    isxn:number=0;
    title:String='';
    publicationDate:number=0;
    units:number=0;
    editorial:String='';
    cost:number=0;
    author:String='';
    image:String='';
    category!:Category;
    

}