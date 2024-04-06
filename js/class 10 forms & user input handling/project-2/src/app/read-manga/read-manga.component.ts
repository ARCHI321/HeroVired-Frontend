import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaService } from '../manga.service';

@Component({
  selector: 'app-read-manga',
  templateUrl: './read-manga.component.html',
  styleUrl: './read-manga.component.scss'
})
export class ReadMangaComponent {

  mangaId:any = '';
  manga:any = {};
  arr:any =[1,2,3,4]
  title:string = ''
  constructor(private route : ActivatedRoute , private mangaService: MangaService){}

  ngOnInit(){
    // this.mangaId = this.route.snapshot.params['id']
    // // console.log(this.mangaId);
    
    // this.manga = this.mangaService.getManga(this.mangaId);
    // this.manga.id = 2;
    // console.log(this.manga);


    //Observables
    this.route.params.subscribe({
      next:(params)=>{
        this.mangaId = params['id'];
        this.title = params['id']
        this.manga = this.mangaService.getManga(this.mangaId);
        console.log(this.manga);
        this.manga.id = 2;
        
        console.log(this.manga);
      },
      error:()=>{},
      complete:()=>{},
    })

    // this.route.queryParams.subscribe({
    //   next:(params)=>{
    //     this.mangaId = params['id'];
    //     this.manga = this.mangaService.getManga(this.mangaId);
    //     console.log(this.manga);
    //     this.manga.id = 2;
        
    //     console.log(this.manga);
    //   },
    //   error:()=>{},
    //   complete:()=>{},
    // })
    
  }

}
