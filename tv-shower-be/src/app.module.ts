import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TvShowsModule } from './tv-shows/tv-shows.module';

@Module({
  imports: [TvShowsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
