import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedComponent } from './shared.component';
import { IconsModule } from './icons/icons.module';

const routes: Routes = [{ path: '', component: SharedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), IconsModule],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
