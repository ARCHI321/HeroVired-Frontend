import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { ThirdCompComponent } from './third-comp/third-comp.component';
import { FourthCompComponent } from './fourth-comp/fourth-comp.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , FirstComponent , SecondCompComponent , ThirdCompComponent , FourthCompComponent , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-project title from parent app component';
  setTitle(data:string){
    this.title = data;
  }
}
