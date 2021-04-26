import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizacaoPageRoutingModule } from './finalizacao-routing.module';

import { FinalizacaoPage } from './finalizacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizacaoPageRoutingModule
  ],
  declarations: [FinalizacaoPage]
})
export class FinalizacaoPageModule {}
