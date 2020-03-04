import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { IconsModule } from 'src/app/shared/icons/icons.module';


@NgModule({
  declarations: [ViewsComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    IconsModule
  ]
})
export class ViewsModule { }
