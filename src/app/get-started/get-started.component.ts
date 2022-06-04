import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { concat, empty } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';
import { UserRecordService, PcAssembly } from '../userRecord.service';
// elems
const userMessage = document.getElementById('message');
// helper
const delayedMessage = (message, delayedTime = 1500) => {
  return empty().pipe(startWith(message), delay(delayedTime))
};

concat(
  delayedMessage('Want to DIY your private PC?'),
  delayedMessage('CPU?'),
  delayedMessage('GPU?'),
  delayedMessage('Fancy Device?'),
  delayedMessage('All of These in AJMoreID Team!'),
  delayedMessage('', 2000)
)
  .subscribe((message: any) => userMessage.innerHTML = message);
@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  helloWorld: string;
  allPcs: PcAssembly[];

  constructor(private route: Router, private userRecordService: UserRecordService) {}

  ngOnInit(): void {
    // test if successfully calling api from api service (UserRecordService)
    this.userRecordService.getHelloWorld().subscribe(data => {
      console.log(data);
      this.helloWorld = data;
    });
    // call api to show all groups of pcs assembly info
    this.userRecordService.getAllPcsInfo().subscribe(data => {
      /**
       * if console.log("allPcs: ", data);
       * result shows the object in json format, can be viewed
       * wheras console.log("allPcs: " + data);
       * result shows like "allPcs: [object Object]"
       * because the console.log("allPcs: " + data) will regard "allPcs: " + data as a whole string
       */
      console.log("allPcs: ", data);
      this.allPcs = data;
    });
  }

  navTousageSelection() {
    this.route.navigateByUrl('usage');
  }
}
