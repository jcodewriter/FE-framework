import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { ProductsComponent } from './pages/products/products.component'
import { PurposeComponent } from './pages/purpose/purpose.component'
import { RecipesComponent } from './pages/recipes/recipes.component'
import { MissionComponent } from './pages/mission/mission.component'
import { DoleComponent } from './pages/dole/dole.component'


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'purpose', component: PurposeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'dole', component: DoleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
