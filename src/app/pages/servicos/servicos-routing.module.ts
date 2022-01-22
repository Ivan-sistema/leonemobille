import { SalasComponent } from './salas/salas.component';
import { CozinhasComponent } from './cozinhas/cozinhas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { QuartosComponent } from './quartos/quartos.component';
import { GourmetComponent } from './gourmet/gourmet.component';
import { LavanderiasComponent } from './lavanderias/lavanderias.component';
import { BanheirosComponent } from './banheiros/banheiros.component';

const routes: Routes = [
  { path: '', component: AllComponent },
  { path: 'quartos', component: QuartosComponent },
  { path: 'cozinhas', component: CozinhasComponent },
  { path: 'gourmets', component: GourmetComponent },
  { path: 'lavanderias', component: LavanderiasComponent },
  { path: 'salas', component: SalasComponent },
  { path: 'banheiros', component: BanheirosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicosRoutingModule {}
