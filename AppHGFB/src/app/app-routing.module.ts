import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mapalocal',
    loadChildren: () => import('./mapalocal/mapalocal.module').then( m => m.MapalocalPageModule)
  },
  {
    path: 'sobrenos',
    loadChildren: () => import('./sobrenos/sobrenos.module').then( m => m.SobrenosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
