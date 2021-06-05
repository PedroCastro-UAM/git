import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPage } from './tela.page';

const routes: Routes = [
  {
    path: '',
    component:TelaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaPageRoutingModule {}
