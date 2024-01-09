import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  private lastScrollTop = 0;
  isScrollingDown = false;
  isScrollingUp = false;

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

}