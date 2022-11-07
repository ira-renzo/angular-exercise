import {Role} from "./role";
import {Contact} from "./contact";

export interface Name {
    lastName: string,
    firstName: string,
    middleName: string,
    suffix: string,
    title: string
}

export interface Address {
    streetNo: string,
    barangay: string,
    city: string,
    zipCode: string
}

export interface Person {
    id?: number,
    name: Name,
    address: Address,
    birthday: string,
    gwa: number,
    dateHired: string,
    currentlyEmployed: boolean,
    contacts: Contact[],
    roles: Role[]
}