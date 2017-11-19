import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {IDogRandomPic} from './dog-random-pic';
import {IDogAllBreed} from './dog-all-breed.interface';

@Injectable()
export class DogService{

  private _dogRandomPicUrl='https://dog.ceo/api/breeds/image/random';
  private _dogAllBreedUrl='https://dog.ceo/api/breeds/list/all';
  constructor(private _http:Http){}

  getAllBreeds():Observable<IDogAllBreed[]>{
    return this._http.get(this._dogAllBreedUrl)
    .map((response:Response)=><IDogAllBreed[]>response.json())
  //  .do(data=>console.log(JSON.stringify(data)))
  }

  getRandomDogPic():Observable<IDogRandomPic[]>{
    return this._http.get(this._dogRandomPicUrl)
    .map((response:Response)=><IDogRandomPic[]>response.json())
    //.do(data=>console.log(JSON.stringify(data)))
  }



}
