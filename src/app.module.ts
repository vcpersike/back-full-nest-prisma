import { Module } from '@nestjs/common';
import { ReportsModule } from './modules/reports/reports.module';
import { TotalReportModule } from './modules/total-report/totalReport.module';
import { RegionsModule } from './modules/regions/regions.module';
import { ProvincesModule } from './modules/provinces/provinces.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    AuthModule,
    TotalReportModule,
    ReportsModule,
    RegionsModule,
    ProvincesModule,
    MongooseModule.forRoot(
      'mongodb+srv://devvictorpersike:OpAO7yprMKXr6A9D@testefullcycle.ozfpzz3.mongodb.net/test',
    ),
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
