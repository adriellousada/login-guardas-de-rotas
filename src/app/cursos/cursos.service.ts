import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: any[] = [
    {
      id: '1',
      nome: 'Java Completo POO 2020',
      descricao: 'Curso Java',
      autor: 'Nelio Alves',
      avaliacao: 4.9
    },
    {
      id: '2',
      nome: 'Spring Boot Hibernate e REST',
      descricao: 'Projeto Full Stack',
      autor: 'Nelio Alves',
      avaliacao: 4.7
    },
    {
      id: '3',
      nome: 'Cozinha Prática',
      descricao: 'Cozinha Prática',
      autor: 'Rita Lobo',
      avaliacao: 4.7
    },
  ];

  getCursos() {
    return this.cursos;
  }

  public getCurso(id: String) {
    for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
      if (curso.id == id) {
        return curso;
      }
    }
    return null;
  }
  
  constructor() { }
}
