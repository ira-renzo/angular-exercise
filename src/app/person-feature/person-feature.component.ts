import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PersonService} from "../../services/person.service";
import {ToastService} from "../../services/toast.service";
import {Person} from "../../models/person";
import {Location} from "@angular/common";

@Component({
    selector: 'app-person-feature',
    templateUrl: './person-feature.component.html'
})
export class PersonFeatureComponent implements OnInit, AfterViewInit {

    columns = [
        {field: "id", header: "ID"},
        {field: "lastName", header: "Last Name"},
        {field: "firstName", header: "First Name"}
    ]
    people: Person[] = []
    successEditMessage: string = ""

    constructor(private personService: PersonService,
                private toastService: ToastService,
                private location: Location,
                private cdf: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.getPersonList()
        this.successEditMessage = (this.location.getState() as any).success
    }

    ngAfterViewInit() {
        if (this.successEditMessage != undefined) this.toastService.sendToast(this.successEditMessage, {isGood: true})
        this.cdf.detectChanges()
    }

    getPersonList() {
        this.personService.getPeople().subscribe(people => {
            this.people = people
        })
    }

    delete(personId: number) {
        this.personService.deletePerson(personId)
            .subscribe(res => {
                this.toastService.sendToast(res["result"], {
                    successKeyword: "Deleted",
                    successCallback: () => this.getPersonList()
                })
            })
    }

}