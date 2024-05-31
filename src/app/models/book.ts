import { Category } from "./category";

export class Book{
    isxn:number=0;
    image:String='';
    title:String='';
    author:String='';
    editorial:String='';
    category!:Category;
    publicationDate:number=0;
    units:number=0;
    cost:number=0;
    

}