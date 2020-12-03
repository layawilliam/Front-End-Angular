import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './../material/material.module';
import { ReactiveFormsModule ,  FormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompanyComponent } from './components/company/company.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [ProfileComponent, CompanyComponent, ProyectosComponent, EditComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class ProfileModule { }
