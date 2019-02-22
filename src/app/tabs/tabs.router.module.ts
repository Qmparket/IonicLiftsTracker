import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'back',
        children: [
          {
            path: '',
            loadChildren: '../bodyParts/back/back.module#BackPageModule'
          }
        ]
      },
      {
        path: 'chest',
        children: [
          {
            path: '',
            loadChildren: '../bodyParts/chest/chest.module#ChestPageModule'
          }
        ]
      },
      {
        path: 'abs',
        children: [
          {
            path: '',
            loadChildren: '../bodyParts/core/core.module#CorePageModule'
          }
        ]
      },
      {
        path: 'legs',
        children: [
          {
            path: '',
            loadChildren: '../bodyParts/legs/legs.module#LegsPageModule'
          }
        ]
      },
      {
        path: 'main',
        children: [
          {
            path: '',
            loadChildren: '../shared/main-content/main-content.module#MainContentPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
