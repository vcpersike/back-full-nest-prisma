import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProvincesDTO } from './provinces.dto';
import { ProvincesService } from './provinces.service';

@Controller('provinces')
export class ProvincesController {
  constructor(private readonly provincesService: ProvincesService) {}

  @Post()
  async create(@Body() data: ProvincesDTO) {
    return this.provincesService.create(data);
  }

  @Get()
  async findAll() {
    return this.provincesService.findAll();
  }

  // http://localhost:3000/238498239472934
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ProvincesDTO) {
    return this.provincesService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.provincesService.delete(id);
  }
}
