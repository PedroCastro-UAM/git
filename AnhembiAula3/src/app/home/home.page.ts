import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

public aniversariante = {
  nome: "Carolina",
  idade:17
}
public paymentMethod = '';
  constructor() { }

}
