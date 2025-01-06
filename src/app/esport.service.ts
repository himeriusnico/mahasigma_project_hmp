import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EsportService {
  link = "https://ubaya.xyz/hybrid/160422101/project services/"

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', username)
    body.set('password', password);
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "login.php", urlEncodedData, { headers });
  }

  signup(username: string, password: string, fullname: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', username)
    body.set('password', password)
    body.set('fullname', fullname)
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "signup.php", urlEncodedData, { headers });
  }

  getgame(): Observable<any> {
    return this.http.get(this.link + "get_game.php")
  }
}
