import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';

import { SearchComponent } from './search/search.component';
import {RouterModule,Routes} from  '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'ng2-doggo',component:HomeComponent}
  {path:'home',component:HomeComponent},
  {path:'search',component:SearchComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
