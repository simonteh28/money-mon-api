import { AbstractEntity } from 'src/core/database/abstract.entity';
import { Entity } from 'typeorm';

@Entity()
export class Account extends AbstractEntity<Account> {}
