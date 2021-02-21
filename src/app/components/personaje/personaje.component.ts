import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPersonaje } from 'src/app/interfaces';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent implements OnInit {

  @Input() personajeInput: IPersonaje;
  @Output() eliminarPersonaje: EventEmitter<IPersonaje> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log('llego hasta aqui');
  }

  eliminar(): void{
    this.eliminarPersonaje.emit(this.personajeInput);
  }

}
