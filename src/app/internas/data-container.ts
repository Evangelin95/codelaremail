import { Injectable } from "@angular/core";
import { Correo } from "../referencias/correo";

@Injectable({
    providedIn: 'root'
})
export class DataContainer {
    component: any;
    mensajeSelccionado: Correo | undefined;
}