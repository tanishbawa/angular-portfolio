import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  showEducation: boolean = true;
  showProjects: boolean = true;

  projects = [
    { name: 'Project 1', description: 'Static discription for now' },
    { name: 'Project 2', description: 'Static discription for now' },
    { name: 'Project 3', description: 'Static discription for now' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
