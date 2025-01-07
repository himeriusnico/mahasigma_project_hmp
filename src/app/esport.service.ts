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

  signup(username: string, password: string, name: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('name', name);
    const urlEncodedData = body.toString();
    console.log('Sending data:', urlEncodedData);
    return this.http.post(this.link + 'signup1.php', urlEncodedData, {
      headers,
    });
  }

  getgame(): Observable<any> {
    return this.http.get(this.link + "get_game.php")
  }

  getachievements(idgame: number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idgame', idgame.toString());
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "get_achievements.php", urlEncodedData, { headers });
  }

  getevent(): Observable<any> {
    return this.http.get(this.link + "get_events.php")
  }

  geteventdetail(idevent: number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idevent', idevent.toString())
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "get_eventsdetail.php", urlEncodedData, { headers });
  }

  getteams(idgame: number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idgame', idgame.toString())
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "get_team.php", urlEncodedData, { headers });
  }

  getteamsmember(idteam: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idteam', idteam)
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "get_teammembers.php", urlEncodedData, { headers });
  }

  getproposal(idmember: number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idmember', idmember.toString())
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "get_proposal.php", urlEncodedData, { headers });
  }

  getteam(idgame: number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idgame', idgame.toString())
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "get_team.php", urlEncodedData, { headers });
  }

  newproposal(idmember: number, idteam: number, description: string){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idmember', idmember.toString())
    body.set('idteam', idteam.toString())
    body.set('description', description)
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "new_proposal.php", urlEncodedData, { headers });
  }
}
