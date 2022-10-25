import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportePage } from './transporte.page';

const routes: Routes = [
  {
    path: '',
    component: TransportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportePageRoutingModule {}
