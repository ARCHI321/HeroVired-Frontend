import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  {path:'' , component: SecondComponent },
  {path:'third' , component: ThirdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
