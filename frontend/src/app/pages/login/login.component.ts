import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  typeLogin:{parametro:string}

  public formLogin = new FormGroup({
    email: new FormControl(''),
    contraseña: new FormControl(''),
    origen: new FormControl('')
  })

  constructor(
    private rutaActiva: ActivatedRoute,
    private router:Router
    ) {
    this.typeLogin = {
      parametro: this.rutaActiva.snapshot.params['parametro'] as string
    }

    this.formLogin.get("origen")?.setValue(this.typeLogin.parametro as string)
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.formLogin.get("origen")?.value === "academico"){
      //Metodo para buscar el usuario en academico
      this.router.navigate(['home/academico']);

    }
    else{
      //Metodo para buscar el usuario en institucional
      this.router.navigate(['home/institucional']);
    }
  }

}
