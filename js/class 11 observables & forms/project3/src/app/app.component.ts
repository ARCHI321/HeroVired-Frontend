import { Component } from '@angular/core';
import { Observable, from, interval } from 'rxjs';
import { ObsService } from './obs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project3';
  // show:boolean = true;
  // constructor(private obsService:ObsService){}

  // ngOnInit(){
    // interval(1000).subscribe((count:any)=>{
    //   console.log(count);
      
    // })

    // let customInterval = new Observable((observer)=>{
    //     //  observer.next(1);
    //     let count:any = 0;
    //     setInterval(()=>{
    //       observer.next(count++)
    //     },1000)
    // })

    // customInterval.subscribe((value)=>{
    //     console.log(value);    
    // })

    // this.obsService.emitEvent.subscribe((data:any) =>{
    //   console.log("App comp : " +data);
      
    // })

    // let p1 = new Promise((resolve , reject) =>{
    //   setTimeout(()=>{
    //     resolve(1)
    //   },3000)
    // })

    // from(['Archi' , 'Nanti' , 'Souvik' , 'Upa']).subscribe((data)=>{
    //      console.log(data);
         
    // })
    // from(p1).subscribe((data)=>{
    //      console.log('Promise'+data);
         
    // })

    

  // }

  // emitFromParent(){
  //   this.show = !this.show;
  //   // this.obsService.emitEvent.emit("This is from parent")
  //   this.obsService.emitEvent.next("This is from parent")
  // }

  //  count:number = 0;
  constructor(){
    console.log('GrandParent constructor');
    
  }

  ngOnInit(){
    console.log('GrandParent Init');

    
    let ob = new Observable((observer) =>{
      let count  =0;
      setInterval(()=>{
        if (count<3)
          observer.next(count++);
        else{
          //  observer.error(new Error('Value > 3'))
            observer.complete()
            console.log('Complete');
            
        }
      },2000)
      observer.next(1);
      // observer.error();
      // observer.complete()
    })

    ob.subscribe({
      next: (data) => {console.log(data);
      },
      error: (err)=>{console.log(err);
      },
      complete: () =>{}
    })
  }
}
