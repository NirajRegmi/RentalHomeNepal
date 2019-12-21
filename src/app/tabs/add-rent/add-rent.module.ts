import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRentPageRoutingModule } from './add-rent-routing.module';

import { AddRentPage } from './add-rent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRentPageRoutingModule
  ],
  declarations: [AddRentPage]
})
export class AddRentPageModule {}
