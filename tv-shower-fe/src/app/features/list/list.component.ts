import { Component } from '@angular/core';

import { TvShowsService } from '../../core/tv-shows.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  result$ = this.tvShowService.getTvShows().result$;

  constructor(private tvShowService: TvShowsService) {}
}
