import { Component, OnInit } from '@angular/core';
import { cpuList } from '../model/cpuList';
import { UserRecordService } from '../userRecord.service';
import { __userProfile } from '../userProfile.model';
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

  public userProfile: __userProfile;

  constructor(private userRecord: UserRecordService, private router: Router) { }

  ngOnInit(): void {
  }

  displayHomeCPUPref(){
    this.userRecord.setUserData(this.userRecord.storageTemplate.computerType,this.homeType)
    console.log(this.userRecord.userProfile);
    this.displayHomeCPU = true;
    this.displayRole = false;
  }

  displayGamingCPUPref(){
    this.userRecord.setUserData(this.userRecord.storageTemplate.computerType,this.gamingType)
    console.log(this.userRecord);
    this.displayGamingCPU = true;
    this.displayRole = false;
  }

  displayExtremeCPUPref(){
    this.userRecord.setUserData(this.userRecord.storageTemplate.computerType,this.extremeType)
    this.displayExtremeCPU = true;
    this.displayRole = false;
  }

  displayProfessionalCPUPref(){
    this.userRecord.setUserData(this.userRecord.storageTemplate.computerType,this.professionalType)
    this.displayProfessionalCPU = true;
    this.displayRole = false;
  }

  onAMDPrefSelection(){
    this.userRecord.setUserData(this.userRecord.storageTemplate.cpuBrand, this.amdPref);
    console.log(this.userRecord);
    this.router.navigateByUrl('/cpu');
  }

  onIntelPrefSelection(){
    this.userRecord.setUserData(this.userRecord.storageTemplate.cpuBrand, this.intelPref);
    console.log(this.userRecord);
    this.router.navigateByUrl('/cpu');
  }
}
