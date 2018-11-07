import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/Heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe: Heroe = {
    nombre: "",
    casa: "Marvel",
    bio: ""
  };
  constructor( private _heroeService: HeroesService ) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.heroe);

    this._heroeService.nuevoHeroe(this.heroe).subscribe( data => { console.log(data) });
  }
}
