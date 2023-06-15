import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './normalize.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'collector';
}
