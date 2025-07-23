
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Plus, TrendingUp, TrendingDown, DollarSign, PieChart } from 'lucide-react';

export const BudgetTracker = () => {
  const [showAddExpense, setShowAddExpense] = useState(false);

  const categories = [
    { name: 'Food & Dining', spent: 3500, budget: 5000, color: 'bg-pink-500' },
    { name: 'Transportation', spent: 2200, budget: 3000, color: 'bg-purple-500' },
    { name: 'Shopping', spent: 1800, budget: 2500, color: 'bg-indigo-500' },
    { name: 'Entertainment', spent: 800, budget: 1500, color: 'bg-emerald-500' },
    { name: 'Utilities', spent: 2000, budget: 2000, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-purple-800">Budget Tracker</h1>
          <p className="text-gray-600">Manage your expenses and stay on track</p>
        </div>
        <Button
          onClick={() => setShowAddExpense(!showAddExpense)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Expense
        </Button>
      </div>

      {/* Monthly Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Total Income</p>
                <p className="text-2xl font-bold">₹45,000</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm">Total Expenses</p>
                <p className="text-2xl font-bold">₹30,300</p>
              </div>
              <TrendingDown className="h-8 w-8 text-red-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Savings</p>
                <p className="text-2xl font-bold">₹14,700</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Budget Left</p>
                <p className="text-2xl font-bold">₹4,700</p>
              </div>
              <PieChart className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add Expense Form */}
      {showAddExpense && (
        <Card className="border-purple-200 shadow-lg animate-scale-in">
          <CardHeader>
            <CardTitle className="text-purple-800">Add New Expense</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input placeholder="Amount" type="number" />
              <Input placeholder="Description" />
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>Select Category</option>
                <option>Food & Dining</option>
                <option>Transportation</option>
                <option>Shopping</option>
                <option>Entertainment</option>
                <option>Utilities</option>
              </select>
            </div>
            <div className="flex gap-2 mt-4">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                Add Expense
              </Button>
              <Button variant="outline" onClick={() => setShowAddExpense(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Category Breakdown */}
      <Card className="border-purple-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-purple-800">Category Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {categories.map((category, index) => {
              const percentage = (category.spent / category.budget) * 100;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold">₹{category.spent.toLocaleString()}</span>
                      <span className="text-gray-500 text-sm"> / ₹{category.budget.toLocaleString()}</span>
                    </div>
                  </div>
                  <Progress value={percentage} className="h-2" />
                  <div className="text-right text-sm text-gray-600">
                    {percentage.toFixed(1)}% used
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="border-purple-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-purple-800">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { desc: 'Grocery Shopping', amount: -850, category: 'Food & Dining', date: 'Today' },
              { desc: 'Uber Ride', amount: -120, category: 'Transportation', date: 'Yesterday' },
              { desc: 'Salary Credited', amount: 45000, category: 'Income', date: '2 days ago' },
              { desc: 'Coffee Shop', amount: -180, category: 'Food & Dining', date: '3 days ago' },
              { desc: 'Online Shopping', amount: -1200, category: 'Shopping', date: '4 days ago' },
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                <div>
                  <p className="font-medium">{transaction.desc}</p>
                  <p className="text-sm text-gray-500">{transaction.category} • {transaction.date}</p>
                </div>
                <span className={`font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
