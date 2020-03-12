import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsModule } from './views/side-nav/views.module';
import { SharedModule } from './shared/shared.module';


const routes: Routes = [
  { path: 'views', loadChildren: () => import('./views/side-nav/views.module').then(m => m.ViewsModule) },
 { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes), ViewsModule, SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
