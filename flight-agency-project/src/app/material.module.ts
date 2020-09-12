
import { NgModule } from '@angular/core';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatStepperModule } from '@angular/material';
import {MatNativeDateModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    MatStepperModule
  ]
})

export class MaterialModule {}
