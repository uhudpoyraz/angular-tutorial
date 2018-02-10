import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FilmService {

  constructor(private http: HttpClient) {
  }

  public getFilmList() {
    return this.http.get('http://www.omdbapi.com/?s=matrix&apikey=5fc4b314');
  }

  public details(id: string){
    return this.http.get('http://www.omdbapi.com/?i=' + id + '&apikey=5fc4b314');
  }

}
