import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  typeLogin:{parametro:string}

  constructor(private rutaActiva: ActivatedRoute) {
    this.typeLogin = {
      parametro: this.rutaActiva.snapshot.params['parametro'] as string
    }
   }

  ngOnInit(): void {
  }

}
