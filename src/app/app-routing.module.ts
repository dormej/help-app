import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loading-page',
    pathMatch: 'full'
  },
  {
    path: 'loading-page',
    loadChildren: () => import('./pages/loading-page/loading-page.module').then( m => m.LoadingPagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'heating',
    loadChildren: () => import('./pages/heating/heating.module').then( m => m.HeatingPageModule)
  },
  {
    path: 'shelter',
    loadChildren: () => import('./pages/shelter/shelter.module').then( m => m.ShelterPageModule)
  },
  {
    path: 'lunch',
    loadChildren: () => import('./pages/lunch/lunch.module').then( m => m.LunchPageModule)
  },
  {
    path: 'baths',
    loadChildren: () => import('./pages/baths/baths.module').then( m => m.BathsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
