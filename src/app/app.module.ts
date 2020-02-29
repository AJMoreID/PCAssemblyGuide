import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { RoleSelectionComponent } from './role-selection/role-selection.component';
import { UsageCategoryComponent } from './usage-category/usage-category.component';
import { BudgetComponent } from './budget/budget.component';
import { PreferenceGpuComponent } from './preference-gpu/preference-gpu.component';
import { PreferenceCpuComponent } from './preference-cpu/preference-cpu.component';
import { PreferenceRamComponent } from './preference-ram/preference-ram.component';
import { ResultComponent, FsIconComponent } from './result/result.component';
import { NbThemeModule, NbThemeService, NbTreeGridModule, NbCardModule, NbIconModule, NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    RoleSelectionComponent,
    UsageCategoryComponent,
    BudgetComponent,
    PreferenceGpuComponent,
    PreferenceCpuComponent,
    PreferenceRamComponent,
    ResultComponent,
    FsIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app-routing.module
    NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbTreeGridModule,
    NbCardModule,
    NbIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
