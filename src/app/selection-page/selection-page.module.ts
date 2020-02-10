import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectionPagePageRoutingModule } from './selection-page-routing.module';

import { SelectionPagePage } from './selection-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectionPagePageRoutingModule
  ],
  declarations: [SelectionPagePage]
})
export class SelectionPagePageModule {}
