import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'users',  loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule)  },
  { path: 'lives', loadChildren: () => import('./views/lives/lives.module').then(m => m.LivesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
