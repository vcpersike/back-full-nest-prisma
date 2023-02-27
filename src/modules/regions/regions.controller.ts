import { PrismaClient } from '@prisma/client';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegionsDTO } from './regions.dto';
import { RegionsService } from './regions.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}
  @IsPublic()
  @Post()
  async create(@Body() data: RegionsDTO) {
    return this.regionsService.create();
  }

  @IsPublic()
  @Get()
  async findAll() {
    const client = new PrismaClient();
    return await client.regions.findMany();
  }
}
