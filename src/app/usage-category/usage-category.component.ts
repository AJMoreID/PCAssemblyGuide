import { Component, OnInit } from '@angular/core';
import { cpuList } from '../model/cpuList';
import { UserRecordService } from '../userRecord.service';
import { userProfile } from '../userProfile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usage-category',
  templateUrl: './usage-category.component.html',
  styleUrls: ['./usage-category.component.css']
})
export class UsageCategoryComponent implements OnInit {

  homeType = "Home & Office";
  gamingType = "Gaming Setup";
  extremeType = "Extreme Level";
  professionalType = "Professional Computing";

  amdPref = "AMD";
  intelPref = "Intel";

  displayHomeCPU = false;
  displayGamingCPU = false;
  displayExtremeCPU = false;
  displayProfessionalCPU = false;
  displayRole = true;

  cpuList = cpuList;
  image = cpuList[0].imagePath;

  constructor(private userRecord: UserRecordService, private router: Router) { }

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

  onAMDPrefSelection(){
    this.userRecord.setCPUPref(this.amdPref);
    this.router.navigateByUrl('/cpu');
  }

  onIntelPrefSelection(){
    this.userRecord.setCPUPref(this.intelPref);
    this.router.navigateByUrl('/cpu');
  }
}
