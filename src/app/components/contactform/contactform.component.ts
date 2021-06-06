import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage-service.service';
import axios from 'axios';

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

  public async saveData(e: any) {
    await this.storageService.set('currentPessoa', this.pessoa);
  }

  public async onCepChange(e: any) {
    this.pessoa.cep = this.pessoa.cep.replace(/\D/g, '');
    if (this.pessoa.cep.length === 8) {
      axios.get(`https://viacep.com.br/ws/${this.pessoa.cep}/json/`)
        .then(async (e: any) => {
          if (e.data) {
            this.pessoa.endereco = e.data.logradouro;
            this.pessoa.bairro = e.data.bairro;
            this.pessoa.cidade = e.data.localidade;
            await this.storageService.set('currentPessoa', this.pessoa);
          }
        });
    }
  }

  async ngOnInit() {
    let pessoa = await this.storageService.get('currentPessoa');
    if (pessoa !== null) {
      this.pessoa = pessoa;
    }
  }

}
