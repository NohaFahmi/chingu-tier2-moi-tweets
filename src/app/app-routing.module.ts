import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('@modules/dashboard/dashboard.module')
  //     .then(mod => mod.DashboardModule),
  //   canActivate: [AuthGuard],
  //   canLoad: [AuthGuard],
  //   canActivateChild: [HasPrivilegesGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'disabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
