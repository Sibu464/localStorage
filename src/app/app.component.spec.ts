import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="saveToLocalStorage()">Save to Local Storage</button>
    <button (click)="retrieveFromLocalStorage()">Retrieve from Local Storage</button>
  `
})
export class AppComponent {
  constructor(private localStorageService: LocalStorageService) {}

  saveToLocalStorage() {
    this.localStorageService.setItem('myKey', 'Hello, Local Storage!');
  }

  retrieveFromLocalStorage() {
    const value = this.localStorageService.getItem('myKey');
    console.log(value);
  }
}