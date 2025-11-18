import { Injectable } from '@nestjs/common';
import { CreateEntityDto } from './dto/create-entity.dto';

export interface Entity {
  id: number;
  name: string;
  email: string;
  age: number | null;
  createdAt: string;
}

@Injectable()
export class EntitiesService {
  private entities: Entity[] = [];
  private nextId = 1;

  create(dto: CreateEntityDto): Entity {
    const entity: Entity = {
      id: this.nextId++,
      name: dto.name,
      email: dto.email,
      age: dto.age ?? null,
      createdAt: new Date().toISOString(),
    };
    this.entities.push(entity);
    return entity;
  }

  findAll(): Entity[] {
    return this.entities;
  }

  clear() {
    this.entities = [];
    this.nextId = 1;
  }
}
