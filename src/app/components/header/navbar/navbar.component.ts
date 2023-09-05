import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  scrolled: boolean = false;
  navbarOpen = false;

  constructor(private router: Router) {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  navScrolled(scrolled: boolean) {
    this.scrolled = scrolled;
  }

  goToPage(page: string){
    this.router.navigate([page]);
  }
}
