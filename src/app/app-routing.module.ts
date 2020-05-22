import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //utilitarios de roteamento

import { TarefaRoute } from './tarefas';

export const routes: Routes = [
  {//quero que minha tela inicial, ou seja, sem nada exiba a lista de tarefas
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'//passa a url completa correta para não se confundir
  },
  ...TarefaRoute //operador ... concatena arrays, pois tem um array dentro do outro
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) //esse forroot faz com que esse seja o unico modulo de rotas
  ],
  exports: [
    RouterModule //esse export faz com que esse routemodule esteja disponivel para a aplicação
  ]
})
export class AppRoutingModule {}
