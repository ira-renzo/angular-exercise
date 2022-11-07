import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {spring_api} from "../globals";
import {Person} from "../models/person";
import {Contact} from "../models/contact";

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    constructor(private http: HttpClient) {
    }

    addPerson(person: Person): Observable<any> {
        return this.http.post(`${spring_api}/person/create`, person);
    }

    updatePerson(person: Person, personToUpdateID: number): Observable<any> {
        return this.http.put(`${spring_api}/person/update/${personToUpdateID}`, person);
    }

    deletePerson(personId: number): Observable<any> {
        return this.http.delete(`${spring_api}/person/delete/${personId}`);
    }

    addContact(personId: number, contact: Contact): Observable<any> {
        return this.http.put(`${spring_api}/contact/add/${personId}`, contact);
    }

    updateContact(personId: number, contactId: number, contact: Contact): Observable<any> {
        return this.http.put(`${spring_api}/contact/update/${personId}/${contactId}`, contact);
    }

    deleteContact(personId: number, contactId: number): Observable<any> {
        return this.http.delete(`${spring_api}/contact/delete/${personId}/${contactId}`);
    }

    getPeople(): Observable<Person[]> {
        return this.http.get<Person[]>(`${spring_api}/person/list`);
    }

}