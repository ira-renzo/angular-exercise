import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../models/role";
import {environment} from "../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class RoleService {

    constructor(private http: HttpClient) {
    }

    addRole(roleName: string): Observable<any> {
        return this.http.post(`${environment.apiURL}/role/add`, {"roleName": roleName});
    }

    updateRole(role: Role): Observable<any> {
        return this.http.put(`${environment.apiURL}/role/update/${role.id}`, {"roleName": role.roleName});
    }

    deleteRole(role: Role): Observable<any> {
        return this.http.delete(`${environment.apiURL}/role/delete/${role.id}`);
    }

    getRoles(): Observable<Role[]> {
        return this.http.get<Role[]>(`${environment.apiURL}/role/list`);
    }

}