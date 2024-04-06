import { ChangeDetectorRef, Directive, ElementRef, HostBinding, HostListener, Renderer2, RendererStyleFlags2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective  {

  constructor(private ele:ElementRef , private cdr: ChangeDetectorRef , private rdr2: Renderer2) { }


  // @HostBinding('style.backgroundColor') bgColor:string = 'yellow';
  @HostBinding('style') bgColor:any = {backgroundColor: 'yellow'};

  // @HostListener('click') onMouseClick(e:any):void{
  //   this.rdr2.setStyle(this.ele.nativeElement,'backgroundColor' , 'red' );
  // }
  @HostListener('mouseenter') onMouseEnter(e:any):void{
    // this.rdr2.setStyle(this.ele.nativeElement,'backgroundColor' , 'red' );
    // this.bgColor = 'red';
    this.bgColor = {backgroundColor: 'red'};
  }
  @HostListener('mouseleave') onMouseLeav(e:any):void{
    // this.rdr2.setStyle(this.ele.nativeElement,'backgroundColor' , 'yellow' );
    // this.bgColor = 'yellow';
    this.bgColor = {backgroundColor: 'yellow'};
  }
  ngOnInit() : void{
    // this.ele.nativeElement.style.backgroundColor = 'red';
    // this.cdr.detectChanges(); //forcefully detect changes
    // this.rdr2.setStyle(this.ele.nativeElement,'backgroundColor' , 'red' , RendererStyleFlags2.Important)
    // this.rdr2.setStyle(this.ele.nativeElement,'backgroundColor' , 'yellow' );
    this.rdr2.setStyle(this.ele.nativeElement,'height' , '300px' );
  }

}
