import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from './app.component';
import {ApiListComponent} from './api-list/api-list.component';
import {RoleFeatureComponent} from './role-feature/role-feature.component';
import {PersonFeatureComponent} from './person-feature/person-feature.component';

import {MenubarModule} from "primeng/menubar";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {ToastModule} from "primeng/toast";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {MessageService} from "primeng/api";
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {CheckboxModule} from "primeng/checkbox";
import {DropdownModule} from "primeng/dropdown";
import {PersonEditComponent} from './person-edit/person-edit.component';
import {AccordionModule} from "primeng/accordion";

@NgModule({
    declarations: [
        AppComponent,
        ApiListComponent,
        RoleFeatureComponent,
        PersonFeatureComponent,
        PersonEditComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MenubarModule,
        TableModule,
        ButtonModule,
        DialogModule,
        ToastModule,
        InputTextModule,
        FormsModule,
        InputNumberModule,
        CalendarModule,
        CheckboxModule,
        DropdownModule,
        AccordionModule,
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}