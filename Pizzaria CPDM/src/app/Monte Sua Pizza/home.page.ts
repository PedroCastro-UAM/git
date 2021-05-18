import { Component } from '@angular/core';
import { PRIMARY_OUTLET, Router } from '@angular/router';
import { StorageService } from '../services/storage-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public pizza = {
    tamanho: "", 
    sabor: "",
    borda: "",
    complemento: "",
  }

  constructor(public storageService: StorageService , private router: Router) {}

    public async continuarPizza(){
      await this.storageService.set('currentPizza', this.pizza);
      this.router.navigate(['/finalizacao']);
    }
}