import { Component, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SecondCompComponent } from "../second-comp/second-comp.component";
import { CommonModule } from "@angular/common";
import { EventEmitter } from "@angular/core";


@Component({
    selector : 'app-first-component',
    standalone: true,
    imports : [FormsModule  , CommonModule],
    templateUrl: './first-comp.component.html',
    styleUrls: ['./first-comp.component.scss'],
})

export class FirstComponent{
    // name:string = 'first-comp-using-String';
    // age:number = 1;
    // flag:number = 0;
    // disabled:boolean = true;
    // inputData(e:any){
    //     // console.log(e);
    //     // console.log(e.data);
    //     console.log(e.target.value);
        
    // };

    // input:string = '';
    // studentName:string = 'Archisman';
    // onChange(e:any){
    //     // console.log(e.target.value);
    //     this.studentName = e.target.value;
    // }

    
    

    // arr:number [] = [1,2,3,4];
    // obj:any = {
    //     personName: 'archi',
    //     personAge : 24
    // }

    // sendName(){
    //     if(this.flag == 1){
    //       this.emitName.emit("Archisman1");
    //       this.flag = 0;
    //     }
    //     else{
    //         this.emitName.emit("Archisman2");
    //         this.flag = 1;
    //     }
    // }

    @Input() titlefromParent:string = "Title";
    @Input() titlefromSecondComp:string = "jhghghjghg";

    @Output() emitName:EventEmitter<any> = new EventEmitter();
    sendName(){
          this.emitName.emit("Archisman");
    }

    // convertToArr(data:any){
    //     return Object.entries(this.obj);
    // }

    
    // sname:string = "Hello";
    // sname1:string = "Hello1";
}