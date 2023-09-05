import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  scrolled: boolean = false;
  navbarOpen = false;

  toggleNavbar() {
    debugger;
    this.navbarOpen = !this.navbarOpen;
  }

  navScrolled(scrolled: boolean) {
    this.scrolled = scrolled;
  }
}
