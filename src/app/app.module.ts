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
import { ResultComponent} from './result/result.component';
import { NbThemeModule, NbThemeService, NbTreeGridModule, NbCardModule, NbIconModule, NbSidebarModule, NbLayoutModule, NbButtonModule, NbStepperModule, NbChatModule, NbActionsModule } from '@nebular/theme';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { CpuSelectionComponent } from './cpu-selection/cpu-selection.component';
import { NbCheckboxModule, NbRadioModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { UserRecordService } from './userRecord.service';
import { GpuSelectionComponent } from './gpu-selection/gpu-selection.component';
import { HeaderStepperComponent } from './header-stepper/header-stepper.component';
import { FileIconComponent } from './result/file-icon/file-icon.component';
import { ChatbotComponent } from './result/chatbot/chatbot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    CpuSelectionComponent,
    GpuSelectionComponent,
    HeaderStepperComponent,
    FileIconComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app-routing.module
    NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbRadioModule,
    NbTreeGridModule,
    NbIconModule,
    NbStepperModule,
    NbEvaIconsModule,
    NbChatModule,
    BrowserAnimationsModule,
    NbActionsModule
  ],
  providers: [UserRecordService, NbThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }