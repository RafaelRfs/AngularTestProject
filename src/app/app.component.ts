import { Component } from '@angular/core';
import {Servicos} from './servicos';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servicos : Servicos[];
  search: string;
  tmpServ : Servicos;
  updtServico : Servicos ;
  title = 'Services';

  constructor(private appService : AppServiceService){
    this.updtServico =  new Servicos(0,'','','','');
    this.appService.getServices().subscribe( servicos => this.servicos = servicos);
    this.appService.verificaLogin();
  }
  pesquisarServico(buscar:HTMLInputElement){
      this.search = buscar.value.trim();
      this.appService.getServicesByName(this.search).subscribe(servicos => this.servicos = servicos);
  }
  inserirServico(nome: HTMLInputElement,descricao: HTMLInputElement,conteudo: HTMLInputElement,img: HTMLInputElement){
    this.tmpServ = new Servicos(0,nome.value, descricao.value, 
      conteudo.value, img.value);
      this.appService.insertServices(this.tmpServ);
  }
  updtService(srv: Servicos){
    this.appService.updateServices(srv);
  }
  editService(srv: Servicos){
    this.updtServico = srv;
    console.log(this.updtServico);
  }
  deleteService(srv: Servicos){
    this.appService.deleteServices(srv);
  }
}
