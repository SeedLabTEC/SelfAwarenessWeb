import { Routes } from '@angular/router';

import { MonitoringComponent } from './monitoring.component';

export const MonitoringRoutes: Routes = [{

    path: '',
    children: [ {
      path: 'monitoring',
      component: MonitoringComponent
  }]
}];
