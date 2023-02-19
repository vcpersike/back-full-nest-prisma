import { Module } from '@nestjs/common';
import { ReportsModule } from './modules/reports/reports.module';
import { TotalReportModule } from './modules/total-report/totalReport.module';
import { RegionsModule } from './modules/regions/regions.module';
import { ProvincesModule } from './modules/provinces/provinces.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Module({
  imports: [
    UserModule,
    AuthModule,
    TotalReportModule,
    ReportsModule,
    RegionsModule,
    ProvincesModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
