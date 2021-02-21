/* eslint-disable eol-last */
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajesdetailsComponent } from './personajesdetails/personajesdetails.component';

const routes: Routes = [
    { path: '',
    component: InicioComponent,
        children: [
            { path: '', component: PersonajesComponent, data: {titulo: 'personajes'} },
            { path: 'personaje/:id', component: PersonajesdetailsComponent, data:{titulo: 'persoanje detalle'} },
        ]
    },
];

export const ROUTERMODULECHILD = RouterModule.forChild(routes);