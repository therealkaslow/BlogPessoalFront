import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  entrar(credenciais: CredenciaisDTO): Observable<CredenciaisDTO> {
    return this.http.put<CredenciaisDTO>('https://meublogkaslow.herokuapp.com/usuarios/logar', credenciais)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://meublogkaslow.herokuapp.com/usuarios/cadastrar', usuario)
  }

  logado(){
    let ok: boolean = false;

    if (environment.token != ''){
      ok = true
    }
    return ok
  }
}
