import React from 'react';
import { Plus } from 'lucide-react';

export default function Properties() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Properties</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Plus className="w-5 h-5 mr-2" />
          Add Property
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder for property list */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Sunset Apartments</h3>
          <p className="mt-2 text-sm text-gray-500">123 Main St, Springfield</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm font-medium text-gray-600">12 Units</span>
            <span className="text-sm font-medium text-green-600">95% Occupied</span>
          </div>
        </div>
      </div>
    </div>
  );
}