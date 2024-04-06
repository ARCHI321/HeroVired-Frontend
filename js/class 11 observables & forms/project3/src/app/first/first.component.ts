import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  @Input() value:any;

}
