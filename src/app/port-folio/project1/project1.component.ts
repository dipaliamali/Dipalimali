import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {

  public image= "../assets/Images/portfolio.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
