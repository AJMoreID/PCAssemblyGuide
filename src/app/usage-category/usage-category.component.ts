import { Component, OnInit } from '@angular/core';
import { cpuList } from '../model/cpuList';

@Component({
  selector: 'app-usage-category',
  templateUrl: './usage-category.component.html',
  styleUrls: ['./usage-category.component.css']
})
export class UsageCategoryComponent implements OnInit {
  displayHomeCPU = false;
  displayGamingCPU = false;
  displayExtremeCPU = false;
  displayProfessionalCPU = false;
  displayRole = true;

  cpuList = cpuList;
  image = cpuList[0].imagePath;

  constructor() { }

  ngOnInit(): void {
    console.log(this.image);
  }

  displayHomeCPUPref(){
    this.displayHomeCPU = true;
    this.displayRole = false;
  }

  displayGamingCPUPref(){
    this.displayGamingCPU = true;
    this.displayRole = false;
  }

  displayExtremeCPUPref(){
    this.displayExtremeCPU = true;
    this.displayRole = false;
  }

  displayProfessionalCPUPref(){
    this.displayProfessionalCPU = true;
    this.displayRole = false;
  }
}
