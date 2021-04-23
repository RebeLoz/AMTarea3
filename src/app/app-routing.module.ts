import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PokemonComponent} from './pokemon/pokemon.component';
import {PokemonInputComponent} from './pokemon/pokemon-input.component';

const routes: Routes = [
  {path: '', component: PokemonComponent},
  {path: 'input', component: PokemonInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
