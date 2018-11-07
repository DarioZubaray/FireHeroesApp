import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/Heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  private heroe: Heroe = {
    nombre: "",
    casa: "Marvel",
    bio: ""
  };

  nuevo: boolean = false;
  id: string;

  constructor( private _heroeService: HeroesService, private router: Router,
                private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( parametros => {
      this.id = parametros['id'];
      if( this.id !== 'nuevo') {
        this._heroeService.getHeroe(this.id).subscribe( (data: any) => {
          this.heroe = data;
        });
      } else {

      }
    });
  }

  ngOnInit() {
  }

  guardar(){
    console.log(this.heroe);

    if( this.id == 'nuevo' ) {
      this._heroeService.nuevoHeroe(this.heroe)
          .subscribe( (data: any) => {
            console.log("id obtenido: " + data.name);
            this.router.navigate([ '/heroe', data.name ]);
          }, error => {
            console.log(error);
          });
    } else {
      this._heroeService.actualizarHeroe(this.heroe, this.id)
          .subscribe( (data: any) => {
            console.log("data obtenida: " + data);
          }, error => {
            console.log(error);
          });
    }

  }
}
