import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeportesPageRoutingModule } from './deportes-routing.module';

import { DeportesPage } from './deportes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeportesPageRoutingModule
  ],
  declarations: [DeportesPage]
})
export class DeportesPageModule {}
