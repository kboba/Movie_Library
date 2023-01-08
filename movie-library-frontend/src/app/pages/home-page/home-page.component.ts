import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public movies?: Movie[];

  public constructor(private movieService: MoviesService) {}

  public ngOnInit(): void {
    this.getMovies();
  }

  private getMovies() {
    this.movieService.getMovies().subscribe({
      next: (res: any) => {
        this.movies = res;
      },
      error: (error: any) => {
        console.log(error);
        alert("Error");
      }
    })
  }
}
