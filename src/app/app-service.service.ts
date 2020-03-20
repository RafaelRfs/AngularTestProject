import { Injectable } from '@angular/core';
import {Servicos} from './servicos';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppServiceService {

  //url: string = "http://localhost:8080/servicos";
  url: string = "https://serene-waters-89769.herokuapp.com/servicos";
  url2: string = "https://serene-sea-70010.herokuapp.com/login/";
  //url3: string = "http://localhost:8080/login/";
  id:Number;

  constructor(private httpClient: HttpClient) { }
  
  getServices(): Observable<Servicos[]> {
    return this.httpClient.get<Servicos[]>(this.url);
  }

  getServicesById(id: number): Observable<Servicos[]>{
    return this.httpClient.get<Servicos[]>(this.url+'/'+id);
  }

  getServicesByName(name: string): Observable<Servicos[]>{
    return this.httpClient.get<Servicos[]>(this.url+'/search/'+name);
  }
  
  insertServices(srv: Servicos){
    return this.httpClient.put(this.url,srv).subscribe((res)=>{
      console.log('retorno', res);
  });
  }

  updateServices(srv: Servicos){
    console.log(srv, this.url);
    return this.httpClient.post(this.url, srv).subscribe((res)=>{
      console.log('retorno', res);
    });
  }

  deleteServices(srv: Servicos){
    this.id = srv.id;
    return this.httpClient.delete(this.url+'/'+this.id).subscribe((res)=>{
      console.log('retorno', res);
  });
}


verificaLogin(){
  const mockDt = {
    "nome": "",
    "sobrenome": "",
    "email": "test786@email.com",
    "senha": "123",
    "descricao": "",
    "img": "",
    "data": "",
    "sexo": "",
    "tipo": 0
   };
  return this.httpClient.post(this.url3+'verify', mockDt).subscribe((res)=>{
    console.log('retorno', res);
  });
}

}
