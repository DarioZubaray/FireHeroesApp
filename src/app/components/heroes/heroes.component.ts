import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  loading: boolean = true;

  constructor( private _heroesService: HeroesService ) {
    this._heroesService.getHeroes().subscribe( (data:any) => {
      for( let key$ in data) {
          setTimeout( ()=> {
            this.heroes = data;
            this.loading = false;
          }, 3000);
      }
    });
  }

  ngOnInit() {
  }

  borrarHeroe( key$: string ) {
    this._heroesService.borrarHeroe(key$).subscribe( data => {
      if( data) {
        console.error(data);
      } else {
        delete this.heroes[key$];
      }
    });
  }
}
