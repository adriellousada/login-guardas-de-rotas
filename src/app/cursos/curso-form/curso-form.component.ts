import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: []
})
export class CursoFormComponent implements OnInit, OnDestroy {

  curso: any = {};
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.curso = this.cursosService.getCurso(id);
      }
    );

    if (this.curso === null) {
      this.curso = {};
    }
  }

  public cancelar() {
    this.router.navigate(['/cursos', this.curso.id]);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
