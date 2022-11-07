import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Person} from "../../models/person";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonService} from "../../services/person.service";
import {Contact} from "../../models/contact";
import {ToastService} from "../../services/toast.service";

@Component({
    selector: 'app-person-edit',
    templateUrl: './person-edit.component.html',
    styleUrls: ['./person-edit.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PersonEditComponent implements OnInit {

    person: any = this.createEmptyPerson()
    personClone: Person = JSON.parse(JSON.stringify(this.person))
    nameFields = [
        {name: "lastName", label: "Last Name"},
        {name: "firstName", label: "First Name"},
        {name: "middleName", label: "Middle Name"},
        {name: "suffix", label: "Suffix"},
        {name: "title", label: "Title"}
    ]
    addressFields = [
        {name: "streetNo", label: "Street Number"},
        {name: "barangay", label: "Barangay"},
        {name: "city", label: "City"},
        {name: "zipCode", label: "Zip Code"}
    ]
    miscFields = [
        {name: "birthday", label: "Birthday"},
        {name: "dateHired", label: "Date Hired"}
    ]
    contactTypes = [
        {name: "Email", code: "EMAIL"},
        {name: "Landline", code: "LANDLINE"},
        {name: "Mobile", code: "MOBILE"}
    ]

    constructor(private route: ActivatedRoute,
                private personService: PersonService,
                private toastService: ToastService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.personService.getPeople().subscribe(people => {
            let personToEdit = people.filter(person => Number(this.route.snapshot.paramMap.get("id")) == person.id)[0]
            if (personToEdit != undefined) {
                this.person = personToEdit
                this.personClone = JSON.parse(JSON.stringify(this.person))
            }
        })
    }

    createEmptyPerson(): Person {
        return {
            name: {
                lastName: "",
                firstName: "",
                middleName: "",
                suffix: "",
                title: ""
            },
            address: {
                streetNo: "",
                barangay: "",
                city: "",
                zipCode: ""
            },
            birthday: this.getCurrentDate(),
            gwa: 0,
            dateHired: this.getCurrentDate(),
            currentlyEmployed: false,
            contacts: [],
            roles: []
        };
    }

    getCurrentDate(): string {
        let date = new Date();
        let year = date.getFullYear()
        let month = String(date.getMonth()).padStart(2, '0')
        let day = String(date.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    addContact() {
        this.person.contacts.push({type: this.contactTypes[0].code, value: ""})
    }

    contactsToDelete: Contact[] = []

    deleteContact(contact: Contact) {
        let indexToRemove = this.person.contacts.indexOf(contact)
        if (contact.id != undefined) this.contactsToDelete.push(this.person.contacts[indexToRemove])
        this.person.contacts.splice(indexToRemove, 1)
    }

    submitButtonDisabled: boolean = false

    submit() {
        this.submitButtonDisabled = true

        // Collection Properties
        for (let contact of this.person.contacts) {
            if (contact.id == undefined) this.personService.addContact(this.person.id, contact).subscribe()
            else {
                let sameContacts = this.personClone.contacts.filter(contactClone => {
                    return JSON.stringify(contact) == JSON.stringify(contactClone)
                })
                if (sameContacts.length == 0) this.personService.updateContact(this.person.id, contact.id, contact).subscribe()
            }
        }
        for (let contact of this.contactsToDelete) {
            this.personService.deleteContact(this.person.id, contact.id as number).subscribe()
        }

        // Non-Collection Properties
        if (this.person.id == undefined) {
            this.personService.addPerson(this.person)
                .subscribe(res => {
                    if (res["result"].includes("Saved")) {
                        this.router.navigateByUrl("/person", {state: {success: res["result"]}}).then()
                    } else {
                        this.toastService.sendToast(res["result"], {isBad: true})
                    }
                })
        } else {
            this.personService.updatePerson(this.person, this.person['id'])
                .subscribe(res => {
                    if (res["result"].includes("Updated")) {
                        this.router.navigateByUrl("/person", {state: {success: res["result"]}}).then()
                    } else {
                        this.toastService.sendToast(res["result"], {isBad: true})
                    }
                })
        }

        console.log(this.person)
        this.contactsToDelete = []
        this.submitButtonDisabled = false
    }

}