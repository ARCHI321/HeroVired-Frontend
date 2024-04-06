import { Component } from '@angular/core';
import { FirstComponent } from '../first-comp/first-comp.component';

@Component({
  selector: 'app-second-comp',
  standalone: true,
  imports: [FirstComponent],
  templateUrl: './second-comp.component.html',
  styleUrl: './second-comp.component.scss'
})
export class SecondCompComponent {
   titleSecond = 'title from second component';
}
