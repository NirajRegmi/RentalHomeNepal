import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { YouPage } from '../you/you.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'bookmark',
        loadChildren: 'src\app\tabs\bookmark'
      },
      {
        path: 'messages',
        loadChildren: 'src\app\tabs\messages'
      },
      {
        path: 'you',
        loadChildren: 'src\app\tabs\you'
      },
      {
        path: 'add-rent',
        loadChildren: 'src\app\tabs\add-rent',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'src\app\tabs\home'
      }
    ]
  }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule],
} )
export class HomePageRoutingModule { }
