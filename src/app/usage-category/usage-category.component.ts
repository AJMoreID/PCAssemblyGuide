import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage-category',
  templateUrl: './usage-category.component.html',
  styleUrls: ['./usage-category.component.css']
})
export class UsageCategoryComponent implements OnInit {
  usageSelection = false;
  constructor() { }

  ngOnInit(): void {
  }

}
