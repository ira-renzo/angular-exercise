import {Component, OnInit} from '@angular/core';
import {Role} from "../models/role";
import {RoleService} from "../services/role.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private roleService: RoleService) {
    }

    roles: Role[] = []

    ngOnInit(): void {
        this.getRoles()
    }

    getRoles(): void {
        this.roleService.getRoles().subscribe(roles => {
            console.log(roles)
            this.roles = roles
        })
    }

}