import { Repository, UpdateResult } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

export class CrudService<Entity> {
  constructor(private repository: Repository<Entity>) {}

  findAll(options): Promise<Entity[]> {
    return this.repository.find(options);
  }
  create(object): Promise<Entity> {
    return this.repository.save(object);
  }
  findOne(id: number): Promise<Entity> {
    return this.repository.findOne(id, {loadRelationIds:true});
  }
  async update(id: number, object): Promise<Entity> {
    const newObject = await this.repository.preload({
      id,
      ...object,
    });
    if (newObject) {
      return this.repository.save(newObject);
    }
    throw new NotFoundException('Object innexistant');
  }
  remove(id: number): Promise<UpdateResult> {
    return this.repository.softDelete(id);
  }
  restore(id: number): Promise<UpdateResult> {
    return this.repository.restore(id);
  }
}