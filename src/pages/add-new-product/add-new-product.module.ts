import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewProductPage } from './add-new-product';

@NgModule({
  declarations: [
    AddNewProductPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewProductPage),
  ],
})
export class AddNewProductPageModule {}
