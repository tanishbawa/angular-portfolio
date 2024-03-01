import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { FooterComponent, NavbarComponent } from 'src/app/components';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [MatCardModule, FooterComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
