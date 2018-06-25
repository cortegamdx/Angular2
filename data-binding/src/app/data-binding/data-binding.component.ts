import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url : string = 'http://loaine.training';

  cursoAngular : boolean = true;

  valorAtual : string ='';
  valorSalvo :string ='';
  nome : string = 'abc';

  constructor() { }

  ngOnInit() {
  }

  getCurtir(){
    return true;
  }

  botaoClicado(){
    alert('clicado com sucesso!');
  }

  onkeyUp(evento){
    console.log(evento.target.value);
    this.valorAtual = evento.target.value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }
}
