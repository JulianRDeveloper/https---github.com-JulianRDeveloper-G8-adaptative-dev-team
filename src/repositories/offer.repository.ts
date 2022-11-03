import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Offer, OfferRelations} from '../models';

export class OfferRepository extends DefaultCrudRepository<
  Offer,
  typeof Offer.prototype.id,
  OfferRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Offer, dataSource);
  }
}
