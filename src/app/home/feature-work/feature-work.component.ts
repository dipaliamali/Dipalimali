import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-work',
  templateUrl: './feature-work.component.html',
  styleUrls: ['./feature-work.component.css']
})
export class FeatureWorkComponent implements OnInit {

  public f1 = "../assets/Images/feature1.jpg";
  public f2 = "../assets/Images/feature2.jpg";
  public f3 = "../assets/Images/feature3.jpg";
   
   
  
  constructor() { }

  ngOnInit(): void {
  }

}
