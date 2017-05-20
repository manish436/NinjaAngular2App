import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name = 'ninja';
  ninja = {
    name: 'Reu',
    belt: 'black'
  };

  yell(e) {
    alert('I am Yelling from Home component!');
    console.log(e);
  }
}
