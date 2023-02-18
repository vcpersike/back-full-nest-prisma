import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ReportsDTO } from './reports.dto';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async create(data: ReportsDTO) {
    const reportsExists = await this.prisma.reports.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });

    if (reportsExists) {
      throw new Error('Book already exists');
    }

    const reports = await this.prisma.reports.create({
      data,
    });

    return reports;
  }

  async findAll() {
    return this.prisma.reports.findMany();
  }

  async update(id: string, data: ReportsDTO) {
    const reportsExists = await this.prisma.reports.findUnique({
      where: {
        id,
      },
    });

    if (!reportsExists) {
      throw new Error('Book does not exists!');
    }

    return await this.prisma.reports.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const reportsExists = await this.prisma.reports.findUnique({
      where: {
        id,
      },
    });

    if (!reportsExists) {
      throw new Error('Book does not exists!');
    }

    return await this.prisma.reports.delete({
      where: {
        id,
      },
    });
  }
}
