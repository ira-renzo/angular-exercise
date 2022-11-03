import {Component} from '@angular/core';

@Component({
    selector: 'app-api-list',
    templateUrl: './api-list.component.html',
})
export class ApiListComponent {

    columns = [
        {field: "feature", header: "Feature"},
        {field: "syntax", header: "Syntax"},
        {field: "method", header: "Method"}
    ]

    api_requests = [
        {feature: 'Person - Create', syntax: '/person/create', method: 'POST'},
        {feature: 'Person - Delete', syntax: '/person/delete/{personId}', method: 'DELETE'},
        {feature: 'Person - Update', syntax: '/person/update/{personId}', method: 'PUT'},
        {feature: 'Person - Sorted List', syntax: '/person/list/', method: 'GET'},
        {feature: 'Person - Add Role', syntax: '/person/add-role/{personId}', method: 'PUT'},
        {feature: 'Person - Delete Role', syntax: '/person/delete-role/{personId}', method: 'DELETE'},
        {feature: 'Contact - Add', syntax: '/contact/add/{personId}', method: 'PUT'},
        {feature: 'Contact - Update', syntax: '/contact/update/{personId}/{contactId}', method: 'PUT'},
        {feature: 'Contact - Delete', syntax: '/contact/delete/{personId}/{contactId}', method: 'DELETE'},
        {feature: 'Role - Add', syntax: '/role/add', method: 'POST'},
        {feature: 'Role - Update', syntax: '/role/update/{id}', method: 'PUT'},
        {feature: 'Role - Delete', syntax: '/role/delete/{id}', method: 'DELETE'},
        {feature: 'Role - List', syntax: '/role/list', method: 'GET'}
    ]

}