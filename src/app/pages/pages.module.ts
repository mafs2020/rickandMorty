import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ROUTERMODULECHILD } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajesdetailsComponent } from './personajesdetails/personajesdetails.component';

// import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [PersonajesComponent, PersonajesdetailsComponent],
  imports: [
    CommonModule,
    ROUTERMODULECHILD,
    SharedModule,
    // InfiniteScrollModule
  ]
})
export class PagesModule { }
