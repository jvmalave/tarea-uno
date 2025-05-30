import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonTitle, IonHeader, IonButtons } from "@ionic/angular/standalone";

@Component({
  standalone:false,
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss'],
})
export class InfoModalComponent {
  @Input() respuesta!: string
  @Input() nombre!: string;
  

  constructor(private modalCtrl: ModalController) {}

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
}
