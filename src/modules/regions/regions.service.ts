import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RegionsDTO } from './regions.dto';
import { Regions } from '.prisma/client';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class RegionsService {
  httpService: any;
  constructor(private prisma: PrismaService) {}

  async create(createRegionsDto: RegionsDTO): Promise<Regions> {
    return this.prisma.regions.create({ data: createRegionsDto });
  }

  findAll(): Observable<AxiosResponse> {
    return this.httpService.get(
      'https://covid-19-statistics.p.rapidapi.com/regions',
    );
  }
  findAllAndLogData(): void {
    this.findAll().subscribe(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.error(error);
      },
    );
  }
}
