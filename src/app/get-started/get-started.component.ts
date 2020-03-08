import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { concat, empty } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';
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
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navTousageSelection() {
    this.route.navigateByUrl('usage');
  }
}
