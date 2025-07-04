import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactoPageRoutingModule } from './contacto-routing.module';

import { ContactoPage } from './contacto.page';
import { InfoModalComponent } from '../info-modal/info-modal.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContactoPage,
    InfoModalComponent]
})
export class ContactoPageModule {}
