import { Module } from '@nestjs/common';
import { BookService } from './provinces.service';
import { BookController } from './provinces.controller';
import { PrismaService } from '../../database/PrismaService';

@Module({
  controllers: [BookController],
  providers: [BookService, PrismaService],
})
export class BookModule {}
