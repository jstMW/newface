import { Component } from '@angular/core';

import {InputTextModule} from 'primeng/inputtext';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import {SplitButton} from 'primeng/splitbutton';
import {MenuItem} from 'primeng/api';
import {Button} from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import {IftaLabel} from 'primeng/iftalabel';
import {FloatLabel} from 'primeng/floatlabel';

@Component({
  selector: 'app-auth',
  imports: [InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    FormsModule,
    SplitButton,
    Button,
    ButtonGroupModule, IftaLabel, FloatLabel],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  username = '';
  password = '';
  sign_in() {
  }
  sign_up() {

  }
  items: MenuItem[] = [
    {label: 'Sign Up'},
    {label: 'Sign In'}
    ]

}
