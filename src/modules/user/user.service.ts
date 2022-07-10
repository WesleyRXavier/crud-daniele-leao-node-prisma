import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: UserDTO) {
    const userExists = await this.prisma.user.findFirst({
      where: { email: data.email, cpf: data.cpf },
    });

    if (userExists) {
      throw new Error(`user already exists`);
    }

    const user = await this.prisma.user.create({ data });

    return user;
  }

  async findAll() {
    return await this.prisma.user.findMany({
      include: {
        groups: true,
      },
    });
  }
  async update(id: string, data: UserDTO) {
    const userExists = await this.prisma.user.findUnique({ where: { id } });

    if (!userExists) {
      throw new Error(`user not exists`);
    }
    return await this.prisma.user.update({
      data,
      where: { id },
    });
  }
  async delete(id: string) {
    const userExists = await this.prisma.user.findUnique({ where: { id } });

    if (!userExists) {
      throw new Error(`user not exists`);
    }
    return await this.prisma.user.delete({ where: { id } });
  }
}
