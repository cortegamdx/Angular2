import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiro } from './meu-primeiro/meu-primeiro.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

//Importe de components
@NgModule({
  //Listar todos os componentes diretivas e pipes que desejamos usar 
  declarations: [
    AppComponent,
    MeuPrimeiro,
    MeuPrimeiro2Component
  ],
  //import de Outros modulos que queremos utilizar
  imports: [
    BrowserModule,
    CursosModule
  ],
  //Onde colocamos os serviços que vão ficar disponiveis 
  providers: [],

  //Diz qual o component que deve ser instaciado quando iniciar a aplicação(view Port) 
  bootstrap: [AppComponent]
})
export class AppModule { }
