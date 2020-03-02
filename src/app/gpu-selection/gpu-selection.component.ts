import { Component, OnInit } from '@angular/core';
import { gpuList } from '../model/gpuList';

@Component({
  selector: 'app-gpu-selection',
  templateUrl: './gpu-selection.component.html',
  styleUrls: ['./gpu-selection.component.css']
})
export class GpuSelectionComponent implements OnInit {
  public gpuList = gpuList;
  
  constructor() { }

  ngOnInit(): void {
  }

}
