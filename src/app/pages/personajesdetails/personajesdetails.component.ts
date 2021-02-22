import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, switchMap } from 'rxjs/operators';
import { IPersonaje } from 'src/app/interfaces';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajesdetails',
  templateUrl: './personajesdetails.component.html',
  styleUrls: ['./personajesdetails.component.scss']
})
export class PersonajesdetailsComponent implements OnInit {

  personaje$: Observable<IPersonaje>;
  error = false;
  errorMessage: string;
  constructor(
    private route: ActivatedRoute,
    // private location: Location,
    private personajeSrv: PersonajesService
    ) { }

  ngOnInit(): void {
    this.personaje$ = this.route.params.pipe(
      retry(1),
      switchMap((params: Params) => this.personajeSrv.getCharacter(params['id'])),
      catchError((err: HttpErrorResponse) => {
        this.errorMessage = err.message;
        this.error = true;
        return throwError(err);
      }),
    );
  }

  regresar(){
    // this.location.back();
  }

}
