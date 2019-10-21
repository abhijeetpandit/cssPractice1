import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloatStylePageComponent } from './float-style-page/float-style-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { CssAlignmentExaplesComponent } from './css-alignment-exaples/css-alignment-exaples.component';
import { PseudoClassesComponent } from './pseudo-classes/pseudo-classes.component';
import { VerticalNavigationDemoComponent } from './vertical-navigation-demo/vertical-navigation-demo.component';
import { HorizontalNavigationOneComponent } from './horizontal-navigation-one/horizontal-navigation-one.component';
import { ResponsiveTopNavComponent } from './responsive-top-nav/responsive-top-nav.component';
import { ResponsiveSidebarComponent } from './responsive-sidebar/responsive-sidebar.component';
import { DropdownOneComponent } from './dropdown-one/dropdown-one.component';
import { DropdownTwoComponent } from './dropdown-two/dropdown-two.component';

@NgModule({
  declarations: [
    AppComponent,
    FloatStylePageComponent,
    FirstPageComponent,
    CssAlignmentExaplesComponent,
    PseudoClassesComponent,
    VerticalNavigationDemoComponent,
    HorizontalNavigationOneComponent,
    ResponsiveTopNavComponent,
    ResponsiveSidebarComponent,
    DropdownOneComponent,
    DropdownTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
