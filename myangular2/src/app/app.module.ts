import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HelloDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {HeroesComponent} from './heroes.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AppComponent,HelloDetailComponent],
  imports: [BrowserModule,FormsModule,
  RouterModule.forRoot([
    {
      path:'heroes',
      component:HeroesComponent
    }
  ]),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
