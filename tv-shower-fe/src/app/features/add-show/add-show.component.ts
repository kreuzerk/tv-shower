import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TvShowsService } from '../../core/tv-shows.service';
import { TvShow } from '../../shared/tv-show.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.scss'],
})
export class AddShowComponent {
  tvShowGroup = this.fb.group({
    title: ['', Validators.required],
    coverImageUrl: ['', Validators.required],
    rating: [1, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private tvShowsService: TvShowsService,
    private router: Router
  ) {}

  submit() {
    this.tvShowGroup.markAllAsTouched();

    if (this.tvShowGroup.errors) {
      return;
    }
    this.tvShowsService
      .addTvShow(this.tvShowGroup.value as TvShow)
      .subscribe((_) => this.router.navigate(['list']));
  }
}
