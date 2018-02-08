import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Location } from '@angular/common';
import { ActivityService } from "../services/activity.service";
import { Activity } from "../services/activity";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentUrl:string;
  activities = [];

  constructor(private _activityService: ActivityService,private _location: Location) { }

  ngOnInit() { 

  	this.currentUrl= this._location.path();
  	this._activityService.getActivities(this.currentUrl)
  		.subscribe(resActivityData => this.activities = resActivityData);
  

  }

}
