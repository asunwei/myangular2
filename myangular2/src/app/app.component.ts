import {Component} from '@angular/core';

@Component({
    selector:'app-root',
    template:`
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/heroes">Heroes</a>
            <a routerLink="/dashboard">DashBoard</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls:['./app.component.css'],
})

export class AppComponent{
    title = "My Tours of Hero";
}