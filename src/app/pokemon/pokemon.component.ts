import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit, OnDestroy{
  private pokemonSubs: Subscription = new Subscription;
  activo: boolean = true;
  pokemones: string[]=[];
  consultando: boolean =true;
  constructor(private service: PokemonService){}

  ngOnInit(){
    this.service.fetchPokemon();
    this.pokemonSubs = this.service.pokemonChange.subscribe(pokemon => {
      this.pokemones = pokemon;
      this.consultando = false;
    });
  }

  ngOnDestroy(){
    this.pokemonSubs.unsubscribe();
  }

  onRemovePokemon(name: string){
    this.service.removePokemon(name);
  }

  onClickActivar(){
    this.activo=!this.activo;
  }
}
