import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sub-route',
  templateUrl: './sub-route.component.html',
  styleUrls: ['./sub-route.component.css']
})
export class SubRouteComponent implements   OnInit {
  
  constructor(private route : ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    
  }
  goToPag1(){
    this.route.navigate(['page1'], {relativeTo:this.route})
  }

  goToPag2(){
    this.route.navigate(['page2'], {relativeTo:this.route})
  }
}
