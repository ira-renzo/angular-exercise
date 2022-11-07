import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PersonFeatureComponent} from "./person-feature/person-feature.component";
import {PersonEditComponent} from "./person-edit/person-edit.component";
import {RoleFeatureComponent} from "./role-feature/role-feature.component";
import {ApiListComponent} from "./api-list/api-list.component";

const routes: Routes = [
    {path: "", redirectTo: "/person", pathMatch: "full"},
    {path: "person", component: PersonFeatureComponent},
    {path: "person/:id", component: PersonEditComponent},
    {path: "role", component: RoleFeatureComponent},
    {path: "api-requests", component: ApiListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}