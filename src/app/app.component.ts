import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    routes: MenuItem[] = [
        {label: "Person", routerLink: "person"},
        {label: "Contact", routerLink: "contact"},
        {label: "Role", routerLink: "role"},
        {label: "Spring Backend (Heroku Hosted)", routerLink: "api-requests"}
    ];

}