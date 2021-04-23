import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class PokemonService{
  pokemones: string[] = [];
  pokemonChange = new Subject<string[]>();

  constructor(private http:HttpClient){}

  fetchPokemon(){
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
    .pipe(map(response => {
      return response.results.map(obj => obj.name);
    }))
    .subscribe(response => {
      console.warn(response);
      this.pokemones = response;
      this.pokemonChange.next(this.pokemones);
    });
  }

  addPokemon(name: string){
    this.pokemones.push(name);
    this.pokemonChange.next(this.pokemones);
  }

  removePokemon(name: string){
    this.pokemones = this.pokemones.filter(pokemon => {
      return pokemon !== name;
    });
    this.pokemonChange.next(this.pokemones);
  }
}
