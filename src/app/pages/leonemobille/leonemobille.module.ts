import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeonemobilleRoutingModule } from './leonemobille-routing.module';
import { LeonemobilleComponent } from './leonemobille.component';


@NgModule({
  declarations: [
    LeonemobilleComponent
  ],
  imports: [
    CommonModule,
    LeonemobilleRoutingModule
  ]
})
export class LeonemobilleModule { }
