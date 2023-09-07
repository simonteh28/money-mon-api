import { Controller } from '@nestjs/common';
import { TransactionService } from '../services/transaction.service';

@Controller('record-expenses')
export class RecordExpensesController {
  constructor(private transactionService: TransactionService) {}
}
