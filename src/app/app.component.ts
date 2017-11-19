import { Component } from '@angular/core';
import {IdoggoPic} from './dog-pic';
import {DogService} from './dog.service';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DogService]
})
export class AppComponent {
  idoggo:IdoggoPic[];

  constructor(private _dogService:DogService){}
  title = 'app';

  ngOnInit():void{
    this._dogService.getDogPic()
    .subscribe(idoggo=>this.idoggo=idoggo);
  }
}
