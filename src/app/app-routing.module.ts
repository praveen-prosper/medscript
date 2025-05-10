import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareComponent } from './software/software.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'software', component: SoftwareComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'software', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
