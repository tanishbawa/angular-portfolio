import {
  AboutComponent,
  ContactsComponent,
  FooterComponent,
  HomeComponent,
  NavbarComponent,
} from '../components';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
