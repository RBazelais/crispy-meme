import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  subtitle = 'Add a review for this.movie.lol';
  angForm: FormGroup;
  constructor(private movieService: MovieService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      reviewer: ['', Validators.required ],
      rating: ['', Validators.required ],
      review: ['', Validators.required ],

    });
  }
  addReview(reviewer, rating, review) {
        this.movieService.addReview(reviewer, rating, review);
  }

    ngOnInit() {
    
    }
}
