import { Component, OnInit } from '@angular/core';
import {FormsModule, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  myForm;

  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(2)]],
      apellido:['',[Validators.required,Validators.minLength(2)]],
      telefono:['',[Validators.minLength(8),Validators.maxLength(10)]],
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]]
    })
  }

}
