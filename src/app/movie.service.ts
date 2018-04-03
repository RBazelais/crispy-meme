import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
	result: any;

	constructor(private http: HttpClient) {}

	addMovie(m_title, reviewer, rating, review){
		const uri = 'http://localhost:4000/movies/add';
		const obj = {
			m_title: m_title,
			reviewer: reviewer, 
			rating: rating, 
			review: review
		};

		this.http.post(uri, obj)
			.subscribe(res => console.log( m_title + " has been submmited by " + reviewer + " to the database"));
	}

	addReview(reviewer, rating, review){
		const uri = 'http://localhost:4000/movies/review/add';
		const obj = {
			reviewer: reviewer, 
			rating: rating, 
			review: review
		};

		this.http.post(uri, obj)
			.subscribe(res => console.log( reviewer + "  submmited a review to the database"));
	}

	getMovies() {
		const uri = 'http://localhost:4000/movies';
		return this
			.http
			.get(uri)
			.map(res => {
				return res;
			});
	}

	getReviews() {
		const uri = 'http://localhost:4000/movies/review/:id';
		return this
			.http
			.get(uri)
			.map(res => {
				return res;
			});
	}
	
	ShowMovie(id) {
		const uri = 'http://localhost:4000/movies/:id/' + id;
		return this
			.http
			.get(uri)
			.map(res => {
				return res;
			});
	}

	deleteMovie(id) {
    	const uri = 'http://localhost:4000/movies/delete/' + id;
        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  	}

}
