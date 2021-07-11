import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-mensaje',
  templateUrl: './vista-mensaje.component.html',
  styleUrls: ['./vista-mensaje.component.css']
})
export class VistaMensajeComponent implements OnInit {

  background = 'img3';
  bkUrl = {};    
  constructor() { }

  ngOnInit(): void {
    this.bkUrl = this.getBkUrl();
  }

  getBkUrl() {
    const styles = {
      'background-image': 'url(../../../assets/' + this.background + '.png)'
    };
    console.log(styles);
    return styles;
  }

}
