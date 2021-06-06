import { Component, OnInit } from '@angular/core';
import { PRIMARY_OUTLET, Router } from '@angular/router';
import { StorageService } from '../services/storage-service.service';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.page.html',
  styleUrls: ['./editar-pedido.page.scss'],
})
export class EditarPedidoPage implements OnInit {

  public pizza = {
    tipo: "",
    tamanho: "", 
    sabor: "",
    borda: "",
    complemento: "",
    observacao: "",
  }

  constructor(public storageService: StorageService , private router: Router) {}

  async ionViewWillEnter() {
    this.pizza = await this.storageService.get("currentPizza");
    console.warn(this.pizza);
  }

  public async editarpizza(){
    await this.storageService.set('currentPizza', this.pizza);
    this.router.navigate(['/finalizacao']);
  }

  ngOnInit() {}

}
