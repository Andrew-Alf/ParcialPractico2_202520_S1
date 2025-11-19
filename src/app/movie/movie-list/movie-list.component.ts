import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { moviesData } from '../moviesData';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  selected= false;
  selectedMovie!: Movie;
  displayedMovies: Movie[] = [];

  allMovies = moviesData;

  onSelect(movie: Movie) {
    this.selectedMovie = movie;
    this.selected = true;
  }

  constructor(private movieService: MovieService) {}

  getMoviesList(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.allMovies = data || [];
      this.movies = this.allMovies;
    });
  }

  ngOnInit() {
    this.movies = moviesData;
  }
}
