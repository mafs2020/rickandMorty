import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  data: string;
  constructor(
    private router: Router,
    private personajesSrv: PersonajesService
  ) { }

  ngOnInit(): void {
    this.personajesSrv.personaje$.subscribe(data => console.log(data));
    // this.router.events.subscribe((data: RouterEvent ) => console.log(data.id));
    // console.log(this.router.routerState.snapshot);
  }

  dataChanged(termino: string = '') {
    console.log('se termino de ejecutar');
    this.personajesSrv.personaje.next(termino);
    // this.router.navigateByUrl('/?q=12');
      // this.router.navigate(['/'], { queryParams: { name: datos } });
  }

}
