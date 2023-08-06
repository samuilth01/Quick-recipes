import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './core/error/error.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'recipies',
    component: RecipesListComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  { path: 'error', component: ErrorComponent },

  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
