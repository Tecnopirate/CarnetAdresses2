import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

import { Router } from '@angular/router';
import { FirebseService } from '../../firebse.service';
import { Address } from '../../address';


@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  @Input() address: Address;
  isAddForm: boolean;

  pokemonType: string[];
  public file:File;
  

  constructor(
    private pokemonService: PokemonService,
    private route: Router,
    private _firebase : FirebseService
    ) {

  }

  ngOnInit(): void {
    this.address.email="";
    this.address.last_name="";

    this.address.telephon="";
   
   // this.pokemonType = this.pokemonService.getPokemonTypeList();
   this.isAddForm = this.route.url.includes('add');
  }

  // hasType(type: string): boolean {
  //  // return this.pokemon.types.includes(type);
  // }

  selecPokemon($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if (isChecked) {
      // this.pokemon.types.push(type);
    } else {
     // const index = this.pokemon.types.indexOf(type);
      // this.pokemon.types.splice(index, 1)
    }
  }

  // hisTypeValid(type: string): boolean {

  //   if (this.pokemon.types.length == 1 && this.hasType(type)) {
  //     return false;
  //   }


  //   if (this.pokemon.types.length > 2 && !this.hasType(type)) {
  //     return false;
  //   }
  //   return true;
  // }

  onSubmit() {
    if(this.isAddForm){
      console.log(this.address);
      this._firebase.saveMessage(this.file,this.address).then();
      //this._firebase.addArticle(this.pokemon).then()
    
     //this.firebseService.saveAdress(this.file,this.pokemon).then()

      
      
    }else{
      // this.pokemonService.updatePokemon(this.pokemon)
      // .subscribe(() => this.route.navigate(['/pokemon',this.pokemon.id]));
    }
   
  }

  choisImage(event:any){
    this.file=event.target.files[0];
    console.log(this.file)
  
    
  }

 
}



