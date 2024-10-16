import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchModule } from './user-search/user-search.module';

const routes: Routes = [
  { path: 'user-search', loadChildren: () => import('./user-search/user-search.module').then(m => m.UserSearchModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
