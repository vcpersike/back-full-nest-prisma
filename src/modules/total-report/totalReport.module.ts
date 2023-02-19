import { Module } from '@nestjs/common';
import { TotalReportService } from './totalReport.service';
import { TotalReportController } from './totalReport.controller';
import { PrismaService } from '../../database/prisma.service';

@Module({
  controllers: [TotalReportController],
  providers: [TotalReportService, PrismaService],
})
export class TotalReportModule {}
