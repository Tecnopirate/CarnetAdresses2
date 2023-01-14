import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FirebseService } from '../../firebse.service';
import { Address } from '../../address';



@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {




 name :string|undefined
 

  addressList: Address[]


  constructor(private routeur: Router, private backendFirebaseService: FirebseService) {

  }


  ngOnInit(): void {
    this.name = "search... "
    this.addressList=[];
    this.backendFirebaseService.getArticles().subscribe(async (publications) => {
      this.addressList = publications;
      console.log(this.addressList);
    });

  }

  gotoPokemon(pokemon: Address) {
    this.routeur.navigate(['/pokemon', pokemon.id]);


  }

  searche(){
    if(this.name){
      this.backendFirebaseService.getArticlesByFilter(this.name) .then((address)=>console.log(address))
    }
    
  }
}
