import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Newapp';
  name = 'Lotanna';
  text = 'hi,welcome to ghana'
  friend = {
    'name': 'Hafeez Babatunde',
    'car': 'Tesla Roadstar',
    'age': 15
  }
}
