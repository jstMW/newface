import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CommonModule} from '@angular/common';

//for tailwind
import { PrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
//



@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  visible: boolean = false;

  showDialog() {
    console.log("I got run!");
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }
  constructor(private primeng: PrimeNG) {
    this.primeng.theme.set({
      preset: Aura,
      options: {
        cssLayer: {
          name: 'primeng',
          order: 'tailwind-base, primeng, tailwind-utilities'
        }
      }
    })
  }

  title = 'newface';

}

