import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: UserDTO) {
    return await this.userService.create(data);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UserDTO) {
    return await this.userService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}
