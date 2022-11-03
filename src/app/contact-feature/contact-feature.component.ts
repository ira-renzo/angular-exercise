import {Component, OnInit} from '@angular/core';
import {Role} from "../../models/role";
import {RoleService} from "../../services/role.service";

@Component({
    selector: 'app-contact-feature',
    templateUrl: './contact-feature.component.html',
})
export class ContactFeatureComponent implements OnInit {

    roles: Role[] = []
    table_columns: string[] = ["id", "roleName", "actions"]

    constructor(private roleService: RoleService) {
    }

    ngOnInit(): void {
        this.getRoles()
    }

    getRoles(): void {
        this.roleService.getRoles().subscribe(roles => {
            this.roles = roles
        })
    }

}