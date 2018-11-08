import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Heroe } from '../interfaces/heroe.interface';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesUrl: string = "https://fireheroesapp.firebaseio.com/heroes.json";
  heroeUrl: string = "https://fireheroesapp.firebaseio.com/heroes";
  constructor( private http: Http) {

  }

  nuevoHeroe( heroe:Heroe ) {
    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.heroesUrl, body, { headers: headers })
                    .map( (res : any) => {
                      console.log( res.json() );
                      return res.json();
                    });
  }

  actualizarHeroe( heroe:Heroe, key$: string ) {
    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let url = `${ this.heroeUrl }/${ key$ }.json`;
    return this.http.put( url, body, { headers: headers })
                    .map( (res : any) => {
                      console.log( res.json() );
                      return res.json();
                    });
  }

  getHeroe( key$: string) {
    let url = `${ this.heroeUrl }/${ key$ }.json`;

    return this.http.get( url ).map( res => res.json() );
  }

  getHeroes() {
    return this.http.get( this.heroesUrl ).map( res => res.json() );
  }

  borrarHeroe( key$: string ) {
    let url = `${ this.heroeUrl }/${ key$ }.json`;
    return this.http.delete( url ).map( data => data.json() );
  }
}
