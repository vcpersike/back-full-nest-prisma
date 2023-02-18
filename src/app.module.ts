import { Module } from '@nestjs/common';
import { ReportsModule } from './modules/reports/reports.module';
import { TotalReportModule } from './modules/total-report/totalReport.module';
import { RegionsModule } from './modules/regions/regions.module';
import { ProvincesModule } from './modules/provinces/provinces.module';

@Module({
  imports: [TotalReportModule, ReportsModule, RegionsModule, ProvincesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
