import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/leer.php';

  constructor(private http: HttpClient) { }

  public loginUsuario(login): any {
    return this.http.post(`${this.url}`, JSON.stringify(login));
  }

  public register(): any {
    return console.log('hola');
  }
}
