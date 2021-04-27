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

}

