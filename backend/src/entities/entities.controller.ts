import { Body, Controller, Get, Post } from '@nestjs/common';
import { EntitiesService, Entity } from './entities.service';
import { CreateEntityDto } from './dto/create-entity.dto';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Post()
  create(@Body() dto: CreateEntityDto): Entity {
    return this.entitiesService.create(dto);
  }

  @Get()
  findAll(): Entity[] {
    return this.entitiesService.findAll();
  }
}
