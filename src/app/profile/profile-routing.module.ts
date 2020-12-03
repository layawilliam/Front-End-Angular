import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AdminGuard } from '../shared/admin/admin.guard';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,

    children: [
      {
        path: '',
        component: CompanyComponent,

      },
      {
        path: 'proyecto/:id',
        component: ProyectosComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
