import { NgModule } from '@angular/core'
import { ChartModule } from 'angular2-chartjs';

import { DashboardComponent } from './dashboard.component';
import { MyChartComponent } from './my-chart/my-chart.component';

@NgModule({
  imports: [ChartModule],
  declarations: [
    DashboardComponent,
    MyChartComponent
  ]
})
export class DashboardModule{

}
