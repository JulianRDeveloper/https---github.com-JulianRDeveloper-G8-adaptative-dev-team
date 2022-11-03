import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Status, StatusRelations} from '../models';

export class StatusRepository extends DefaultCrudRepository<
  Status,
  typeof Status.prototype.status,
  StatusRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Status, dataSource);
  }
}
