import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkoutLogComponent } from './workout-log/workout-log.component';
import { ChartsAndStatisticsComponent } from './charts-and-statistics/charts-and-statistics.component';
import { WorkoutTypesComponent } from './workout-types/workout-types.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SocialFeaturesComponent } from './social-features/social-features.component';
import { DataImportAndExportComponent } from './data-import-and-export/data-import-and-export.component';
import { SearchAndFilterComponent } from './search-and-filter/search-and-filter.component';
import { OfflineSupportComponent } from './offline-support/offline-support.component';
import { MobileSupportComponent } from './mobile-support/mobile-support.component';
import { FormsComponent } from './forms/forms.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workout-log', component: WorkoutLogComponent },
  { path: 'charts-and-statistics', component: ChartsAndStatisticsComponent },
  { path: 'workout-types', component: WorkoutTypesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'social-features', component: SocialFeaturesComponent },
  { path: 'data-import-and-export', component: DataImportAndExportComponent },
  { path: 'search-and-filter', component: SearchAndFilterComponent },
  { path: 'offline-support', component: OfflineSupportComponent },
  { path: 'mobile-support', component: MobileSupportComponent },
  { path: 'forms-support', component: FormsComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutLogComponent,
    ChartsAndStatisticsComponent,
    WorkoutTypesComponent,
    ProfileComponent,
    SettingsComponent,
    AuthenticationComponent,
    NotificationsComponent,
    SocialFeaturesComponent,
    DataImportAndExportComponent,
    SearchAndFilterComponent,
    OfflineSupportComponent,
    MobileSupportComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
