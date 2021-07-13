import { Component, OnInit } from '@angular/core';
import { DataContainer } from '../data-container';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  component: any;

  constructor(public data: DataContainer) {
  }

  ngOnInit(): void {
    this.data.component = TabsComponent;

  }

  abrirRecibidos() {
    this.data.component = TabsComponent;
  }

}
