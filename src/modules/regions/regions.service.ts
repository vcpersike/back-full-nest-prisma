import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RegionsDTO } from './regions.dto';
import { Regions } from '.prisma/client';
import axios from 'axios';
import { response } from 'express';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class RegionsService {
  httpService: any;
  regionsService: any;
  constructor(private prisma: PrismaService) {}

  async create() {
    const saveApi = await this.regionsService.findAll();
    const client = new PrismaClient();
    const mapSaveApi = saveApi.data.map((region) => {
      return { name: region.name, iso: region.iso };
    });
    return await client.regions.createMany({ data: mapSaveApi });
  }

  async findAll() {
    const options = {
      method: 'GET',
      url: 'https://covid-19-statistics.p.rapidapi.com/regions',
      headers: {
        'X-RapidAPI-Key': '93582d6e1bmsha374b81a914ed11p138b44jsn3e6de5d946cb',
        'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async findAllAndLogData() {
    const data = await this.findAll();
    console.log(data);
  }
}
