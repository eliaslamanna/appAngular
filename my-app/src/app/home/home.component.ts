import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  productos = [
    {
      nombre:"silla",
      precio:"100"
    },
    {
      nombre:"tele",
      precio:"200"
    },
    {
      nombre:"monitor",
      precio:"300"
    }
  ];
  
  ngOnInit(): void {
  }

}
