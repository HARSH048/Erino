import { DataSource, Repository } from "typeorm";
import {ContactEntity} from '../models'

export class ContactRepository extends Repository<ContactEntity> {
    constructor(dataSource: DataSource) {
      super(ContactEntity, dataSource.createEntityManager());
    }
  }