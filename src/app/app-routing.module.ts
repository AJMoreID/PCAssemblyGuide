import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedComponent } from './get-started/get-started.component';
import { UsageCategoryComponent } from './usage-category/usage-category.component';
import { BudgetComponent } from './budget/budget.component';
import { CpuSelectionComponent } from './cpu-selection/cpu-selection.component';

const routes: Routes = [
  {path: 'start', component: GetStartedComponent},
  {path: 'usage', component: UsageCategoryComponent},
  {path: 'budget', component: BudgetComponent},
  {path: 'cpu', component: CpuSelectionComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
