import { GifsService } from './../../services/gifs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
export class ResultadosComponent implements OnInit {
  constructor(private gifService: GifsService) {}

  ngOnInit(): void {}

  get results() {
    return this.gifService.results;
  }
}
