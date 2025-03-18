import React from 'react';
import { Bell, Calendar } from 'lucide-react';

export default function Reminders() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Reminders</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Calendar className="w-5 h-5 mr-2" />
          Add Reminder
        </button>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded">
              <Bell className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Lease Expiration</h3>
              <p className="text-sm text-gray-500">Apt 101 - John Doe's lease expires in 15 days</p>
            </div>
            <div className="ml-auto">
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                Due Mar 15
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded">
              <Bell className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Maintenance Check</h3>
              <p className="text-sm text-gray-500">Quarterly HVAC maintenance due for Sunset Apartments</p>
            </div>
            <div className="ml-auto">
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                Due Mar 28
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}