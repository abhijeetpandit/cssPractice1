import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FloatStylePageComponent } from './float-style-page/float-style-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { CssAlignmentExaplesComponent } from './css-alignment-exaples/css-alignment-exaples.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
