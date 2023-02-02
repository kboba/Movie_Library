import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private moviesUrl = environment.baseUrl + '/movies';

  constructor(private http: HttpClient) {}

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  public addMovie(movies: Movie[]): Observable<any> {
    let headers = { 'content-type': 'application/json' };
    return this.http.post(this.moviesUrl, JSON.stringify(movies), {
      headers: headers,
    });
  }

  public deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.moviesUrl}/${id}`)
  }

  public updateMovie(movie: Movie): Observable<any> {
    let headers = { 'content-type': 'application/json' };
    return this.http.patch(`${this.moviesUrl}/${movie.id}`, JSON.stringify(movie), {
      headers: headers,
    });
  }
}
