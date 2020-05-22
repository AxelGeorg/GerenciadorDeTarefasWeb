import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[]; //esse variavel tarefas pode ser utilizada no html, por exemplo no *ngFor

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void { //após a criaão do construtor o ngOnInit é chamado, faz-se as regras de negócio aqui para não te-las no construtor
    this.tarefas = this.listar(); //ngOnInit renderiza a tela mesmo que essa lista demore a chegar, ou seja, do localStorage, exibindo uma lista vazia até isso

    //teste para averiguar se esta salvando tarefas msm
    /*this.tarefas = [
      new Tarefa(1,"tarefa 1",false),
      new Tarefa(2,"tarefa 2",false), 
      new Tarefa(3,"tarefa 3",true)
    ]*/
  }

  listar(): Tarefa[] {
    return this.tarefaService.listar();
  } 

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();      //esse $event eviata a atualização da página, somente remove a tarefa
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {    //mensagem de confirmação, mostrando um alerta e retornando um bool
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listar();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listar();
    }
  }

}
