import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function Disputes() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Disputes</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tenant</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  <div className="text-sm font-medium text-gray-900">Sunset Apartments</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">John Doe</div>
                <div className="text-sm text-gray-500">Apt 101</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">Noise complaint</div>
                <div className="text-sm text-gray-500">Recurring issue with upstairs neighbor</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  In Progress
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}