import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountRoutingModule } from './account.route';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountAppComponent } from './account.app.component';
import { AccountService } from './services/account.service';

import { CustomFormsModule } from 'ngx-custom-validators';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AccountAppComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccountRoutingModule,
    CustomFormsModule
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
