import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prac-2';
  myData: string = "Some long text that may exceed 100 characters.";
  myValue = 5;
}
