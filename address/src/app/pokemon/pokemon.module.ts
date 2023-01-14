import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BordeCardDirective } from '../borde-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { Routes, RouterModule } from '@angular/router';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';


const pokemonroutes: Routes = [
  {path:'edite/pokemon/:id', component: EditPokemonComponent},
  {path:'pokemon/add', component: AddPokemonComponent},
  {path:'pokemon/:id', component: DetailPokemonComponent},
  
  {path:'pokemons', component: ListPokemonComponent},
 
 
];
@NgModule({
  

  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BordeCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonroutes)
    
  ]
})
export class PokemonModule { }
