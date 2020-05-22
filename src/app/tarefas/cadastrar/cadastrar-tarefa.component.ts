import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TarefaService, Tarefa } from '../shared';


@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  //será associado ao nome do form do html
  @ViewChild('formTarefa', { static: true}) formTarefa: NgForm; //validação de formulário, ou seja, so pode-se cadastrar um formulário quando o mesmo for válido
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router: Router) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.cadastrar(this.tarefa); // faz o cadastro
      this.router.navigate(["/tarefas"]); // volta para a outra tela
    }
  }
}
