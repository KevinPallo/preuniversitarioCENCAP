import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup , FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrls: ['./home-account.component.css']
})
export class HomeAccountComponent implements OnInit {

  typeLogin:{parametro:string}
  public addCurso:Boolean = false
  public materias:Boolean = true


  public formBuscar = new FormGroup({
    inputBuscar: new FormControl(''),
  })

  constructor(private rutaActiva: ActivatedRoute) { 
    this.typeLogin = {
      parametro: this.rutaActiva.snapshot.params['parametro'] as string
    }

    if(this.typeLogin.parametro === "institucional"){
      this.addCurso = true
    }
  }

  ngOnInit(): void {

  }

  buscar(){
    console.log(this.formBuscar.value)
  }

  activarFormulario(){
    this.materias = false
  }

  activarMaterias(){
    this.materias = true
    
  }
}
