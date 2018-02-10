import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmListComponent } from './film-list/film-list.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { HttpClientModule} from '@angular/common/http';
import { RoutingModule} from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmDetailComponent,
    FilmListComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
