import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ShellComponent } from './shell/shell.component';

const redirectUnauthorized = () => redirectUnauthorizedTo(['signin']);

const routes: Routes = [
  { path: "signin", loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: "", component: ShellComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorized } },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
