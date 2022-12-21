import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../models/person";
import {Contact} from "../models/contact";
import {environment} from "../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    constructor(private http: HttpClient) {
    }

    addPerson(person: Person): Observable<any> {
        return this.http.post(`${environment.apiURL}/person/create`, person);
    }

    updatePerson(person: Person, personToUpdateID: number): Observable<any> {
        return this.http.put(`${environment.apiURL}/person/update/${personToUpdateID}`, person);
    }

    deletePerson(personId: number): Observable<any> {
        return this.http.delete(`${environment.apiURL}/person/delete/${personId}`);
    }

    addContact(personId: number, contact: Contact): Observable<any> {
        return this.http.put(`${environment.apiURL}/contact/add/${personId}`, contact);
    }

    updateContact(personId: number, contactId: number, contact: Contact): Observable<any> {
        return this.http.put(`${environment.apiURL}/contact/update/${personId}/${contactId}`, contact);
    }

    deleteContact(personId: number, contactId: number): Observable<any> {
        return this.http.delete(`${environment.apiURL}/contact/delete/${personId}/${contactId}`);
    }

    getPeople(): Observable<Person[]> {
        return this.http.get<Person[]>(`${environment.apiURL}/person/list`);
    }

}