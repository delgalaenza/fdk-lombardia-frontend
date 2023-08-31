import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    const imageContainer = document.querySelector('.image-container');
    const coverImage = new Image();
    coverImage.src = "../assets/src/images/copertina.webp";

    coverImage.onload = () => {
      imageContainer?.classList.add('loaded');
    };

  }
}
