import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransportePageRoutingModule } from './transporte-routing.module';

import { TransportePage } from './transporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransportePageRoutingModule
  ],
  declarations: [TransportePage]
})
export class TransportePageModule {}
