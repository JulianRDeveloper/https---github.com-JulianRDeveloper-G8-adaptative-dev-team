import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Coach, CoachRelations} from '../models';

export class CoachRepository extends DefaultCrudRepository<
  Coach,
  typeof Coach.prototype.id,
  CoachRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Coach, dataSource);
  }
}
