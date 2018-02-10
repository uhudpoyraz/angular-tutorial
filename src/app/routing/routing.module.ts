import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {FilmDetailComponent} from '../film-detail/film-detail.component';
import {FilmListComponent} from '../film-list/film-list.component';


const routes: Routes = [
  {path: '', component : FilmListComponent, pathMatch : 'full'},
  {path: 'detail/:id' , component: FilmDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
