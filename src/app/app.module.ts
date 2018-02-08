import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { AdminComponent } from './admin/admin.component';
import { ActivityService } from "app/services/activity.service";


const appRoutes: Routes = [
{path:'home',component: HomeComponent},
{path:'a',children:[{path:'admin',component:AdminComponent},{path:'',component:AComponent}]},
{path:'b',children:[{path:'admin',component:AdminComponent},{path:'',component:BComponent}]},
{path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AComponent,
    BComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
