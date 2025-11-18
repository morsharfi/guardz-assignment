import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { EntitiesService, Entity } from './entities.service';
import { CreateEntityDto } from './dto/create-entity.dto';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateEntityDto): Entity {
    return this.entitiesService.create(dto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Entity[] {
    return this.entitiesService.findAll();
  }
}
