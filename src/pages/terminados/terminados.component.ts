import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { DetalleComponent } from '../detalle/detalle.component';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent implements OnInit {
  constructor(private _listaDeseos: ListaDeseosService,
              private navController: NavController) {  }

  ngOnInit() {}

  verDetalle( lista, idx:number ){
    this.navController.push( DetalleComponent,{ lista, idx });
  }

}
