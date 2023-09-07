import { Account } from 'src/accounts/entities/account.entity';
import { Category } from 'src/categories/entities/category.entity';
import { AbstractEntity } from 'src/core/database/abstract.entity';
import { TransactionType } from 'src/core/enums/enum';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity()
export class Transaction extends AbstractEntity<Transaction> {
  @Column()
  date: Date;

  @Column()
  type: TransactionType;

  @Column()
  description: string;

  @OneToOne(() => Account)
  account: Account;

  @OneToOne(() => Category)
  category: Category;

  @Column()
  amount: number;
}
