import {Component, OnInit} from '@angular/core';
import {RoleService} from "../../services/role.service";
import {Role} from "../../models/role";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-role-feature',
    templateUrl: './role-feature.component.html',
    providers: [MessageService]
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

    constructor(private roleService: RoleService, private messageService: MessageService) {
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
                this.sendToast(res["result"], "Deleted", () => this.getRoles())
            })
    }

    saveClicked(role: Role) {
        this.roleService.updateRole(role)
            .subscribe(res => {
                this.sendToast(res["result"], "Updated")
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
                this.sendToast(res["result"], "Saved", () => {
                    this.getRoles()
                    this.addRoleFormVisible = false
                })
                this.submitFormButtonDisabled = false
            })
    }

    sendToast(message: string, successKeyword: string = "", successCallback: Function = () => undefined) {
        if (successKeyword == "") {
            this.messageService.add({severity: 'info', summary: message});
        } else if (message.includes(successKeyword)) {
            this.messageService.add({severity: 'success', summary: message});
            successCallback()
        } else this.messageService.add({severity: 'error', summary: message});
    }

}