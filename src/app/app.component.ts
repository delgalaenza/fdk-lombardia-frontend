import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fdk-lombardia-frontend';

  carouselItems = [
    { id: 1, title: 'First Slide' },
    { id: 2, title: 'Second Slide' },
    { id: 3, title: 'Third Slide' }
  ];
}
