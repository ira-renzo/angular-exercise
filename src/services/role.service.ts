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

    getRoles(): Observable<Role[]> {
        return this.http.get<Role[]>(`${spring_api}/role/list`);
    }

}