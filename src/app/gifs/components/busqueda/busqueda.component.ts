import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent {
  @ViewChild('textBuscar') textBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifsService) {}

  buscar() {
    const texto = this.textBuscar.nativeElement.value;
    if (texto.trim().length === 0) {
      return;
    }
    this.textBuscar.nativeElement.value = '';
    this.gifService.buscarGifs(texto);
  }
}
