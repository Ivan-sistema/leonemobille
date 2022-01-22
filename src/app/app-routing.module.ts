import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'quem-somos',
    loadChildren: () =>
      import('./pages/leonemobille/leonemobille.module').then(
        (m) => m.LeonemobilleModule
      ),
  },
  {
    path: 'servicos',
    loadChildren: () =>
      import('./pages/servicos/servicos.module').then((m) => m.ServicosModule),
  },
  {
    path: 'contato',
    loadChildren: () =>
      import('./pages/contato/contato.module').then((m) => m.ContatoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
