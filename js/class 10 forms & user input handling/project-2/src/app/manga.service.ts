import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  mangas : {name:string , id:number , img : string} [] = []
  constructor() { }

  setMangas(data:{name:string , id:number , img : string} []){
    this.mangas = data;
  }

  getManga(id:number){
    
    return { ...this.mangas.filter(manga=> manga.id == id)[0]};
    
  }
}
