import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { auditTime, switchMap, take, tap } from 'rxjs/operators';
import { IPersonaje } from 'src/app/interfaces';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  personajes: IPersonaje[] = [];
  // return an object
  // objRef = window.scrollbars
  currentScroll: number;
  name: string;
  termino: string;
  suscription: Subscription;
  dataFound: boolean = false;
  // mas:HTMLElement;
  haciendoPeticion: boolean = false;

  constructor(
    public personajesSrv: PersonajesService,
    private render: Renderer2,
    private title: Title,
    @Inject(DOCUMENT) private _document
    ) { }
  
  ngOnInit(): void {
    console.log('object');
    this._document.addEventListener('scroll', () => this.currentScroll = window.scrollY);
    this.obtener();
    this.personajesSrv.personaje$.subscribe(
      termino => {
        console.log('este es el termino', termino);
        this.personajesSrv.getTodosPersonajeByNAme(termino).subscribe(data => {
          this.personajes = data;
        })
      });
      // console.log('scroll', this.todo);
  }

  obtener(): void {
    this.suscription = this.personajesSrv.getTodosPersonajeByNAme().pipe(tap(ff => console.log(ff)))
    .subscribe(results => this.personajes = results);

  }

  usuarioEliminado(usuario: any){
    console.log(usuario);
  }
  

  obtenerPorNombre():void {
    this.personajesSrv.getTodosPersonajeByNAme(this.name).subscribe(data => {
      this.personajes = data;
    });
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }
  
  irArriba(){
    // recibe el scrollX y el scrollY
    window.scrollTo(0,0);
  }
  
  getEventScroll(): Observable<IPersonaje[]> {
    console.log('memooooooooooooo');
    console.log(this.currentScroll == (document.body.scrollHeight-1000), 'gggggg');
    if(this.currentScroll >= (document.body.scrollHeight-1000)) {
      return fromEvent(this._document, 'scroll').pipe(
        auditTime(1000),
        take(1),
        switchMap(() => this.personajesSrv.getNextCharacter())
      );
    }
  }

  doSomethingOnScroll(event){
    console.log(event, 'cache');
  }
  // @HostListener("window:scroll", ['$event'])
  // doSomethingOnInternalScroll($event:Event){
  //   console.log((document.body.scrollHeight), 'heigth');
  //   // console.log(this.currentScroll >= (document.body.scrollHeight-1000));
  //   if(this.currentScroll >= (document.body.scrollHeight-1000)) {
  //   //   console.log(this.currentScroll, (document.body.scrollHeight-1000));
  //   if(!this.dataFound) {
  //     this.dataFound = true;
  //     this.getEventScroll().subscribe(data => {
  //       this.personajes = [...this.personajes, ...data];
  //       console.log(this.personajes?.length);
  //       this.dataFound = false;
  //       setTimeout(() => window.scrollTo(0,(document.body.scrollHeight-1100)), 1500);
  //     });
  //   }
  //   }
  // }

  onScroll(){
    console.log('onScroll');
    // this.personajes = [...this.personajes, ...data]
    this.personajesSrv.getNextCharacter()
    .subscribe(caracteres => this.personajes = [...this.personajes, ...caracteres]);
  }
}
