import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalizacaoPage } from './finalizacao.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalizacaoPageRoutingModule {}
