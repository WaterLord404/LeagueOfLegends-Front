import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor(private httpClient: HttpClient) { }

  getChampions(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/lol/champion");
  }

  addChampion(champion: Object): void {
    this.httpClient.post("http://localhost:8080/lol/champion", champion)
      .subscribe(
        res => {window.location.reload();},
        error => {console.log(error)} 
        );
  }

  searchChampionById(idChampion: string): Observable<any> {
    return this.httpClient.get("http://localhost:8080/lol/champion/" + idChampion);
  }
}
