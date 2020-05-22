import { Injectable } from '@angular/core';

import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listar(): Tarefa[] {//array de tarefas
    const tarefas = localStorage['tarefas'];//quando a pagina sair, e dps entrar dnv os dados ficarão guardados
    //const -> uma constante ou variavel final
    return tarefas ? JSON.parse(tarefas) : [];
    /*
      *quando o localStorage retornar pela primeira vez, terá como valor null(not found), desse modo deve-se fazer um verificação,
      * esse operador ? e o : são operadores ternários, uma forma simplificada do if e else em uma linha só
      * = se existe alguma tarefa retorno JSON.parse(tarefas), caso contrário retornará um array vazio
      */
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listar(); //pega toda a lista para dps concatenar
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listar();
    return tarefas.find(tarefa => tarefa.id === id); //faz a verifição, tarefa por tarefa, até achar uma igual ao id digitado, assim retornando-a
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listar();
    tarefas.forEach((obj, index, objs) => {   //nesse foreach tem-se três parametros, sendo, obj = tarefa em si, index = posição da tarefa a ser interada, objs =lista das tarefas(copia do tarefas)
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listar();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);  //de acordo com tal condição é feito o filtro na lista retorna o desejado, nesse caso retorna todas as tarefas exceto a que quer-ser esxcluir
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listar();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida; //por o objeto status ser bool pode-se simplesmente faze desse modo
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
