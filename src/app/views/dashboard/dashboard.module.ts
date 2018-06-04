import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TableUserComponent } from './table-user/table-user.component';
import { StatisticalComponent } from './statistical/statistical.component';
import { ListUserService } from './../../services/list-user.service';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    ButtonsModule.forRoot()
  ],
  declarations: [DashboardComponent, TableUserComponent, StatisticalComponent,],
  providers : [ListUserService]
})
export class DashboardModule { }
