import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage-service.service';


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss'],
})
export class ContactformComponent implements OnInit {

  constructor(public storageService: StorageService) { }

  public pessoa = {
    nome: "",
    cep: "",
    endereco: "",
    endcomp: "",
    bairro: "",
    cidade: "",
    ponto: "",
  }

  public async submitPessoa() {
    await this.storageService.set('currentPessoa', this.pessoa);
  }
  
  public async saveData(e: any) {
    await this.storageService.set('currentPessoa', this.pessoa);
  }

  async ngOnInit() {
    let pessoa = await this.storageService.get('currentPessoa');
    if (pessoa !== null) {
      this.pessoa = pessoa;
    }
  }

}
