import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducacionPage } from './educacion.page';

const routes: Routes = [
  {
    path: '',
    component: EducacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducacionPageRoutingModule {}
