import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Monte Sua Pizza/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tela',
    loadChildren: () => import('./Tela Inicial/tela.module').then( m => m.TelaPageModule)
  },
  {
    path: 'escolha',
    loadChildren: () => import('./Escolha da Pizza(Pronta)/escolha.module').then( m => m.EscolhaPageModule)
  },
  {
    path: 'finalizacao',
    loadChildren: () => import('./Finalizacao do pedido/finalizacao.module').then( m => m.FinalizacaoPageModule)
  },
  {
    path: 'agradecimento',
    loadChildren: () => import('./Agradecimento/agradecimento.module').then( m => m.AgradecimentoPageModule)
  },  {
    path: 'editar-pedido',
    loadChildren: () => import('./editar-pedido/editar-pedido.module').then( m => m.EditarPedidoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
