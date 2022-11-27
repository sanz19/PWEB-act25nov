import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ejemplo16',
  templateUrl: './ejemplo16.component.html',
  styleUrls: ['./ejemplo16.component.css']
})
export class Ejemplo16Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  vuelo: string = "X";
  edad: number = 1;
  precio: string = "";
  desc: string = "";
  precioTotal: string = "";

  calcular() {
    const precios = [1300, 1700, 1800, 800, 600, 1150];
    const descuentos = [120, 180, 200, 50, 35, 85];
    let precioVuelo = precios[parseInt(this.vuelo) - 1];
    let descuento = false;
    let pDescuento = 0;
    let pTotal = 0;


    if (this.edad < 13 || this.edad > 60) {
        descuento = true;
        pDescuento = descuentos[parseInt(this.vuelo) - 1];
    }
    if (this.edad < 0 || this.edad > 120) {
        Swal.fire("Ingrese una edad valida."); return;
    }
    if (this.vuelo == "X") {
      Swal.fire("Seleccione una ruta de vuelo.");
    }

    pTotal = (descuento == true) ? (precioVuelo - pDescuento) : precioVuelo;

    this.precio = "$" + precioVuelo.toFixed(2);
    this.desc = "$" + pDescuento.toFixed(2);
    this.precioTotal = "$" + pTotal.toFixed(2);
  }

  limpiar() {
    this.vuelo = "X";
    this.edad = 1;
    this.precio = "";
    this.desc = "";
    this.precioTotal = "";
  }

}
