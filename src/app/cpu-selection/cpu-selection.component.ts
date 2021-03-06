import { Component, OnInit } from '@angular/core';
import { cpuList } from '../model/cpuList';
import { UserRecordService } from '../userRecord.service';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-cpu-selection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cpu-selection.component.html',
  styleUrls: ['./cpu-selection.component.css']
})
export class CpuSelectionComponent implements OnInit {


  public cpuList = cpuList;

  cpuBrandSelected = this.userRecordService.getUserData(this.userRecordService.storageTemplate.cpuBrand);

  filteredCpuList;

  amdChecked = false;
  intelChecked = false;

  themeName = 'default';

  constructor(private themeService: NbThemeService, private userRecordService: UserRecordService, private router: Router) { 

    this.themeService.onThemeChange()
          .subscribe((theme: any) => {
            console.log(`Theme changed to ${theme.name}`);
          });
  }

  ngOnInit(): void {
    this.filterCpuList();

    console.log(this.filteredCpuList)
  }

  changeToDarkTheme(){
    this.themeService.changeTheme('dark');
    this.themeName = 'dark';
    console.log("themChangedTo: ", this.themeName);
  }

  changeToDefaultTheme(){
    this.themeService.changeTheme('default');
    this.themeName = 'default';
    console.log("themChangedTo: ", this.themeName);
  }

  filterCpuList() {
    if (this.cpuBrandSelected == "Intel") {
      this.filteredCpuList = cpuList.filter(element => element.cpuBrand == "Intel");
      this.intelChecked = true;
    } else if (this.cpuBrandSelected == "AMD") {
      this.filteredCpuList = cpuList.filter(element => element.cpuBrand == "AMD");
      this.amdChecked = true;
    } else {
      this.filteredCpuList = this.cpuList;
    }
  }

  amdFilterList() {
    this.filteredCpuList = cpuList.filter(element => element.cpuBrand == "AMD");
    this.amdChecked = true;
    this.intelChecked = false;
  }

  intelFilterList() {
    this.filteredCpuList = cpuList.filter(element => element.cpuBrand == "Intel");
    this.amdChecked = false;
    this.intelChecked = true;
  }

  cpuSelected(value) {
    console.log(value);
    this.userRecordService.setUserData(this.userRecordService.storageTemplate.cpuId, value.cpuId);
    console.log(this.userRecordService.userProfile);
  }

  navToCPU() {

  }

  navToGPU() {
    this.router.navigateByUrl('/gpu');
  }

  navToRAM() {
    this.router.navigateByUrl('/gpu');
  }
  navToStorage() {
    this.router.navigateByUrl('/gpu');
  }

  navToMB() {
    this.router.navigateByUrl('/gpu');
  }

  navToPowerSupply() {
    this.router.navigateByUrl('/gpu');
  }

  navToCase() {
    this.router.navigateByUrl('/gpu');
  }

  backToUsageSelection() {
    this.router.navigateByUrl('/usage');
  }

  nextToGpuSelection() {
    this.router.navigateByUrl('/gpu');
  }
}
