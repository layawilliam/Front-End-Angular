import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminGuard} from './shared/admin.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'profile',
    canActivate: [AdminGuard],
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
