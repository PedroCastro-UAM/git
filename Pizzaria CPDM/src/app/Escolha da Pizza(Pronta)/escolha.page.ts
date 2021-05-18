import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage-angular';

export interface Pizza{
  tipo: string;
  sabor: string;
  borda: string;
}

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})

export class EscolhaPage implements OnInit {

  private saveToStorage(){
    this.storage.set
  }

  private async loadFromStorage(){

  }

  constructor(private storage: Storage) {
    this.loadFromStorage();
   }

  ngOnInit() {
  }

}
