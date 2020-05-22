import { TestBed, inject } from '@angular/core/testing';

import { TarefaService } from './tarefa.service';
import { Tarefa } from './tarefa.model';

describe('TarefaService', () => {
  let service: TarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarefaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

/**
* Testes
*
*Todo teste deve ter a função it
* 1º parametro =  o que o teste faz
* 2º injeta o CalculadoraService, ou seja, pega ele
* 3º pega o CalculadoraService obtido no parametro anterior e coloca no service,
* ou seja, cria uma instancia para utiliza-la ali dentro.
*/

  it('Deve garantir que uma tarefa sera criada',
    inject([TarefaService], (service: TarefaService) => {
      let tarefa = new Tarefa();
      tarefa.id = 1;
      tarefa.nome = "primeira tarefa";
      tarefa.concluida = false;
      service.cadastrar(tarefa);
    })
  );

  it('Deve garantir que uma tarefa sera excluida',
    inject([TarefaService], (service: TarefaService) => {
      let tarefa = new Tarefa();
      tarefa.id = 4;
      tarefa.nome = "primeira tarefa";
      tarefa.concluida = true;
      service.cadastrar(tarefa);
      service.remover(4);
    })
  );
});
