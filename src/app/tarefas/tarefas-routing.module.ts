import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';

export const TarefaRoute: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar' // jah que a lista de tarefas será a primeira pg, há udas formas de entrar nela
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent //exibindo assim o html do listarTarefaComponent no <router-outlet><router-outlet>
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent //exibindo assim o html do CadastrarTarefaComponent no <router-outlet><router-outlet>
  },
  {
    path: 'tarefas/editar/:id',      //marcação para parametros
    component: EditarTarefaComponent //exibindo assim o html do EditarTarefaComponent no <router-outlet><router-outlet>
  }
];
