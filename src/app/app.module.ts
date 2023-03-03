import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { TweetCardComponent } from './components/tweet-card/tweet-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchTweetInputComponent } from './components/search-tweet-input/search-tweet-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TweetCardComponent,
    FooterComponent,
    SearchTweetInputComponent
  ],
    imports: [
        BrowserModule,
        RouterOutlet,
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
