import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: []
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  curso: any;
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
  }

  public editarCurso() {
    this.router.navigate(['/cursos', this.curso.id, 'editar']);
  }
 
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
