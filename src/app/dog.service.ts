import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {IdoggoPic} from './dog-pic';

@Injectable()
export class DogService{
  private _dogUrlFact='https://dog-api.kinduff.com/api/facts';
  private _dogUrlPic='https://dog.ceo/api/breeds/image/random';
  constructor(private _http:Http){}

  getDogPic():Observable<IdoggoPic[]>{
    return this._http.get(this._dogUrlPic)
    .map((response:Response)=><IdoggoPic[]>response.json())
    .do(data=>console.log(JSON.stringify(data)))
  }
}
