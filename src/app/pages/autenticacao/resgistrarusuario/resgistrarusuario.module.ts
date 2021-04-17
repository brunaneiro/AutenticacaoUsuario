import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResgistrarusuarioPageRoutingModule } from './resgistrarusuario-routing.module';

import { ResgistrarusuarioPage } from './resgistrarusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResgistrarusuarioPageRoutingModule
  ],
  declarations: [ResgistrarusuarioPage]
})
export class ResgistrarusuarioPageModule {}
