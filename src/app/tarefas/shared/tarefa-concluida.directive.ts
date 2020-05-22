import {
  Directive, ElementRef, Input, OnInit
} from '@angular/core';

@Directive({ //diretivas criam comportamentos, para criar mascaras ou modificações em determinados componentes
  selector: '[tarefaConcluida]' //troquei o nome da diretiva de appTarefaConcluida para TarefaConcluida
})
export class TarefaConcluidaDirective implements OnInit {
  @Input() tarefaConcluida: boolean;   //variavel com mesmo nome do selector

  constructor(private el: ElementRef) {}

    ngOnInit() {
      if (this.tarefaConcluida) {
        this.el.nativeElement.style.textDecoration = "line-through"; 
      }
    }
  
}
