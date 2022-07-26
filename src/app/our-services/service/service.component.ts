import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {


   designconst:string="../assets/Images/designconst.jpg";
   houserenovation:string="../assets/Images/houserenovation.jpg";
   greenbuilding:string="../assets/Images/greenbuilding.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
