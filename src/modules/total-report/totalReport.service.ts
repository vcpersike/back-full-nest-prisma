import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { TotalReportDTO } from './totalReport.dto';

@Injectable()
export class TotalReportService {
  constructor(private prisma: PrismaService) {}

  async create(data: TotalReportDTO) {
    const totalReportExists = await this.prisma.totalReport.findFirst({
      where: {
        //bar_code: data.bar_code,
      },
    });

    if (totalReportExists) {
      throw new Error('totalReport already exists');
    }

    const totalReport = await this.prisma.totalReport.create({
      data: undefined,
    });

    return totalReport;
  }

  async findAll() {
    return this.prisma.totalReport.findMany();
  }

  async update(id: string, data: TotalReportDTO) {
    const totalReportExists = await this.prisma.totalReport.findUnique({
      where: {
        id,
      },
    });

    if (!totalReportExists) {
      throw new Error('totalReport does not exists!');
    }

    return await this.prisma.totalReport.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const totalReportExists = await this.prisma.totalReport.findUnique({
      where: {
        id,
      },
    });

    if (!totalReportExists) {
      throw new Error('totalReport does not exists!');
    }

    return await this.prisma.totalReport.delete({
      where: {
        id,
      },
    });
  }
}
