import { Module } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { PrismaService } from '../../database/prisma.service';
import { RegionsController } from './regions.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [RegionsController],
  providers: [RegionsService, PrismaService],
})
export class RegionsModule {}
