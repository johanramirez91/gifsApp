import { GifsService } from './../../gifs/services/gifs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private gifService: GifsService) {}

  get historial() {
    return this.gifService.historial;
  }

  buscar(item: string) {
    return this.gifService.buscarGifs(item);
  }

  ngOnInit(): void {}
}
