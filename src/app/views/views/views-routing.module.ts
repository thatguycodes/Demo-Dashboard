import { SectionsComponent } from './../questions/sections/sections.component';
import { UsersComponent } from './../clients/users/users.component';
import { AssessmentsComponent } from './../clients/assessments/assessments.component';
import { QuestionsComponent } from './../questions/questions.component';
import { ClientsComponent } from './../clients/clients.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewsComponent } from './views.component';

const routes: Routes = [
  { path: '', component: ViewsComponent, 
  children: [
    {path: '', component: DashboardComponent},
    {path: 'clients', component: ClientsComponent},
    {path: 'assessments', component: AssessmentsComponent},
    {path: 'users', component: UsersComponent},
    {path: 'questions', component: QuestionsComponent},
    {path: 'sections', component: SectionsComponent},
    {path: 'dashboard', component: DashboardComponent}
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
