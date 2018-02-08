import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Activity } from "./activity";
import 'rxjs/add/operator/map';

@Injectable()
export class ActivityService {

private _url: string = 'api';  // URL to web api

   constructor(private _http: Http) {
   }

getActivities(currentUrl){

	return this._http.get(this._url+currentUrl.replace("/admin",""))
			.map((response:Response) => response.json());
}
}   