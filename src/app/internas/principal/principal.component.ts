import { Component, OnInit } from '@angular/core';
import { BandejaComponent } from '../bandeja/bandeja.component';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  component: any;

  constructor() { }

  ngOnInit(): void {
    this.component = TabsComponent;



  }

  abrirRecibidos() {
    this.component = TabsComponent;
  }

}
