import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  private apiUrl = "http://157.253.205.147:8080/api/movies"

  private detailUrl = "http://157.253.205.147:8080/api/movies/1"
  
  constructor (private http: HttpClient){}

    getMovies(): Observable<Movie[]> {
      return this.http.get<Movie[]>(this.apiUrl);
    }

    getMovieDetail(id: number | string): Observable<Movie> {
    const url = `${this.detailUrl}/${id}`;
    return this.http.get<Movie>(url);
  }
  
}
