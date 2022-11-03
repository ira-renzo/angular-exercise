import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoleFeatureComponent} from "./role-feature/role-feature.component";
import {ApiListComponent} from "./api-list/api-list.component";
import {PersonFeatureComponent} from "./person-feature/person-feature.component";
import {ContactFeatureComponent} from "./contact-feature/contact-feature.component";

const routes: Routes = [
    {path: "person", component: PersonFeatureComponent},
    {path: "contact", component: ContactFeatureComponent},
    {path: "role", component: RoleFeatureComponent},
    {path: "api-requests", component: ApiListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}