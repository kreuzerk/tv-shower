import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    loadChildren: () =>
      import('./features/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'add-show',
    loadChildren: () =>
      import('./features/add-show/add-show.module').then(
        (m) => m.AddShowModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
