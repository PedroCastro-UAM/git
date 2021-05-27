import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizacaoPageRoutingModule } from './finalizacao-routing.module';

import { FinalizacaoPage } from './finalizacao.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    FinalizacaoPageRoutingModule
  ],
  declarations: [FinalizacaoPage]
})
export class FinalizacaoPageModule {}
