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

@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @Post()
  async create(@Body() data: RegionsDTO) {
    return this.regionsService.create(data);
  }

  @Get()
  async findAll() {
    return this.regionsService.findAll();
  }

  // http://localhost:3000/238498239472934
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: RegionsDTO) {
    return this.regionsService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.regionsService.delete(id);
  }
}
