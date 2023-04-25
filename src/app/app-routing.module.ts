import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeSearchComponent } from './components/home/home-search/home-search.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: HomeSearchComponent },
      { path: 'legalNotice', component: LegalNoticeComponent },
      { path: ':id', component: SearchListComponent },
      { path: 'photos/:id', component: PhotoDetailsComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
