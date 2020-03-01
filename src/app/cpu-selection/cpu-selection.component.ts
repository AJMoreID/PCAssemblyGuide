import { Component, OnInit } from '@angular/core';
import { cpuList } from '../model/cpuList';
import { UserRecordService } from '../userRecord.service';

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
  constructor(private userRecordService:UserRecordService) { }

  ngOnInit(): void {
    this.computerDisplayProfile.type = this.userRecordService.getComputerType();

      console.log(this.computerDisplayProfile.type)
  }

  cpuSelected(value) {
    console.log(value);
    this.computerDisplayProfile.cpuPicked = value;
    console.log(this.computerDisplayProfile);
  }
}
