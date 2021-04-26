import { Component } from '@angular/core';
import { PRIMARY_OUTLET } from '@angular/router';
import { AlertController } from '@ionic/angular';

type Unit = 'bit' | 'byte' | 'kilobit' | 'kilobyte' | 'megabit' | 'megabyte' | 'gigabit' | 'gigabyte' | 'terabit' | 'terabyte';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertRadioBorda() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Bordas',
      inputs: [
        {
          name: 'Recheada - Catupiry',
          type: 'radio',
          label: 'Recheada - Catupiry',
          value: 'value1',
          handler: () => {
            console.log('Radio 1 selected');
          },
          checked: true
        },
        {
          name: 'Croassaint',
          type: 'radio',
          label: 'Croassaint',
          value: 'value2',
          handler: () => {
            console.log('Radio 2 selected');
          }
        },
        {
          name: 'Sem Borda',
          type: 'radio',
          label: 'Sem Borda',
          value: 'value3',
          handler: () => {
            console.log('Radio 3 selected');
          }
        },
        {
          name: 'Recheada - Muçarela',
          type: 'radio',
          label: 'Recheada - Muçarela',
          value: 'value4',
          handler: () => {
            console.log('Radio 4 selected');
          }
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlertRadioMolho() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Molho',
      inputs: [
        {
          name: 'Com Molho',
          type: 'radio',
          label: 'Com Molho',
          value: 'value1',
          handler: () => {
            console.log('Radio 1 selected');
          },
          checked: true
        },
        {
          name: 'Sem Molho',
          type: 'radio',
          label: 'Sem molho',
          value: 'value2',
          handler: () => {
            console.log('Radio 2 selected');
          }
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
  
  async presentAlertCheckboxRecheio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Recheios',
      inputs: [
        {
          name: 'Muçarela',
          type: 'checkbox',
          label: 'Muçarela',
          value: 'value1',
          handler: () => {
            console.log('Checkbox 1 selected');
          },
          checked: true
        },

        {
          name: 'Calabresa',
          type: 'checkbox',
          label: 'Calabresa',
          value: 'value2',
          handler: () => {
            console.log('Checkbox 2 selected');
          }
        },

        {
          name: 'Peperoni',
          type: 'checkbox',
          label: 'Peperoni',
          value: 'value3',
          handler: () => {
            console.log('Checkbox 3 selected');
          }
        },

        {
          name: '4 Queijos',
          type: 'checkbox',
          label: '4 Queijos',
          value: 'value4',
          handler: () => {
            console.log('Checkbox 4 selected');
          }
        },

        {
          name: 'Portuguesa',
          type: 'checkbox',
          label: 'Portuguesa',
          value: 'value5',
          handler: () => {
            console.log('Checkbox 5 selected');
          }
        },
          
        {
          name: 'Brigadeiro',
          type: 'checkbox',
          label: 'Brigadeiro',
          value: 'value6',
          handler: () => {
            console.log('Checkbox 6 selected');
          }
        },
        {
          name: 'Frango',
          type: 'checkbox',
          label: 'Frango',
          value: 'value6',
          handler: () => {
            console.log('Checkbox 6 selected');
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlertRadioTamanho() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Tamanhos',
      inputs: [
        {
          name: '20cm',
          type: 'radio',
          label: '20cm',
          value: 'value1',
          handler: () => {
            console.log('Radio 1 selected');
          },
          checked: true
        },
        {
          name: '30cm',
          type: 'radio',
          label: '25cm',
          value: 'value2',
          handler: () => {
            console.log('Radio 2 selected');
          }
        },
        {
          name: '40cm',
          type: 'radio',
          label: '40cm',
          value: 'value3',
          handler: () => {
            console.log('Radio 3 selected');
          }
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlertCheckboxComplemento() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Complemento',
      inputs: [
        {
          name: 'Muçarela',
          type: 'checkbox',
          label: 'Muçarela',
          value: 'value1',
          handler: () => {
            console.log('Checkbox 1 selected');
          },
          checked: true
        },

        {
          name: 'Calabresa',
          type: 'checkbox',
          label: 'Calabresa',
          value: 'value2',
          handler: () => {
            console.log('Checkbox 2 selected');
          }
        },

        {
          name: 'Peperoni',
          type: 'checkbox',
          label: 'Peperoni',
          value: 'value3',
          handler: () => {
            console.log('Checkbox 3 selected');
          }
        },

        {
          name: 'Tomate',
          type: 'checkbox',
          label: 'Tomate',
          value: 'value4',
          handler: () => {
            console.log('Checkbox 4 selected');
          }
        },

        {
          name: 'Rucula',
          type: 'checkbox',
          label: 'Rucúla',
          value: 'value5',
          handler: () => {
            console.log('Checkbox 5 selected');
          }
        },
          
        {
          name: 'Catupiry',
          type: 'checkbox',
          label: 'Catupiry',
          value: 'value6',
          handler: () => {
            console.log('Checkbox 6 selected');
          }
        },
        {
          name: 'Ovos',
          type: 'checkbox',
          label: 'Ovos',
          value: 'value6',
          handler: () => {
            console.log('Checkbox 6 selected');
          }
        },
        {
          name: 'Cebola',
          type: 'checkbox',
          label: 'Cebola',
          value: 'value6',
          handler: () => {
            console.log('Checkbox 6 selected');
          }
        },
        {
          name: 'Oregano',
          type: 'checkbox',
          label: 'Oregano',
          value: 'value6',
          handler: () => {
            console.log('Checkbox 6 selected');
          }
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}