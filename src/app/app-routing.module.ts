import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/autenticacao/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'resgistrarusuario',
    loadChildren: () => import('./pages/autenticacao/resgistrarusuario/resgistrarusuario.module').then( m => m.ResgistrarusuarioPageModule)
  },
  {
    path: 'recuperarsenha',
    loadChildren: () => import('./pages/autenticacao/recuperarsenha/recuperarsenha.module').then( m => m.RecuperarsenhaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'embarcados',
    loadChildren: () => import('./pages/embarcados/embarcados.module').then( m => m.EmbarcadosPageModule)
  },
  {
    path: 'ambientes',
    loadChildren: () => import('./pages/ambiente/ambiente.module').then( m => m.AmbientePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
