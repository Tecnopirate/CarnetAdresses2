import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PokemonService } from '../pokemon.service';
import { FirebseService } from 'src/app/firebse.service';
import { Address } from '../../address';
import { doc, deleteDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  pokemonlist:any[];
  address:any;
  constructor( private Aroute: ActivatedRoute,private router: Router,private pokemonService :PokemonService,private firebaseService:FirebseService,private _fireStore:Firestore){

  }

  async ngOnInit(): Promise<void> {
   
    const addressId: string|null = this.Aroute.snapshot.paramMap.get('id');
    if(addressId){
      this.firebaseService.getArticles().subscribe((article)=>{
        const art = article;
        art.forEach(a=>{
          if(a.id==addressId)
          this.address =a;
        })
      })

     

    }
   
  }

  gotoPokemonList(){
    this.router.navigate(['/pokemons']);
  }

  gotoEditPokemon(address:Address){
    this.router.navigate(['edite/pokemon/',address.id]);
  }


  async deletePokemon(id:string){
    
   
    await deleteDoc(doc(this._fireStore, "address", id)).then(()=>{
      console.log('ok')
    });


  }
}
