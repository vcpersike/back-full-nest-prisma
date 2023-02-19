import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RegionsDTO } from './regions.dto';
import { RegionsService } from './regions.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}
  @IsPublic()
  @Post()
  async create(@Body() data: RegionsDTO) {
    return this.regionsService.create(data);
  }

  @Get()
  async findAll() {
    return this.regionsService.findAll();
  }
}
