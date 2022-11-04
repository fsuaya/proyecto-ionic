import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  /*{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, */
  {
    path: '',
    loadChildren: () => import('./tablinks/tablinks.module').then( m => m.TablinksPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [IngresadoGuard]

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
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]

  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]

  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
