import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage-service.service';


export interface Pizza {
  tipo: string;
  sabor: string;
  borda: string;
}

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})

export class EscolhaPage {

  public pizza = {
    tipo: "escolha",
    tamanho: "", 
    sabor: "",
    borda: "",
    observacao: "",
  }

  constructor(public storageService: StorageService , private router: Router) { }

  public async submitPizza(){
    await this.storageService.set('currentPizza', this.pizza);
    this.router.navigate(['/finalizacao']);
  }

}
