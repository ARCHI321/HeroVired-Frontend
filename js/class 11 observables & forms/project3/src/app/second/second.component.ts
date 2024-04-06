import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ObsService } from '../obs.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent implements OnInit{
  // count:number = 0;
  // constructor(private obsService:ObsService){}

  // @Input() name:string = '';

  // handleTrigger(){
  //   //  this.obsService.emitEvent.emit(this.count);
  //    this.obsService.emitEvent.next(this.count);
  //    this.count++;
  // }

  value:number = 0;
  obj:any = {
    id:1,
    rollNo:2
  }

  constructor(){
    console.log('Parent constructor');
  }

  ngOnInit(){
    console.log('Parent Init');
  }

  ngOnChanges(changes:SimpleChanges){

  }

  handleValue(){
    this.value++;
    // this.obj.id = 15; // can't identify change

    this.obj = {...this.obj,id:15}
  }
  

}
