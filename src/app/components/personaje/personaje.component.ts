import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPersonaje } from 'src/app/interfaces';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonajeComponent {

  @Input() personajeInput: IPersonaje;
  @Output() eliminarPersonaje: EventEmitter<IPersonaje> = new EventEmitter();
  constructor() { }

  eliminar(): void{
    this.eliminarPersonaje.emit(this.personajeInput);
  }

}
