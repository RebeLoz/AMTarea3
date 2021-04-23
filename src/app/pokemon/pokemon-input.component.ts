import {Component, Output, EventEmitter} from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon-input',
  templateUrl: 'pokemon-input.component.html',
  styleUrls: ['pokemon-input.component.css']
})

export class PokemonInputComponent{
  nombre: string ='';

  constructor(private service: PokemonService){}

  alta(){
    this.service.addPokemon(this.nombre);
    this.nombre ='';
  }
}
