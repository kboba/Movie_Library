import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public movies?: Movie[];
  public modalRef!: BsModalRef;
  public movie: Movie = { id: null, title: '', director: '', rating: 0 };

  public constructor(
    private movieService: MoviesService,
    private modalService: BsModalService
  ) {}

  public ngOnInit(): void {
    this.getMovies();
  }

  public openMovieModal(template: TemplateRef<any>) {
    this.movie = { id: null, title: '', director: '', rating: 0 };
    this.modalRef = this.modalService.show(template);
  }

  public deleteMovie(id: number) {
    this.movieService.deleteMovie(id).subscribe({
      next: (res: any) => {
        this.getMovies();
      },
      error: (error: any) => {
        console.log(error);
        alert('Error while deleting the entry');
      },
    });
  }

  public updateMovie(template: TemplateRef<any>, movie: Movie) {
    this.movie = movie;
    this.modalRef = this.modalService.show(template);
  }

  public getMovies() {
    this.movieService.getMovies().subscribe({
      next: (res: any) => {
        this.movies = res;
      },
      error: (error: any) => {
        console.log(error);
        alert('Error');
      },
    });
  }
}
