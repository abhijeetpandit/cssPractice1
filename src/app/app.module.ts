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
import { ImageSpritesComponent } from './image-sprites/image-sprites.component';
import { CssFormOneComponent } from './css-form-one/css-form-one.component';
import { CssFormTwoResponsiveComponent } from './css-form-two-responsive/css-form-two-responsive.component';
import { CssCountersComponent } from './css-counters/css-counters.component';
import { SiteExampleOneComponent } from './site-example-one/site-example-one.component';
import { CssAdvancedOneComponent } from './css-advanced-one/css-advanced-one.component';
import { CssShadowsComponent } from './css-shadows/css-shadows.component';
import { TransitionDemoComponent } from './transition-demo/transition-demo.component';

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
    DropdownTwoComponent,
    ImageSpritesComponent,
    CssFormOneComponent,
    CssFormTwoResponsiveComponent,
    CssCountersComponent,
    SiteExampleOneComponent,
    CssAdvancedOneComponent,
    CssShadowsComponent,
    TransitionDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
