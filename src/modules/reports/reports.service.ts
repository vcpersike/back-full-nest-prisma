import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ReportsDTO } from './reports.dto';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async create(data: ReportsDTO) {
    const reportsExists = await this.prisma.cities.findFirst({
      where: {
        //bar_code: data.bar_code,
      },
    });

    if (reportsExists) {
      throw new Error('reports already exists');
    }

    const reports = await this.prisma.cities.create({
      data: undefined,
    });

    return reports;
  }

  async findAll() {
    return this.prisma.cities.findMany();
  }

  async update(id: string, data: ReportsDTO) {
    const reportsExists = await this.prisma.cities.findUnique({
      where: {
        id,
      },
    });

    if (!reportsExists) {
      throw new Error('reports does not exists!');
    }

    return await this.prisma.cities.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const reportsExists = await this.prisma.cities.findUnique({
      where: {
        id,
      },
    });

    if (!reportsExists) {
      throw new Error('reports does not exists!');
    }

    return await this.prisma.cities.delete({
      where: {
        id,
      },
    });
  }
}
