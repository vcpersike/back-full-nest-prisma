import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TotalReportDTO } from './totalReport.dto';
import { TotalReportService } from './totalReport.service';

@Controller('book')
export class TotalReportController {
  constructor(private readonly bookService: TotalReportService) {}

  @Post()
  async create(@Body() data: TotalReportDTO) {
    return this.bookService.create(data);
  }

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  // http://localhost:3000/238498239472934
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: TotalReportDTO) {
    return this.bookService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}
