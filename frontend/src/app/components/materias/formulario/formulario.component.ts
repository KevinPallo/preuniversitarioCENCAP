import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup , FormControl, Validators} from '@angular/forms';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() eventSubmit = new EventEmitter()

  public formNuevaMateria = new FormGroup({
    nombre: new FormControl(''),
    quimestre: new FormControl(''),
    tipo: new FormControl(''),
    cupos: new FormControl(''),
    costo: new FormControl(''),

  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formNuevaMateria.value)
    this.eventSubmit.emit()
  }

}
