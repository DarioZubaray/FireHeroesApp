import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor( private _heroesService: HeroesService ) {
    this._heroesService.getHeroes().subscribe( (data:any) => {
      for( let key$ in data) {
          this.heroes = data ;
      }
    });
  }

  ngOnInit() {
  }

}
