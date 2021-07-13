import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { PrincipalComponent } from '../principal/principal.component';
import { VistaMensajeComponent } from '../vista-mensaje/vista-mensaje.component';
import { Correo } from 'src/app/referencias/correo';
import { CORREOSJSON } from 'src/app/referencias/estructura';
import { DataContainer } from '../data-container';



@Component({
  selector: 'app-bandeja',
  templateUrl: './bandeja.component.html',
  styleUrls: ['./bandeja.component.css']
})
export class BandejaComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Correo>(CORREOSJSON);
  selection = new SelectionModel<Correo>(true, []);

  constructor(private data: DataContainer) { }

  ngOnInit(): void {
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  abrirMensaje(row: Correo) {
    this.data.component = VistaMensajeComponent;
    this.data.mensajeSelccionado = row;
  }

}
