import { ClientsComponent } from './../clients/clients.component';
import { AssessmentsComponent } from './../clients/assessments/assessments.component';
import { UsersComponent } from './../clients/users/users.component';
import { SectionsComponent } from './../questions/sections/sections.component';
import { QuestionsComponent } from './../questions/questions.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ViewsComponent, DashboardComponent, QuestionsComponent, SectionsComponent, UsersComponent, AssessmentsComponent, ClientsComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    IconsModule,
    SharedModule
  ],
  exports: [ViewsComponent, DashboardComponent, QuestionsComponent, SectionsComponent, UsersComponent, AssessmentsComponent, ClientsComponent]
})
export class ViewsModule { }
