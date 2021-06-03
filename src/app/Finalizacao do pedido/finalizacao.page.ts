import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage-service.service';

@Component({
  selector: 'app-finalizacao',
  templateUrl: './finalizacao.page.html',
  styleUrls: ['./finalizacao.page.scss'],
})
export class FinalizacaoPage {

  constructor(public storageService: StorageService) { }

  public pizza = {
    tamanho: "", 
    sabor: "",
    borda: "",
    observacao: "",
    complemento: "",
  }

  async ionViewWillEnter() {
    this.pizza = await this.storageService.get("currentPizza");
    console.warn(this.pizza);
  }

}
