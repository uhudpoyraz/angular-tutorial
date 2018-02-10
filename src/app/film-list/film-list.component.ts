import { Component, OnInit } from '@angular/core';
import {FilmService} from '../providers/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
  providers: [FilmService]
})
export class FilmListComponent implements OnInit {

  constructor(private filmService: FilmService) { }

  filmList: any[] = [];
  ngOnInit() {
    this.filmService.getFilmList().subscribe(data => {
       this.filmList = data['Search'];
    });
    console.log(this.filmList.length);
   }

  goToDetailPage(id: string){
    this.filmService.details(id).subscribe();
  }

}
