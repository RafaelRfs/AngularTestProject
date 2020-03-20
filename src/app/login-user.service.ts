import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import {Servicos} from './servicos';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Http,
  Response,
  Headers,
  RequestOptions
} from '@angular/http'; 

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  url:string = 'https://serene-sea-70010.herokuapp.com/users';

  constructor(private httpClient: HttpClient) { 

  }


 createUser(usr:Users){
    this.httpClient.put(this.url,usr).subscribe(res => {
      console.log('Retorno Login: ',res);
    });
  }

  

}
