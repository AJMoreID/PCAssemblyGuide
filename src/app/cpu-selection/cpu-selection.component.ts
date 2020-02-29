import { Component, OnInit } from '@angular/core';
import { cpuList } from '../model/cpuList';

@Component({
  selector: 'app-cpu-selection',
  templateUrl: './cpu-selection.component.html',
  styleUrls: ['./cpu-selection.component.css']
})
export class CpuSelectionComponent implements OnInit {
  public cpuList = cpuList;

  constructor() { }

  ngOnInit(): void {
  }

}
