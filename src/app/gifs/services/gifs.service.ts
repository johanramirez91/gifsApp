import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];

  //TODO: Cambiar tipado
  public results: any[] = [];

  constructor(private http: HttpClient) {}

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string = '') {
    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    this.http
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=fVNubcmEGa4CE1pMMeFwkmNamjs6EH6J&q=${query}&limit=20`
      )
      .subscribe((response: any) => {
        console.log(response.data);
        this.results = response.data;
      });
  }
}
