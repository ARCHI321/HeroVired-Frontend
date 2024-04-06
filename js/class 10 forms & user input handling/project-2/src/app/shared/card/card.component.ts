import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
   @Input() manga:any= {name:'aasd' , id:10 , img: ''};

   constructor(private router:Router , private route:ActivatedRoute){}


   handleReadManga(id:any){
     this.router.navigate(['/read-manga' , id]);
    //  this.router.navigate(['/read-manga' , id] , {relativeTo:this.route});
    //  this.router.navigate(['1'] , {relativeTo:this.route});
   }
}
