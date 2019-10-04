import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  person = {
    firstName: "Thales",
    lastName: "Buarque",
    age: 27,
    address: "Avenida Conselheiro Aguiar" 
  }

  constructor() { }

  ngOnInit() {
  }

}
