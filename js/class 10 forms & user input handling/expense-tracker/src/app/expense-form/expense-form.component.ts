import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Expense } from '../expense';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss'],
  standalone: true,
  imports : [FormsModule  , CommonModule],
})
export class ExpenseFormComponent implements OnInit {
  newExpense: Expense = {
    id: 0,
    description: '',
    amount: 0,
    date: new Date(),
  };

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {}

  addExpense(): void {
    this.expenseService.addExpense(this.newExpense);
    this.newExpense = { id: 0, description: '', amount: 0, date: new Date() };
  }
}
