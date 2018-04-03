import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { ShowMovieComponent } from './components/show-movie/show-movie.component';



export const appRoutes: Routes = [
    {
		path: 'movies',
		component: HomeComponent
  	},
	{
		path: 'movies/new',
		component: CreateMovieComponent
  	},
	{
		path: 'movies/:id',
		component: ShowMovieComponent
  	},
	{
		path: 'movies/review/:id',
		component: AddReviewComponent
  	}
];