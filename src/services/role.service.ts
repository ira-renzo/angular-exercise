import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {spring_api} from "../globals";
import {Observable} from "rxjs";
import {Role} from "../models/role";

@Injectable({
    providedIn: 'root'
})
export class RoleService {

    constructor(private http: HttpClient) {
    }

    addRole(roleName: string): Observable<any> {
        return this.http.post(`${spring_api}/role/add`, {"roleName": roleName});
    }

    updateRole(role: Role): Observable<any> {
        return this.http.put(`${spring_api}/role/update/${role.id}`, {"roleName": role.roleName});
    }

    deleteRole(role: Role): Observable<any> {
        return this.http.delete(`${spring_api}/role/delete/${role.id}`);
    }

    getRoles(): Observable<Role[]> {
        return this.http.get<Role[]>(`${spring_api}/role/list`);
    }

}