import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExpthreadComponent} from './expthread/expthread.component'



const routes: Routes = [
  {
    path : 'exp',
    component : ExpthreadComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
