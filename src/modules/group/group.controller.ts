import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GroupDTO } from './group.dto';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  async create(@Body() data: GroupDTO) {
    return await this.groupService.create(data);
  }

  @Get()
  async findAll() {
    return await this.groupService.findAll();
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: GroupDTO) {
    return await this.groupService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.groupService.delete(id);
  }
}
