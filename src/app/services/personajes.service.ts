import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, Observable, of } from 'rxjs';
import { tap, map, catchError, distinctUntilChanged } from 'rxjs/operators';
import { IPersonaje } from '../interfaces';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  personaje = new Subject<string>();
  personaje$ = this.personaje.asObservable();
  next: string;

  constructor(private http: HttpClient) { }

  getTodosPersonaje(): Observable<IPersonaje[]>{
    // console.log(`${environment.urlServer}?name=${name}`);
    return this.http.get<IPersonaje[]>(`${environment.urlServer}`).pipe(
      tap(data => console.log(data)),
      map((data: any) => {
        this.next = data.info.next;
        return data.results;
      }),
      catchError(err => this.getError(err))
    );
  }

  getTodosPersonajeByNAme(name: string = ''): Observable<IPersonaje[]> {
    console.log('se ejecuto');
    console.log(`${environment.urlServer}?name=${name}`);
    // if(name.length <= 3){
    //   return;
    // }
    console.log('name', name);

    // if(this.next != null) {
      return this.http.get<any>(`${environment.urlServer}?name=${name}`).pipe(
        // solo se emite si el valor cambia
        // https://rxjs-dev.firebaseapp.com/api/operators/distinctUntilChanged
        distinctUntilChanged(),
        tap(data => console.log(data)),
        map((data: any) => {
          this.next = data.info.next;
          return data.results;
      }));
    // }
    // else {
    //   return of([]);
    // }

  }
  getNextCharacter(): Observable<IPersonaje[]> {
    // console.log(this.next);
    if(this.next == null || !this.next){
      return of([]);
    }
    return this.http.get<IPersonaje[]>(this.next).pipe(
      tap((data: any) => this.next = data.info.next),
      map((data: any) => {
        console.log('data?.results', data?.results?.length);
        if(data?.results?.length){
          return data.results;
        } else {
          return [];
        }
      })
      );
  }

  getCharacter(id: number): Observable<IPersonaje>{
    return this.http.get<IPersonaje>(`${environment.urlServer}${id}`);
  }

  getError(error: HttpErrorResponse): Observable<any>{
    console.log(error);
    console.log('nomamessssssssssssssssssssssssssssssssssssssss');
    return of([]);
  }
}
