import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloatStylePageComponent } from './float-style-page/float-style-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { CssAlignmentExaplesComponent } from './css-alignment-exaples/css-alignment-exaples.component';
import { PseudoClassesComponent } from './pseudo-classes/pseudo-classes.component';

@NgModule({
  declarations: [
    AppComponent,
    FloatStylePageComponent,
    FirstPageComponent,
    CssAlignmentExaplesComponent,
    PseudoClassesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
