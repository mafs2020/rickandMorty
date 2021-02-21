import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    // { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const routerModuleAPP = RouterModule.forRoot(routes);
