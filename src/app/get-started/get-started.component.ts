import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navTousageSelection(){
    this.route.navigateByUrl('usage');
    }
}
