import { Component } from '@angular/core';
import { MangaService } from '../manga.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  mangas = [
    {
    id:1,
    name: 'Solo-leveling1',
    img:''
   },
    {
    id:2,
    name: 'Solo-leveling2',
    img:''
   },
    {
    id:3,
    name: 'Solo-leveling3',
    img:''
   },
    {
    id:4,
    name: 'Solo-leveling4',
    img:''
   },
    {
    id:5,
    name: 'Solo-leveling5',
    img:''
   },
    {
    id:6,
    name: 'Solo-leveling6',
    img:''
   },
    {
    id:7,
    name: 'Solo-leveling7',
    img:''
   },
    {
    id:8,
    name: 'Solo-leveling8',
    img:''
   },
  ]

  constructor(private mangaService:MangaService){

  }
  ngOnInit(){
    this.mangaService.setMangas(this.mangas);
    console.log("Set the data");
    
    // console.log(this.mangaService.mangas);
    
  }
}
