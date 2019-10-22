import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  {
    path:'', component: FirstPageComponent
  },
  {
    path:'float-style-page', component: FloatStylePageComponent
  },
  {
    path: 'css-alignment-example', component: CssAlignmentExaplesComponent
  },
  {
    path: 'pseudo-classes', component: PseudoClassesComponent
  },
  {
    path: 'vertical-navigation-demo', component: VerticalNavigationDemoComponent
  },
  {
    path: 'horizontal-navigation-demo-one', component: HorizontalNavigationOneComponent
  },
  {
    path: 'responsive-top-nav', component: ResponsiveTopNavComponent
  },
  {
    path: 'responsive-sidebar', component: ResponsiveSidebarComponent
  },
  {
    path: 'dropdown-one', component: DropdownOneComponent
  },
  {
    path: 'dropdown-two', component: DropdownTwoComponent
  },
  {
    path: 'image-sprites', component: ImageSpritesComponent
  },
  {
    path: 'css-forms-one', component: CssFormOneComponent
  },
  {
    path: 'css-forms-two-responsive', component: CssFormTwoResponsiveComponent
  },

  {
    path: 'css-counters', component: CssCountersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
