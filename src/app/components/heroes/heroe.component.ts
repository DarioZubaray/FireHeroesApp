import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor( private _heroeService: HeroesService, private router: Router ) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.heroe);

    this._heroeService.nuevoHeroe(this.heroe)
        .subscribe( (data: any) => {
          console.log("id obtenido: " + data);
          this.router.navigate([ '/heroe', data ]);
        }, error => {
          console.log(error);
        });
  }
}
