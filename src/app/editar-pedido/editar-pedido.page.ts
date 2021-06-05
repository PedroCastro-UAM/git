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
    tamanho: "", 
    sabor: "",
    borda: "",
    complemento: "",
  }

  constructor(public storageService: StorageService , private router: Router) {}

  public async editarpizza(){
    await this.storageService.set('currentPizza', this.pizza);
    this.router.navigate(['/finalizacao']);
  }

  ngOnInit() {}

}
