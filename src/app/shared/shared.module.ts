import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PersonajeComponent } from '../components/personaje/personaje.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PersonajeComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule { }
