import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Expense } from '../expense';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
  imports : [FormsModule  , CommonModule],
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe((expenses) => {
      this.expenses = expenses;
    });
  }

  loadExpenses(): void {
    this.expenseService.getExpenses().subscribe((expenses) => {
      this.expenses = expenses;
    });
  }

  deleteExpense(expense: Expense): void {
    this.expenseService.deleteExpense(expense);
    this.loadExpenses();
  }

  editExpense(expense: Expense): void {
    // Implement editing logic (e.g., open a modal with the expense details for editing)
  }
}
