import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { AllComponent } from './all/all.component';
import { QuartosComponent } from './quartos/quartos.component';
import { SalasComponent } from './salas/salas.component';
import { CozinhasComponent } from './cozinhas/cozinhas.component';
import { BanheirosComponent } from './banheiros/banheiros.component';
import { LavanderiasComponent } from './lavanderias/lavanderias.component';
import { GourmetComponent } from './gourmet/gourmet.component';


@NgModule({
  declarations: [
    AllComponent,
    QuartosComponent,
    SalasComponent,
    CozinhasComponent,
    BanheirosComponent,
    LavanderiasComponent,
    GourmetComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule
  ]
})
export class ServicosModule { }
