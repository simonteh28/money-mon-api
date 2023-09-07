import { AbstractEntity } from 'src/core/database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Category extends AbstractEntity<Category> {
  @Column()
  name: string;
}
