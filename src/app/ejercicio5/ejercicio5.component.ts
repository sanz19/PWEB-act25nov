import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2"
@Component({
  selector: 'app-ejercicio5',
  templateUrl: './ejercicio5.component.html',
  styleUrls: ['./ejercicio5.component.css']
})
export class Ejercicio5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  localidad: string = "X";
  fecha: string = "X";
  genero: string = "X";
  precio: string = "";
  desc: string = "";
  precioTotal: string = "";
  

  calcular() {
      const precios = [150, 230, 300, 425, 500, 670];
      const descuentos = [15, 7, 8, 4, 10, 7];
      let pTotal = 0;
      let precioBoleto = 0;
      let descuento = 0;

      if (this.genero == "X") {
        Swal.fire("Seleccione su género."); return;
      }
      switch(this.localidad) {
          case "X": Swal.fire("Seleccione una localidad."); break;
          case "A": 
              if (this.fecha == "V") {
                  precioBoleto = precios[0];
                  descuento = descuentos[0]/100;
                  pTotal = (this.genero == "F") ? precioBoleto-(precioBoleto*descuento) : precioBoleto;
                  descuento = (this.genero == "F") ? descuento*precioBoleto : 0;
              } else if (this.fecha == "S") {
                  precioBoleto = precios[1];
                  descuento = descuentos[1]/100;
                  pTotal = (this.genero == "F") ? precioBoleto-(precioBoleto*descuento) : precioBoleto;
                  descuento = (this.genero == "F") ? descuento*precioBoleto : 0;
              } else {
                Swal.fire("Seleccione una fecha.")
            }
              break;
          
          case "B": 
              if (this.fecha == "V") {
                  precioBoleto = precios[2];
                  descuento = descuentos[2]/100;
                  pTotal = (this.genero == "F") ? precioBoleto-(precioBoleto*descuento) : precioBoleto;
                  descuento = (this.genero == "F") ? descuento*precioBoleto : 0;
              } else if (this.fecha == "S") {
                  precioBoleto = precios[3];
                  descuento = descuentos[3]/100;
                  pTotal = (this.genero == "F") ? precioBoleto-(precioBoleto*descuento) : precioBoleto;
                  descuento = (this.genero == "F") ? descuento*precioBoleto : 0;
              } else {
                Swal.fire("Seleccione una fecha.")
            }
              break;

          case "C": 
              if (this.fecha == "V") {
                  precioBoleto = precios[4];
                  descuento = descuentos[4]/100;
                  pTotal = (this.genero == "F") ? precioBoleto-(precioBoleto*descuento) : precioBoleto;
                  descuento = (this.genero == "F") ? descuento*precioBoleto : 0;
              } else if (this.fecha == "S") {
                  precioBoleto = precios[5];
                  descuento = descuentos[5]/100;
                  pTotal = (this.genero == "F") ? precioBoleto-(precioBoleto*descuento) : precioBoleto;
                  descuento = (this.genero == "F") ? descuento*precioBoleto : 0;
              } else {
                  Swal.fire("Seleccione una fecha.")
              }
              break; 

          }
      
      this.precioTotal = "$" + pTotal.toFixed(2);
      this.precio = "$" + precioBoleto.toFixed(2);
      this.desc = "$" + descuento.toFixed(2);
  }

  Limpiar() {
      this.localidad = "X"
      this.fecha = "X"
      this.genero = "X"
      this.precio = "";
      this.desc = "";
      this.precioTotal = "";
  }
}
