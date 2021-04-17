import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResgistrarusuarioPage } from './resgistrarusuario.page';

const routes: Routes = [
  {
    path: '',
    component: ResgistrarusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResgistrarusuarioPageRoutingModule {}
