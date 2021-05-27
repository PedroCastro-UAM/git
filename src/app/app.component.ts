import { Component } from '@angular/core';
import { StorageService } from './services/storage-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public storageService: StorageService){}
  async ngOnInit() {
      await this.storageService.init();
  }
}