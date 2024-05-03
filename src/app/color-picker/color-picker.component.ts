import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');


    private loadBackgroundPreferences(): void {
      this.defaultcolor = this.getBackgroundColor();
      window.document.body.style.backgroundColor = this.getBackgroundColor()
    }
    removePreferences(): void {
      localStorage.removeItem(this.storageKey);
      this.loadBackgroundPreferences();
    }
    saveBackgroundColor(color: string): void {
      localStorage.setItem(this.storageKey, color);
      this.loadBackgroundPreferences();
    }
    private getBackgroundColor(): string {
      return localStorage.getItem(this.storageKey) || this.defaultcolor;
    }
    }
  }










}
