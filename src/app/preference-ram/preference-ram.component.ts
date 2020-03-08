import { Component, OnInit, ɵConsole } from '@angular/core';
import { ramList } from '../model/ramList';
import { Router } from '@angular/router';
import { UserRecordService } from '../userRecord.service';

@Component({
  selector: 'app-preference-ram',
  templateUrl: './preference-ram.component.html',
  styleUrls: ['./preference-ram.component.css']
})
export class PreferenceRamComponent implements OnInit {
  public ramList = ramList;
  filteredRam;

  constructor(private router: Router, private userRecord: UserRecordService) { }

  ngOnInit(): void {
    this.filteredRam = ramList;
  }

  filter8GRam() {
    this.filteredRam = ramList.filter(element => element.ramSize == 8);
  }

  filter16GRam() {
    this.filteredRam = ramList.filter(element => element.ramSize == 16);
  }

  filter32GRam() {
    this.filteredRam = ramList.filter(element => element.ramSize == 32);
  }

  filter64GRam() {
    this.filteredRam = ramList.filter(element => element.ramSize == 64);
  }

  backToGPUSelection() {
    this.router.navigateByUrl('/gpu');
  }

  nextToStorageSelection() {
    this.router.navigateByUrl('/storage');
  }

  ramSelected(value) {
    this.userRecord.setUserData(this.userRecord.storageTemplate.ramId, value.ramId)
    console.log(value);
    console.log(this.userRecord.userProfile);
  }

  navToGPU() {
    this.router.navigateByUrl('/gpu');
  }

  navToCPU() {
    this.router.navigateByUrl('/cpu');
  }
  navToStorage() {
    this.router.navigateByUrl('/storage');
  }

  navToMB() {
    this.router.navigateByUrl('/mb');
  }

  navToPowerSupply() {
    this.router.navigateByUrl('/ps');
  }

  navToCase() {
    this.router.navigateByUrl('/case');
  }

  navToRAM() {
    this.router.navigateByUrl('/ram');
  }
}
