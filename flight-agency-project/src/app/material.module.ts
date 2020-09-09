// material.module.ts

import { NgModule } from '@angular/core';
// @ts-ignore
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [MatDialogModule],
  exports: [MatDialogModule]
})

export class MaterialModule {}
