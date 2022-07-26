import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  
  img1:string="../assets/Images/img1.jpg";
  img2:string="../assets/Images/img2.jpg";
  img3:string="../assets/Images/img3.jpg";
  constructor() { }

  ngOnInit(): void {
  }
  //images = ['../assets/Images/img11.jpg','../assets/Images/img22.jpg','../assets/Images/img11.jpg'];
}
