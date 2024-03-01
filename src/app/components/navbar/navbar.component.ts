import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  onHomePress() {
    this.router.navigate(['/']);
  }
  onSkillsPress() {
    const skillSelection = document.getElementById('skills-section');
    if (skillSelection) {
      skillSelection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  onAboutPress() {
    this.router.navigate(['/About']);
  }
  onContactsPress() {
    this.router.navigate(['/Contacts']);
  }
}
