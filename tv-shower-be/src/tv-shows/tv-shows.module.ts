import { Module } from '@nestjs/common';
import { TvShowsService } from './tv-shows.service';
import { TvShowsController } from './tv-shows.controller';

@Module({
  controllers: [TvShowsController],
  providers: [TvShowsService]
})
export class TvShowsModule {}
