import { Component, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  saludo = "";
  component: any;

  constructor() { }

  ngOnInit(): void {
    this.saludo = "el ogrito de mi novio no me quiere";
    this.component = TabsComponent;

    
  }

}
