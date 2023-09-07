import { Controller } from '@nestjs/common';
import { TransactionService } from '../services/transaction.service';

@Controller('record-income')
export class RecordIncomeController {
  constructor(private transactionService: TransactionService) {}
}
