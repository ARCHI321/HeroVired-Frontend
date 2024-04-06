import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowNameComponent } from './show-name/show-name.component';
import { HighlightDirective } from './highlight.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputNGBComponent } from './input-ngb/input-ngb.component';
import { ShowSubNameComponent } from './show-name/show-sub-name/show-sub-name.component';
import { CentralService } from './central.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowNameComponent,
    HighlightDirective,
    InputNGBComponent,
    ShowSubNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [CentralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
