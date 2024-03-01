import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  githubLink = 'https://github.com/tanishbawa';
  email = 'tanishbawa15@gmail.com';
  constructor(public router: Router) {}

  ngOnInit(): void {}

  onHomePress() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  onGithubPress() {
    window.open(this.githubLink);
  }
}
