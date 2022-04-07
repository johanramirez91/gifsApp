import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifspageComponent } from './pages/gifspage/gifspage.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ResultadosComponent } from './components/resultados/resultados.component';

@NgModule({
  declarations: [GifspageComponent, BusquedaComponent, ResultadosComponent],
  imports: [CommonModule],
  exports: [GifspageComponent],
})
export class GifsModule {}
