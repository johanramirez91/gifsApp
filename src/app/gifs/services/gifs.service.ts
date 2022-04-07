import { SearchGifsResponse, Gif } from './../interfaces/gifs.interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  public results: Gif[] = [];

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
  }

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string = '') {
    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('apiKey', environment.apikey)
      .set('limit', '21')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((response) => {
        this.results = response.data;
        localStorage.setItem('results', JSON.stringify(this.results));
      });
  }
}
