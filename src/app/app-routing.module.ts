import { CursoFormComponent } from './cursos/curso-form/curso-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './login/login-guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'alunos', component: AlunosComponent, canActivate: [AuthGuard]},
  { path: 'cursos', component: CursosComponent, canActivate: [AuthGuard] },
  { path: 'cursos/novo', component: CursoFormComponent, canActivate: [AuthGuard] },
  { path: 'cursos/:id', component: CursoDetalheComponent, canActivate: [AuthGuard] },
  { path: 'cursos/:id/editar', component: CursoFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
