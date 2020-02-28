import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedComponent } from './get-started/get-started.component';
import { UsageCategoryComponent } from './usage-category/usage-category.component';


const routes: Routes = [
  {path: '', component: GetStartedComponent},
  {path: 'start', component: GetStartedComponent},
  {path: 'usage', component: UsageCategoryComponent},
  {path: '**', component: GetStartedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
