import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { CasesComponent } from './cases/cases.component';
import { CasesDetailsComponent } from './cases-details/cases-details.component';
import { CasesStatComponent } from './cases-stat/cases-stat.component';
import { AddCasesComponent } from './add-cases/add-cases.component';
import { EditCasesComponent } from './edit-cases/edit-cases.component';


const routes: Routes = [
  {
    path: 'cases',
    component: CasesComponent,
    data: { title: 'Lista de Casos'}
  },
  {
    path: 'cases-details/:id',
    component: CasesDetailsComponent,
    data: { title: 'Detalhes dos Casos'}
  },
  {
    path: 'add-cases',
    component: AddCasesComponent,
    data: { title: 'Adicionar Casos'}
  },
  {
    path: 'edit-cases/:id',
    component: EditCasesComponent,
    data: { title: 'Editar Casos'}
  },
  {
    path: '',
    redirectTo: '/cases',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
