import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeSearchComponent } from './components/home/home-search/home-search.component';
import { SearchListComponent } from './components/search-list/search-list.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: HomeSearchComponent },
      { path: ':id', component: SearchListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
