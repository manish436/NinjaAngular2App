import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  ninjas = [
    { name: 'Yoshoki', belt: 'black' },
    { name: 'Rey', belt: 'red' },
    { name: 'Christal', belt: 'purple' }
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
