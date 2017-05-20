import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = 'Welcome to the Ninja Directory!';
//  @Input() ninja;
//  @Output() onYell = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


//  fireYellEvent(e) {
//    this.onYell.emit(e);
//  }

}
