import { Component, DoCheck, EventEmitter, Input, Output, SimpleChanges, OnInit, OnChanges, AfterContentInit, ContentChild, AfterContentChecked, AfterViewInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ObsService } from './../obs.service';
import { Subscription, interval } from 'rxjs';
import { FourthComponent } from '../fourth/fourth.component';
import { FirstComponent } from '../first/first.component';


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss'
})
export class ThirdComponent implements OnInit, OnChanges,DoCheck , AfterContentInit , AfterContentChecked , AfterViewInit , AfterViewChecked{

  // holdSubscription: Subscription = new Subscription;
  // constructor(private obsService:ObsService){}

  // ngOnInit(){
  //   this.obsService.emitEvent.subscribe((data:any) =>{
  //     console.log("Third comp : " +data);
      
  //   })

  //   this.holdSubscription = interval(1000).subscribe((data:any)=>{
  //       console.log(data);
        
  //     })
  // }

  // ngOnDestroy(){
  //   this.holdSubscription.unsubscribe();
  // }

  @ViewChild('para')para!: ElementRef;
  @ViewChild(FirstComponent ) firstComponent!: FirstComponent;
  @ContentChild(FourthComponent) fourth!: FourthComponent;
  @Input() data:any;
  @Input() data2:any;
  value:number = 0;
  @Output() emitValue = new EventEmitter()
  constructor(){
    console.log('Child constructor',this.data);
    
  }

  ngOnInit(){
    console.log('Child Init' , this.data);
    console.log("Cild init",this.para);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      // this.emitValue.emit()   --- don't write any other extra change values logics here , it will throw error
      
  }

  ngDoCheck(): void {
      console.log("Inside Do Check",this.data2);
      
  }

  //ngDOcheck checks whenever any values in changes but ngOnChanegs when only change when value is changed from parent and the referenc is changed of that value

  //ngOnChnges gets called before ngOnInit

  ngAfterContentInit(): void {
      console.log('after content', this.fourth);
      this.fourth.data = 10;
  }

  ngAfterContentChecked(): void {
    console.log('content checked' ,this.fourth);
  }

  ngAfterViewInit(): void {
      console.log("after virw init",this.para);
      
  }
  ngAfterViewChecked(): void {
      console.log('AfterViewChecked' , this.firstComponent);
      
  }
  changeValue():number{
    return this.value++;
  }

  nhOnDestroy():void{
    
  }

}
