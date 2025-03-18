import React from 'react';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

export default function Finances() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Finances</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="ml-3 text-lg font-medium text-gray-900">Total Revenue</h3>
          </div>
          <p className="mt-4 text-2xl font-semibold text-gray-900">$52,450</p>
          <div className="mt-1 flex items-center text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>8% from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded">
              <DollarSign className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="ml-3 text-lg font-medium text-gray-900">Expenses</h3>
          </div>
          <p className="mt-4 text-2xl font-semibold text-gray-900">$12,780</p>
          <div className="mt-1 flex items-center text-sm text-red-600">
            <TrendingDown className="w-4 h-4 mr-1" />
            <span>5% from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="ml-3 text-lg font-medium text-gray-900">Net Income</h3>
          </div>
          <p className="mt-4 text-2xl font-semibold text-gray-900">$39,670</p>
          <div className="mt-1 flex items-center text-sm text-blue-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>12% from last month</span>
          </div>
        </div>
      </div>
    </div>
  );
}