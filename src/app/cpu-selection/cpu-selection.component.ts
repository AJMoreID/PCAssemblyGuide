import { Component, OnInit } from '@angular/core';
import { cpuList } from '../model/cpuList';
import { UserRecordService } from '../userRecord.service';
import { Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-cpu-selection',
  templateUrl: './cpu-selection.component.html',
  styleUrls: ['./cpu-selection.component.css']
})
export class CpuSelectionComponent implements OnInit {
  public cpuList = cpuList;
  public computerDisplayProfile = {
    type: "",
    cpuPref: "",
    cpuPicked: ""
  }

  filteredCpuList;

  amdChecked = false;
  intelChecked = false;

  constructor(private userRecordService:UserRecordService, private router: Router) { }

  ngOnInit(): void {
    this.computerDisplayProfile.cpuPref = this.userRecordService.getCPUPref();
    if(this.computerDisplayProfile.cpuPref == "AMD"){
      this.amdChecked = true;
    } else {
      this.intelChecked = true;
    }
    this.computerDisplayProfile.type = this.userRecordService.getComputerType();
    this.filterCpuList();
    console.log(this.filteredCpuList)
  }

  filterCpuList(){
    if(this.computerDisplayProfile.cpuPref == "Intel"){
      this.filteredCpuList = cpuList.filter(element => element.cpuBrand == "Intel");
    }
    if (this.computerDisplayProfile.cpuPref == "AMD"){
      this.filteredCpuList = cpuList.filter(element => element.cpuBrand == "AMD");
    }
  }

  amdFilterList(){
    this.filteredCpuList = cpuList.filter(element => element.cpuBrand == "AMD");
    this.amdChecked = true;
    this.intelChecked = false;
  }

  intelFilterList(){
    this.filteredCpuList = cpuList.filter(element => element.cpuBrand == "Intel");
    this.amdChecked = false;
    this.intelChecked = true;
  }

  cpuSelected(value) {
    console.log(value);
    this.computerDisplayProfile.cpuPicked = value.cpuId;
    console.log(this.computerDisplayProfile);
  }

  cpuHighlight(cpu){
    this.computerDisplayProfile.cpuPicked === cpu;
    console.log(this.computerDisplayProfile.cpuPicked);
  }

  backToUsageSelection(){
    this.router.navigateByUrl('/usage');
  }
  
  nextToGpuSelection(){
    this.router.navigateByUrl('/gpu');
  }
}
