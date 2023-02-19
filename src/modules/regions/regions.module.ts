import { Module } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { PrismaService } from '../../database/prisma.service';
import { RegionsController } from './regions.controller';

@Module({
  controllers: [RegionsController],
  providers: [RegionsService, PrismaService],
})
export class RegionsModule {}
