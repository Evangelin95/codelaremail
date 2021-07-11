import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-mensaje',
  templateUrl: './vista-mensaje.component.html',
  styleUrls: ['./vista-mensaje.component.css']
})
export class VistaMensajeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  getUrl(){
    return "url('../../../assets/img3.png')";
  }

}
