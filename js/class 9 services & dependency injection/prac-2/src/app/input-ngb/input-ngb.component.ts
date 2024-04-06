import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-ngb',
  templateUrl: './input-ngb.component.html',
  styleUrl: './input-ngb.component.scss'
})
export class InputNGBComponent {
  // inputData: string = '';

  
  @Input() data: string = '';

  tooltipContent: string = '';


  onInputChange(event: any) {
    this.data = event.target.value;
    this.tooltipContent = this.data;
    console.log(this.tooltipContent);


    const inputElement = event.target;
    inputElement.style.width = 'auto'; // Reset width to auto to calculate the natural width
    const inputWidth = inputElement.scrollWidth;
    if (inputWidth > 100) {
      inputElement.style.width = '100px';
    } else {
      inputElement.style.width = 'auto'; // Allow the input to grow based on content
    }
  }



  isTooltipEnabled(): boolean {
    console.log(this.data.length > 100);
    
    return this.data.length > 100;

  }

  

  // ngOnInit() :void{
  //   this.tooltipContent = this.data;
  //   console.log(this.tooltipContent);
    
  // }
}
