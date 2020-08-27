import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';

interface Response {
  transactions: Transaction[];
  balance: Balance;
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class ListTransactionService {
  transactionRepository: TransactionRepository;

  constructor(transactionRepository: TransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  public execute(): Response {
    const response: Response = {
      transactions: this.transactionRepository.all(),
      balance: this.transactionRepository.getBalance(),
    };

    return response;
  }
}

export default ListTransactionService;
