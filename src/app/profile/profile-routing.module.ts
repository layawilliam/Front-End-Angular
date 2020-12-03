import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { EditComponent } from './components/edit/edit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';



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
      },
      {
        path: 'proyecto/:id/edit/:tk',
        component: EditComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
