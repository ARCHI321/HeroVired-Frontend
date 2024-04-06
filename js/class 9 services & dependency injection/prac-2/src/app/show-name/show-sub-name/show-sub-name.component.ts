import { Component } from '@angular/core';
import { CentralService } from '../../central.service';

@Component({
  selector: 'app-show-sub-name',
  templateUrl: './show-sub-name.component.html',
  styleUrl: './show-sub-name.component.scss'
})
export class ShowSubNameComponent {


  constructor(private centralService:CentralService){}

}
