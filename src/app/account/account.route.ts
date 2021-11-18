import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountAppComponent } from "./account.app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const accountRouterConfig: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full'},
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
]


@NgModule({
    imports: [
        RouterModule.forChild(accountRouterConfig)
    ],
    exports: [RouterModule]
})
export class AccountRoutingModule { }