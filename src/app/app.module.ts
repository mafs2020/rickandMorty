import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// shared module
import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';

// rutas
import { routerModuleAPP } from './app.routes';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PersonajeComponent
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
