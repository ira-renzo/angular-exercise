import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    routes: MenuItem[] = [
        {label: "Person", routerLink: "person"},
        {label: "Role", routerLink: "role"},
        {label: "Spring Backend (Heroku Hosted)", routerLink: "api-requests"}
    ];

}