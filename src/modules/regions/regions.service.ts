import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { RegionsDTO } from './regions.dto';

@Injectable()
export class RegionsService {
  constructor(private prisma: PrismaService) {}

  async create(data: RegionsDTO) {
    const regionsExists = await this.prisma.regions.findFirst({
      where: {
        //bar_code: data.bar_code,
      },
    });

    if (regionsExists) {
      throw new Error('Regions already exists');
    }

    const Regions = await this.prisma.regions.create({
      data: undefined,
    });

    return Regions;
  }

  async findAll() {
    return this.prisma.regions.findMany();
  }

  async update(id: string, data: RegionsDTO) {
    const regionsExists = await this.prisma.regions.findUnique({
      where: {
        id,
      },
    });

    if (!regionsExists) {
      throw new Error('Regions does not exists!');
    }

    return await this.prisma.regions.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const regionsExists = await this.prisma.regions.findUnique({
      where: {
        id,
      },
    });

    if (!regionsExists) {
      throw new Error('Regions does not exists!');
    }

    return await this.prisma.regions.delete({
      where: {
        id,
      },
    });
  }
}
