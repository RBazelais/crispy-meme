import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
	selector: 'app-create-movie',
	templateUrl: './create-movie.component.html',
	styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
	title = 'Squishy Tomatoes';
	subtitle = 'Submit a Movie and Your Review';
	angForm: FormGroup;

	// reviews: Review[];

  	constructor(private movieService: MovieService, private fb: FormBuilder) {
    	this.createForm();
   	}
	createForm() {
		this.angForm = this.fb.group({
			m_title: ['', Validators.required ],
			reviewer: ['', Validators.required ],
			rating: ['', Validators.required ],
			review: ['', Validators.required ],

		});
	}
 	addMovie(m_title, reviewer, rating, review) {
      	this.movieService.addMovie(m_title, reviewer, rating, review);
	}

  	ngOnInit() {
		
		// this.movieService.getReviews().subscribe((reviews) => {
		// 	// console.log(posts);
		// 	this.reviews = reviews;
		// });
  	}

}
