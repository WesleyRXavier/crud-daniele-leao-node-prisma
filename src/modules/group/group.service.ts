import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { GroupDTO } from './group.dto';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async create(data: GroupDTO) {
    const groupExists = await this.prisma.group.findFirst({
      where: { id: data.id },
    });

    if (groupExists) {
      throw new Error(`group already exists`);
    }

    const group = await this.prisma.group.create({ data });

    return group;
  }

  async findAll() {
    return await this.prisma.group.findMany({
      include: { User: true },
    });
  }
  async update(id: string, data: GroupDTO) {
    const groupExists = await this.prisma.group.findUnique({ where: { id } });

    if (!groupExists) {
      throw new Error(`group not exists`);
    }
    return await this.prisma.group.update({
      data,
      where: { id },
    });
  }
  async delete(id: string) {
    const groupExists = await this.prisma.group.findUnique({ where: { id } });

    if (!groupExists) {
      throw new Error(`group not exists`);
    }
    return await this.prisma.group.delete({ where: { id } });
  }
}
