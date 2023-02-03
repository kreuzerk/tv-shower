import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { addEntity, QueryClientService, UseQuery } from '@ngneat/query';

import { TvShow } from '../shared/tv-show.model';
import { tap } from 'rxjs';

const BACKEND_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  private queryClient = inject(QueryClientService);

  constructor(private http: HttpClient, private useQuery: UseQuery) {}

  getTvShows() {
    return this.useQuery(['tv-shows'], () => {
      return this.http.get<TvShow[]>(`${BACKEND_URL}/tv-shows`);
    });
  }

  addTvShow(newTvShow: Pick<TvShow, 'title' | 'coverImageUrl' | 'rating'>) {
    return this.http.post(`${BACKEND_URL}/tv-shows`, newTvShow);
  }

  update(updatedTvShow: TvShow) {
    console.log(this.queryClient.getQueryCache());
    console.log(this.queryClient.getQueriesData(['tv-shows']));

    const data = this.queryClient
        .getQueriesData(['tv-shows'])[0][1] as any[];


    this.queryClient.setQueryData(
      ['tv-shows'],
      data.map((show: any) => (show.id === updatedTvShow.id ? updatedTvShow : show))
    );

    return this.http
      .patch(`${BACKEND_URL}/tv-shows/${updatedTvShow.id}`, updatedTvShow)
      .pipe(
        tap((_) => {
          this.queryClient.invalidateQueries(['tv-shows']);
        })
      );
  }
}
