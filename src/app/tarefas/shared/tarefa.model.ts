export class Tarefa {

  constructor(
    public id?: number,
    public nome?: string,
    public concluida?: boolean
  ) { } //essas variaveis são atributos da class
        //o ? na tipagem faz com que esses atributos sejam opicionais
}
