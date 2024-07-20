import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaListComponent } from './components/empresa-list/empresa-list.component';
import { EmpresaFormComponent } from './components/empresa-form/empresa-form.component';
import { TareaListComponent } from './components/tarea-list/tarea-list.component';
import { TareaFormComponent } from './components/tarea-form/tarea-form.component';

export const routes: Routes = [
  { path: 'empresas', component: EmpresaListComponent },
  { path: 'empresas/nuevo', component: EmpresaFormComponent },
  { path: 'tareas', component: TareaListComponent },
  { path: 'tareas/nuevo', component: TareaFormComponent },
  { path: '', redirectTo: '/empresas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
