import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import {
  AboutComponent,
  ContactsComponent,
  FooterComponent,
  HomeComponent,
  NavbarComponent,
} from '../components';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
  ],
  imports: [CommonModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
