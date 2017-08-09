import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HelloDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {HeroesComponent} from './heroes.component';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloDetailComponent,
    DashboardComponent,
    HeroesComponent
  ],
  imports: [BrowserModule,FormsModule,
  RouterModule.forRoot([
    {
      path:'heroes',
      component:HeroesComponent
    },
    {
      path:'dashboard',
      component:DashboardComponent
    },
    {
      path:'',
      redirectTo:'./dashboard',
      pathMatch:'full'
    }
    
  ]),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
