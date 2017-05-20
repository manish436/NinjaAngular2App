import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [LoggingService, DataService]
})
export class DirectoryComponent implements OnInit {

  ninjas = [
    { name: 'Yoshi', belt: 'black' },
    { name: 'Ryu', belt: 'red' },
    { name: 'Crystal', belt: 'purple' }
  ];
  constructor(private logger: LoggingService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchData();
  }

  logIt() {
    this.logger.log();
  }

}
