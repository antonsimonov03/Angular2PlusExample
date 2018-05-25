import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { NouisliderModule} from 'ng2-nouislider';
import {UiSwitchModule} from 'angular2-ui-switch';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AngularFontAwesomeModule,
    NouisliderModule,
    UiSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
