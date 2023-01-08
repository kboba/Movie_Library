import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private getMoviesUrl = environment.baseUrl + '/movies';
  private postMoviesUrl = environment.baseUrl + '/movies';

  constructor(private http: HttpClient) {}

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.getMoviesUrl);
  }

  public addMovie(movies: Movie[]): Observable<any> {
    let headers = { 'content-type': 'application/json' };
    return this.http.post(this.postMoviesUrl, JSON.stringify(movies), {
      headers: headers,
    });
  }
}
