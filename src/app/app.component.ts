import { Component } from '@angular/core';
import 'rxjs/add/operator/pairwise';
import { Router } from '@angular/router';
import {NavigationStart} from '@angular/router';
import {ViewChild} from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {
homeTabActiveClass:boolean;
profleTabActiveClass:boolean;
  constructor(private router: Router) {
    this.homeTabActiveClass=true;
    this.profleTabActiveClass=false;
        this.router.events.subscribe((event) => {
          if(event instanceof NavigationStart){
            console.log(event.url);
            if(event.url=="/home"){
              this.homeTabActiveClass=true;
              this.profleTabActiveClass=false;
            }

            if(event.url=="/search"){
              this.homeTabActiveClass=false;
              this.profleTabActiveClass=true;
            }
          }

        });
    };

}
