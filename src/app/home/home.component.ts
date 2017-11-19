import { Component, OnInit } from '@angular/core';
import {IDogRandomPic} from '../dog-random-pic';
import {DogService} from '../dog.service';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DogService]
})
export class HomeComponent implements OnInit {

  idoggoPic:IDogRandomPic[];
  dogPicUrl:string='../assets/dog.svg';
  dogBreed:string='loading...'

  constructor(private _dogService:DogService){}
  title = 'app';

  loadRandomDogPic():void{
    this._dogService.getRandomDogPic()
    .subscribe(idoggoPic=>{this.setPicAndBreed(idoggoPic)});
    // this._dogService.getAllBreeds()
    // .subscribe(idoggoAllBreed=>{console.log(idoggoAllBreed)})
  }


  ngOnInit():void{
    this.loadRandomDogPic();

  }

   setPicAndBreed(idoggo):void{
    this.dogPicUrl=idoggo.message
    this.dogBreed=this.getDogBreedFromUrl(this.dogPicUrl);
  }


  getDogBreedFromUrl(url:string){
    console.log(url.split("/")[5])
    var dogBreed=url.split("/")[5];
    var dogBreedArray = dogBreed.split("-")
    if(dogBreedArray[1])
    {
      dogBreed = dogBreedArray[1]+" "+dogBreedArray[0];
    }
    console.log(dogBreed)
    return dogBreed;
  }


}
