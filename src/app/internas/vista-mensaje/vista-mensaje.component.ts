import { Component, OnInit } from '@angular/core';
import { Correo } from 'src/app/referencias/correo';
import { DataContainer } from '../data-container';

@Component({
  selector: 'app-vista-mensaje',
  templateUrl: './vista-mensaje.component.html',
  styleUrls: ['./vista-mensaje.component.css']
})
export class VistaMensajeComponent implements OnInit {

  public mensaje: Correo | any;
  constructor(private data: DataContainer) { }

  ngOnInit(): void {
    this.mensaje = this.data.mensajeSelccionado;
  }

  obtenerFormatoNombre(correo: string) {
    correo = correo.substring(0, correo.indexOf("@"));
    return correo;
  }

}
