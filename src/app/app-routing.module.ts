import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'back', loadChildren: './bodyParts/back/back.module#BackPageModule' },
  { path: 'core', loadChildren: './bodyParts/core/core.module#CorePageModule' },
  { path: 'legs', loadChildren: './bodyParts/legs/legs.module#LegsPageModule' },
  { path: 'chest', loadChildren: './bodyParts/chest/chest.module#ChestPageModule' },
  { path: 'main-content', loadChildren: './shared/main-content/main-content.module#MainContentPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
