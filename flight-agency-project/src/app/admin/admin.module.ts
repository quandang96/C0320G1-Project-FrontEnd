import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { PasswordComponent } from './password/password.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AdminHomeComponent, AdminInfoComponent, PasswordComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule
    ]
})
export class AdminModule { }
