import { Component, OnInit } from '@angular/core';
import { PRIMARY_OUTLET, Router } from '@angular/router';
import { StorageService } from '../services/storage-service.service';

@Component({
  selector: 'app-finalizacao',
  templateUrl: './finalizacao.page.html',
  styleUrls: ['./finalizacao.page.scss'],
})
export class FinalizacaoPage {

  constructor(public storageService: StorageService , private router: Router) {}

  public pizza = {
    tamanho: "", 
    sabor: "",
    borda: "",
    observacao: "",
    complemento: "",
  }

  public pessoa = {
    nome: "", 
    cep: "",
    endereço: "",
    endcomp: "",
    bairro:"",
    cidade:"",
    ponto:"",
  }

  async ionViewWillEnter() {
    this.pizza = await this.storageService.get("currentPizza");
    console.warn(this.pizza);
  }

  public async submitPessoa(){
    await this.storageService.set('currentPessoa', this.pessoa);
  }

  public async editarpizza(){
    await this.storageService.set('currentPizza', this.pizza);
    this.router.navigate(['/editar']);
  }
}
