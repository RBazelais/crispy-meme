import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShowMovieComponent } from './components/show-movie/show-movie.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { MovieService } from './movie.service';
import { appRoutes } from './routerConfig';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ShowMovieComponent,
		CreateMovieComponent,
		AddReviewComponent,
	
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [MovieService],
	bootstrap: [AppComponent]
	})
export class AppModule { }
