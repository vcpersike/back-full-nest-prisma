import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RegionsDTO } from './regions.dto';
import { Regions } from '.prisma/client';

@Injectable()
export class RegionsService {
  constructor(private prisma: PrismaService) {
    process.chdir(__dirname); // Definir o diretório de trabalho atual para o diretório do arquivo atual
  }

  async create(createRegionsDto: RegionsDTO): Promise<Regions> {
    return this.prisma.regions.create({ data: createRegionsDto });
  }
}
