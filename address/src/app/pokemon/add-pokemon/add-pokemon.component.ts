import { Component, OnInit } from '@angular/core';
import { Address } from '../../address';


@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent  implements OnInit{

    address: Address;

    ngOnInit(){
      this.address = new Address();
    }
}
