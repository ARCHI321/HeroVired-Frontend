import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expenses: Expense[] = [];

  getExpenses(): Observable<Expense[]> {
    return of(this.expenses);
  }

  addExpense(expense: Expense): void {
    this.expenses.push(expense);
  }

  deleteExpense(expense: Expense): void {
    const index = this.expenses.findIndex((e) => e.id === expense.id);
    if (index !== -1) {
      this.expenses.splice(index, 1);
    }
  }
}
