import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaludPage } from './salud.page';

const routes: Routes = [
  {
    path: '',
    component: SaludPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaludPageRoutingModule {}
