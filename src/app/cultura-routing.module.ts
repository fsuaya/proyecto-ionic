import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CulturaPage } from './cultura.page';

const routes: Routes = [
  {
    path: '',
    component: CulturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CulturaPageRoutingModule {}
