import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TvShowsService } from './tv-shows.service';
import { CreateTvShowDto } from './dto/create-tv-show.dto';
import { UpdateTvShowDto } from './dto/update-tv-show.dto';

@Controller('tv-shows')
export class TvShowsController {
  constructor(private readonly tvShowsService: TvShowsService) {}

  @Post()
  create(@Body() createTvShowDto: CreateTvShowDto) {
    return this.tvShowsService.create(createTvShowDto);
  }

  @Get()
  findAll() {
    return this.tvShowsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tvShowsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTvShowDto: UpdateTvShowDto) {
    return this.tvShowsService.update(+id, updateTvShowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tvShowsService.remove(+id);
  }
}
