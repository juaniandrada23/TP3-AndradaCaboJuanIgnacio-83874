import { Component, OnInit } from '@angular/core';
import { ArticuloFamilia } from 'src/app/models/articulo-familia';
import { MockArticulosFamiliasService } from 'src/app/services/mock-articulos-familias.service';
import { ArticulosFamiliasService } from 'src/app/services/articulos-familias.service';

import { ArticulosFamilias } from 'src/app/models/articulo-familia';

@Component({
  selector: 'app-articulos-familias',
  templateUrl: './articulos-familias.component.html',
  styleUrls: ['./articulos-familias.component.css']
})

export class ArticulosFamiliasComponent implements OnInit {


  Items: ArticuloFamilia[] = [];
  Titulo = "Articulos Familias"

  constructor(
    private articulosFamiliasService: ArticulosFamiliasService
  ) { }

  ngOnInit() {
    this.GetFamiliasArticulos();
  }

  GetFamiliasArticulos() {
    this.articulosFamiliasService.get()
    .subscribe((res:ArticuloFamilia[]) => {
    this.Items = res;
    });
  }
}
