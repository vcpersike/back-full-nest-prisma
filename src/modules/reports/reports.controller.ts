import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ReportsDTO } from './reports.dto';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  async create(@Body() data: ReportsDTO) {
    return this.reportsService.create(data);
  }

  @Get()
  async findAll() {
    return this.reportsService.findAll();
  }

  // http://localhost:3000/238498239472934
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ReportsDTO) {
    return this.reportsService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.reportsService.delete(id);
  }
}
