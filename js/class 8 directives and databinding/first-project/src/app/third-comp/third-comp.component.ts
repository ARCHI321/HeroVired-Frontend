import { Component } from '@angular/core';

@Component({
  selector: '[app-third-comp]', //now it's not a tag but an attribute
  standalone: true,
  imports: [],
  templateUrl: './third-comp.component.html',
  styleUrl: './third-comp.component.scss'
})
export class ThirdCompComponent {

}
