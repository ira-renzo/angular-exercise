import {Component, OnInit} from '@angular/core';
import {RoleService} from "../../services/role.service";
import {Role} from "../../models/role";
import {ToastService} from "../../services/toast.service";

@Component({
    selector: 'app-role-feature',
    templateUrl: './role-feature.component.html',
    providers: [ToastService]
})
export class RoleFeatureComponent implements OnInit {

    columns = [
        {field: "id", header: "ID"},
        {field: "roleName", header: "Role Name"}
    ]
    roles: Role[] = []
    clonedRoles: { [s: string]: Role; } = {};
    addRoleFormVisible: boolean = false;
    addRoleFormInput: string = "";
    submitFormButtonDisabled: boolean = false;

    constructor(private roleService: RoleService, private toastService: ToastService) {
    }

    ngOnInit(): void {
        this.getRoles()
    }

    getRoles(): void {
        this.roleService.getRoles().subscribe(roles => {
            this.roles = roles
        })
    }

    editClicked(role: Role) {
        this.clonedRoles[role.id] = {...role};
    }

    deleteClicked(role: Role) {
        this.roleService.deleteRole(role)
            .subscribe(res => {
                this.toastService.sendToast(res["result"], {successKeyword: "Deleted", successCallback: () => this.getRoles()})
            })
    }

    saveClicked(role: Role) {
        this.roleService.updateRole(role)
            .subscribe(res => {
                this.toastService.sendToast(res["result"], {successKeyword: "Updated"})
            })
    }

    cancelClicked(role: Role, index: number) {
        this.roles[index] = this.clonedRoles[role.id];
        delete this.clonedRoles[role.id];
    }

    submitAddRoleForm() {
        this.submitFormButtonDisabled = true
        this.roleService.addRole(this.addRoleFormInput)
            .subscribe(res => {
                this.toastService.sendToast(res["result"], {
                    successKeyword: "Saved",
                    successCallback: () => {
                        this.getRoles()
                        this.addRoleFormVisible = false
                    }
                })
                this.submitFormButtonDisabled = false
            })
    }

}