import { Injectable } from '@nestjs/common';

import { CreateTvShowDto } from './dto/create-tv-show.dto';
import { UpdateTvShowDto } from './dto/update-tv-show.dto';
import { TvShow } from './entities/tv-show.entity';

let id = 1;

@Injectable()
export class TvShowsService {
  private tvShows: TvShow[] = [
    {
      id: 0,
      title: 'Peaky Blinders',
      coverImageUrl:
        'https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg',
      rating: 5,
    },
    {
      id: 1,
      title: 'Game of Thrones',
      coverImageUrl:
        'https://hips.hearstapps.com/hmg-prod/images/hbz-got-poster-aftermath-1554224896.jpg?crop=1.00xw:0.693xh;0,0.0577xh&resize=1200:*',
      rating: 5,
    },
  ];

  create(createTvShowDto: CreateTvShowDto): TvShow {
    const newShow = {
      id: id++,
      ...createTvShowDto,
    };
    this.tvShows.push(newShow);
    return newShow;
  }

  findAll(): TvShow[] {
    return this.tvShows;
  }

  findOne(id: number): TvShow | undefined {
    return this.tvShows.find((tvShow) => tvShow.id === id);
  }

  update(id: number, updateTvShowDto: UpdateTvShowDto) {
    let tvShowToUpdate = this.tvShows.find((show) => show.id === id);
    if (!tvShowToUpdate) {
      throw new Error(`no TV show with id ${id} found`);
    }

    tvShowToUpdate = {
      ...tvShowToUpdate,
      ...updateTvShowDto,
    };

    this.tvShows = [
      ...this.tvShows.filter((show) => show.id !== id),
      tvShowToUpdate,
    ];
    console.log('Updated shows', this.tvShows);
    return tvShowToUpdate;
  }

  remove(id: number) {
    return `This action removes a #${id} tvShow`;
  }
}
