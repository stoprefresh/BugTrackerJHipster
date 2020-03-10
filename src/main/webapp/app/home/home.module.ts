import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BugTrackerJhipsterSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [BugTrackerJhipsterSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class BugTrackerJhipsterHomeModule {}
