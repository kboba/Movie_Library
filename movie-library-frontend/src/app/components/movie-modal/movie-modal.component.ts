import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.css'],
})
export class MovieModalComponent {
  @Input() modalRef!: BsModalRef;
  @Input() movie!: Movie;
  @Output() reload = new EventEmitter<boolean>();

  constructor(private moviesService: MoviesService) {}

  public addOrUpdateMovie() {
    if (this.movie.id != null && this.movie.id != undefined) {
      this.updateMovie();
    }
    else {
      this.addMovie();
    }
  }

  public addMovie() {
    let movies = [this.movie];
    this.moviesService.addMovie(movies).subscribe({
      next: (res: any) => {
        this.modalRef.hide();
        this.reload.emit(true);
      },
      error: (error: any) => {
        console.log(error);
        alert('Movie creation failed');
      },
    });
  }

  public updateMovie() {
    this.moviesService.updateMovie(this.movie).subscribe({
      next: (res: any) => {
        this.modalRef.hide();
        this.reload.emit(true);
      },
      error: (error: any) => {
        console.log(error);
        alert('Movie update failed');
      },
    });
  }
}
