import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    const imageContainer = document.querySelector('.image-container');
    const coverImage = new Image();
    coverImage.src = "../assets/src/images/copertina.webp";

    coverImage.onload = () => {
      imageContainer?.classList.add('loaded');
    };
  }

}
