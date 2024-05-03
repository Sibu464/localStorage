import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

 
  constructor(private localStorageService: LocalStorageService) {}

  saveToLocalStorage() {
    this.localStorageService.setItem('myKey', 'Hello, Local Storage!');
  }

  retrieveFromLocalStorage() {
    const value = this.localStorageService.getItem('myKey');
    console.log(value);
  }
}
