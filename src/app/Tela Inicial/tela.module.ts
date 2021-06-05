import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TelaPage } from './tela.page';

import { TelaPageRoutingModule } from './tela-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaPageRoutingModule,
  ],
  declarations: [TelaPage]
})
export class TelaPageModule {}
