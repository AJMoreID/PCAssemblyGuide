import { Component, OnInit } from '@angular/core';
import { cpuList } from '../model/cpuList';
import { UserRecordService } from '../userRecord.service';

@Component({
  selector: 'app-usage-category',
  templateUrl: './usage-category.component.html',
  styleUrls: ['./usage-category.component.css']
})
export class UsageCategoryComponent implements OnInit {
  userProfile;

  homeType = "Home & Office";
  gamingType = "Gaming Setup";
  extremeType = "Extreme Level";
  professionalType = "Professional Computing";

  displayHomeCPU = false;
  displayGamingCPU = false;
  displayExtremeCPU = false;
  displayProfessionalCPU = false;
  displayRole = true;

  cpuList = cpuList;
  image = cpuList[0].imagePath;

  constructor(private userRecord: UserRecordService) { }

  ngOnInit(): void {
  }

  displayHomeCPUPref(){
    this.userRecord.setComputerType(this.homeType)
    console.log(this.userRecord);
    this.displayHomeCPU = true;
    this.displayRole = false;
  }

  displayGamingCPUPref(){
    this.userRecord.setComputerType(this.gamingType)
    console.log(this.userRecord);
    this.displayGamingCPU = true;
    this.displayRole = false;
  }

  displayExtremeCPUPref(){
    this.userRecord.setComputerType(this.extremeType)
    this.displayExtremeCPU = true;
    this.displayRole = false;
  }

  displayProfessionalCPUPref(){
    this.userRecord.setComputerType(this.professionalType)
    this.displayProfessionalCPU = true;
    this.displayRole = false;
  }
}
