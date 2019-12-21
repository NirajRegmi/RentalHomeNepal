import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRentPage } from './add-rent.page';

const routes: Routes = [
  {
    path: '',
    component: AddRentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRentPageRoutingModule {}
