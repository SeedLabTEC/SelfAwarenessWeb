import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonitoringComponent } from './monitoring.component';

import { MonitoringRoutes } from './monitoring.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(MonitoringRoutes),
        FormsModule
    ],
    declarations: [MonitoringComponent]
})

export class MonitoringModule {}
