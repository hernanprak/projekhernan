import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public/public.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material.module';

const routes: Routes = [
  {
    path:'',
    component:PublicComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [PublicComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign
  ]
})
export class PublicModule { }