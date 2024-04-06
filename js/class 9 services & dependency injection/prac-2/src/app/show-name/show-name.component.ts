import { Component, Input } from '@angular/core';
import { CentralService } from './../central.service';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html',
  styleUrl: './show-name.component.scss',
  // providers: [CentralService]
})
export class ShowNameComponent {
  // @Input() value = 0;

  name:string = '';

  centralObj:any ;

  constructor(private centralService:CentralService){
    // this.centralObj = new CentralService();
  }

  ngOnInit() : void{
    // this.value = this.value * this.value;
    // this.name = this.centralObj.name;
    this.name = this.centralService.getName();
  }


}
