import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-form-two-responsive',
  templateUrl: './css-form-two-responsive.component.html',
  styleUrls: ['./css-form-two-responsive.component.css']
})
export class CssFormTwoResponsiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert(window.innerWidth + ' ' + window.innerHeight);
  }

  alert1() {
    alert("Hi");
  }

}
