import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {I18nTestModule} from 'i18n-test/i18n-test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    I18nTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
