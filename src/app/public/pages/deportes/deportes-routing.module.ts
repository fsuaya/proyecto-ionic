import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeportesPage } from './deportes.page';

const routes: Routes = [
  {
    path: '',
    component: DeportesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeportesPageRoutingModule {}
