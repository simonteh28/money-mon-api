import { Module } from '@nestjs/common';
import { RecordExpensesController } from './controllers/record-expenses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { TransactionService } from './services/transaction.service';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])],
  controllers: [RecordExpensesController],
  providers: [TransactionService],
})
export class TransactionModule {}
