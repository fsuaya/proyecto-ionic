import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CulturaPageRoutingModule } from './cultura-routing.module';

import { CulturaPage } from './cultura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CulturaPageRoutingModule
  ],
  declarations: [CulturaPage]
})
export class CulturaPageModule {}
