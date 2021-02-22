import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';

// shared module
import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';

// rutas
import { routerModuleAPP } from './app.routes';
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    routerModuleAPP,
    SharedModule,
    HttpClientModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
