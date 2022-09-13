import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  typeLogin:{parametro:string}


  public formRegister = new FormGroup({
      nombres: new FormControl(null, Validators.required),
      apellidos: new FormControl(null, Validators.required),
      email: new FormControl('', Validators.required),
      ci: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl(''),
      direccion: new FormControl(''),
      contraseña: new FormControl('', Validators.required),
      confContraseña: new FormControl('', Validators.required),
      origen: new FormControl('')
  })

  constructor(
    private rutaActiva: ActivatedRoute,
    private router:Router
  ) {
    this.typeLogin = {
      parametro: this.rutaActiva.snapshot.params['parametro'] as string
    }
    this.formRegister.get("origen")?.setValue(this.typeLogin.parametro as string)
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.formRegister.valid) {
      if(this.formRegister.get("contraseña")?.value === this.formRegister.get("confContraseña")?.value){
        alert("Usurio creado correctamente")
        this.clasificarUser(this.formRegister)
      }
      else{
        alert("Las contraseñas no son iguales")
      }
    }else{
      alert("Llenar todos los campos")
    } 
  }

  clasificarUser(formulario: FormGroup){
    if(formulario.get("origen")?.value === "academico"){
      //Metodo para guardar academico
      this.router.navigate(['login/academico']);
    }else{
      //Metodo para guardar institucional
      this.router.navigate(['login/institucional']);
    }
  }

}
