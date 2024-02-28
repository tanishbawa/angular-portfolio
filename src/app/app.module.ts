import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens';
import {
  AboutComponent,
  ContactsComponent,
  FooterComponent,
  NavbarComponent,
} from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: HomeComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
