import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1: String = "";
  name2: String = "";

  client = {
    firstName:  "Thales",
    lastName: "Buarque",
  }

  constructor() { }

  ngOnInit() {
  }

}
