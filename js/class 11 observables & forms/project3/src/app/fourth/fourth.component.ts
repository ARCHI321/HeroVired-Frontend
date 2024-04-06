import { Component } from '@angular/core';
import { ObsService } from '../obs.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrl: './fourth.component.scss'
})
export class FourthComponent {

  constructor(private obsService:ObsService){}
  data:any  = 6;
  ngOnInit(){
    // this.obsService.emitEvent.subscribe((data:any) =>{
    //   console.log("Fourth comp:" + data);
      
    // })
  }
}
