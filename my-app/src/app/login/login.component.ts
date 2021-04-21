import { Component, OnInit } from '@angular/core';
import {FormsModule, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm;

  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nombre:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

}
