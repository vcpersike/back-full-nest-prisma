import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ProvincesDTO } from './provinces.dto';

@Injectable()
export class ProvincesService {
  constructor(private prisma: PrismaService) {}

  async create(data: ProvincesDTO) {
    const ProvincesExists = await this.prisma.provinces.findFirst({
      where: {
        //bar_code: data.bar_code,
      },
    });

    if (ProvincesExists) {
      throw new Error('Provinces already exists');
    }

    const Provinces = await this.prisma.provinces.create({
      data: undefined,
    });

    return Provinces;
  }

  async findAll() {
    return this.prisma.provinces.findMany();
  }

  async update(id: string, data: ProvincesDTO) {
    const ProvincesExists = await this.prisma.provinces.findUnique({
      where: {
        id,
      },
    });

    if (!ProvincesExists) {
      throw new Error('Provinces does not exists!');
    }

    return await this.prisma.provinces.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const ProvincesExists = await this.prisma.provinces.findUnique({
      where: {
        id,
      },
    });

    if (!ProvincesExists) {
      throw new Error('Provinces does not exists!');
    }

    return await this.prisma.provinces.delete({
      where: {
        id,
      },
    });
  }
}
