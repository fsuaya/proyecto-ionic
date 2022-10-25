import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tablinks/tablinks.module').then( m => m.TablinksPageModule)
  },
  {
    path: 'Trabajo',
    loadChildren: () => import('./public/pages/trabajo/trabajo.module').then( m => m.TrabajoPageModule)
  },
  {
    path: 'Cultura',
    loadChildren: () => import('./public/pages/cultura/cultura.module').then( m => m.CulturaPageModule)
  },
  {
    path: 'Salud',
    loadChildren: () => import('./public/pages/salud/salud.module').then( m => m.SaludPageModule)
  },
  {
    path: 'Transporte',
    loadChildren: () => import('./public/pages/transporte/transporte.module').then( m => m.TransportePageModule)
  },
  {
    path: 'Deportes',
    loadChildren: () => import('./public/pages/deportes/deportes.module').then( m => m.DeportesPageModule)
  },
  {
    path: 'Educacion',
    loadChildren: () => import('./public/pages/educacion/educacion.module').then( m => m.EducacionPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
