import { MovieService } from './../../movie.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Component( {
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
} )
export class HomeComponent implements OnInit {
	movies: any;
	constructor( private http: HttpClient, private service: MovieService ) {}

	ngOnInit() {}
	
	getMovies() {
		this.service.getMovies().subscribe( res => {
			this.movies = res;
		});
	}

	deleteMovie(id) {
		this.service.deleteMovie(id).subscribe(res => {
			console.log(this.movies + ' has been deleted');
			this.movies.splice(id, 1);
		});
	}
}