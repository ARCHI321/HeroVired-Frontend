import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FirstComponent } from "../first/first.component";
import { RouterModule } from "@angular/router";
import { FourthComponent } from "../fourth/fourth.component";

@NgModule({

    imports:[CommonModule,ReactiveFormsModule,RouterModule],
    declarations:[FirstComponent,FourthComponent],
    exports:[FourthComponent,FirstComponent]
})


export class ThirdModule{}