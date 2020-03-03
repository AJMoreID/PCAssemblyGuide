import { Component, OnInit } from '@angular/core';
import { gpuList } from '../model/gpuList';
import { Router } from '@angular/router';
import { UserRecordService } from '../userRecord.service';

@Component({
  selector: 'app-gpu-selection',
  templateUrl: './gpu-selection.component.html',
  styleUrls: ['./gpu-selection.component.css']
})
export class GpuSelectionComponent implements OnInit {
  public gpuList = gpuList;

  filterGpuList;

  amdChecked = false;
  nviChecked = false;
  
  constructor(private router: Router, private userRecordService: UserRecordService) { }

  ngOnInit(): void {
    this.filterGpuList = gpuList;
  }

  amdFilterList(){
    this.gpuList = gpuList.filter(element => element.gpuBrand == "AMD");
    this.filterGpuList = this.gpuList;
    this.amdChecked = true;
    this.nviChecked = false;
  }

  nviFilterList(){
    this.gpuList = gpuList.filter(element => element.gpuBrand == "Nvidia");
    this.filterGpuList = this.gpuList;
    this.amdChecked = false;
    this.nviChecked = true;
  }

  gpuSelected(value){
    console.log(value)
    this.userRecordService.setUserData(this.userRecordService.storageTemplate.gpuId, value.gpuId);
  }

  navToCPU() {
    this.router.navigateByUrl('/cpu');
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

  backToCpuSelection(){
    this.router.navigateByUrl('/cpu');
  }
}
