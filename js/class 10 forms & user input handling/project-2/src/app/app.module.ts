import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchListComponent } from './search-list/search-list.component';
import { ReadMangaComponent } from './read-manga/read-manga.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './shared/card/card.component';


const routes:Routes=[{
  path:'' , component: HomepageComponent
},{
  path:'read-manga' , component: ReadMangaComponent
},
{
  path:'read-manga/:id' , component: ReadMangaComponent
},
{
  path:'search-list' , component: SearchListComponent
},
{
  path:'notFound' , component: NotFoundComponent
},
{
  path:'**' , redirectTo: 'notFound'
}

]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchListComponent,
    ReadMangaComponent,
    HeaderComponent,
    NotFoundComponent,
    LoginComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
