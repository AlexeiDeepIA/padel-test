import { Component, HostListener  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  private lastScrollTop = 0;
  isScrollingDown = false;
  isScrollingUp = false;
  currentPage: string;
  currentMenuColor!: string;
  animateColorChange = false;

  constructor (private router: Router) {
    this.currentPage = this.router.url;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.scrollY;

    if (st > this.lastScrollTop) {
      this.isScrollingDown = true;
      this.isScrollingUp = false;
    } else {
      this.isScrollingDown = false;
      this.isScrollingUp = true;
    }
    this.lastScrollTop = st;
  }

  isCurrentPage(route: string): boolean{
    return this.currentPage.includes(route);
  }
}
