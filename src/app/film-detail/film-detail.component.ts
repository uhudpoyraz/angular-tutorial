import { Component, OnInit } from '@angular/core';
import {FilmService} from '../providers/film.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css'],
  providers:[FilmService]
})
export class FilmDetailComponent implements OnInit {

  constructor(private filmService: FilmService, private route: ActivatedRoute) { }

  filmDetail: any = {};

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.filmService.details(id).subscribe(data => {
      this.filmDetail = data;
    });
  }

}
