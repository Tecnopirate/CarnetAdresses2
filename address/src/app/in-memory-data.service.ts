import { Injectable } from '@angular/core';

import {InMemoryDbService} from'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
  
    return{
      pokemons:[
        {
            id: 1,
            name: "Robertson",
            last_Name: "Robertson",
            telephon: "694470146",
            email: "robertson@gmail.com",
            picture: "./assets/man.png",
            types: "Proffsionnel",
           
        },
        {
            id: 2,
            name: "mexin",
            last_Name: "Robertson",
            telephon: "694470146",
            email: "robertson@gmail.com",
            picture: "./assets/user.png",
            types: "client",
            created: new Date()
        },
        {
            id: 3,
            name: "ze",
            last_Name: "Robertson",
            telephon: "694470146",
            email: "robertson@gmail.com",
            picture: "./assets/user.png",
            types: "Mobile",
            
        },
        {
            id: 4,
            name: "mexin",
            last_Name: "Robertson",
          
            telephon: "694470146",
            email: "robertson@gmail.com",
            picture: "./assets/user.png",
            types: "Proffesionnel",
            
        },
        {
            id: 5,
            name: "mexin",
            last_Name: "Robertson",
            telephon: "694470146",
            email: "robertson@gmail.com",
            picture: "./assets/user.png",
            types: "Proffesionnel",
          
        },
        {
            id: 6,
            name: "Rattata",
            telephon: "694470146",
            email: "robertson@gmail.com",
            picture: "./assets/man.png",
            types: "Proffesionnel",
         
        },
        {
            id: 7,
            name: "Piafabec",
            telephon: "694470146",
            email: "robertson@gmail.com",
            picture: "./assets/user.png",
            types: "Proffesionnel",
          
        },
        {
            id: 8,
            name: "Abo",
            telephon: "694470146",
            email: "robertson@gmail.com",
            picture: "./assets/user.png",
            types: "Proffesionnel",
            
        },
        {
            id: 9,
            name: "Robertson",
            telephon: "694470146",
            email: "robertson@gmail.com",
            picture: "./assets/man.png",
            types: "Proffesionnel",
           
        },
        {
            id: 10,
            name: "Mexin",
            telephon: "694470146",
            email: "robertson@gmail.com",
            picture: "./assets/user.png",
            types: "Proffesionnel",
           
        },
        {
            id: 11,
            name: "",
            telephon: "694470146",
            email: "robertson@gmail.com",
            picture: "./assets/user.png",
            types: "Proffesionnel",
            
        },
        {
            id: 12,
            name: "mexin",
            telephon: "694470146",
            email: "robertson@gmail.com",
            picture: "./assets/man.png",
            types: "Proffesionnel",
          
        }
    ]
    }

  }
}
