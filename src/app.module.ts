import { Module } from '@nestjs/common';
import { ReportsModule } from './modules/reports/reports.module';
import { TotalReportModule } from './modules/total-report/totalReport.module';

@Module({
  imports: [TotalReportModule, ReportsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
