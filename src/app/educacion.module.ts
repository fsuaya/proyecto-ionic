import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducacionPageRoutingModule } from './educacion-routing.module';

import { EducacionPage } from './educacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducacionPageRoutingModule
  ],
  declarations: [EducacionPage]
})
export class EducacionPageModule {}
