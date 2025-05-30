import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonAvatar, IonList, IonItem, IonLabel, 
        IonTitle, IonText, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/angular/standalone";

@Component({
  standalone:false,
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  nombreUsuario: string = 'José Francisco Malavé';
  correoUsuario: string = 'jfm@gmail.com';
  telefonoUsuario: string = '0412-1234567';
  descripcionUsuario: string = 'Desarrollador de aplicaciones móviles con Ionic y Angular. Apasionado por la tecnología y el aprendizaje continuo.';

  constructor() { }

  ngOnInit() {
  }

}
