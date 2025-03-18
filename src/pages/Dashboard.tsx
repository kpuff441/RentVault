import React from 'react';
import { Building2, Users, DollarSign, AlertCircle } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Owner Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Properties"
          value="12"
          icon={Building2}
          trend="+2 this month"
        />
        <DashboardCard
          title="Active Tenants"
          value="45"
          icon={Users}
          trend="98% occupancy"
        />
        <DashboardCard
          title="Monthly Revenue"
          value="$52,450"
          icon={DollarSign}
          trend="+8% from last month"
        />
        <DashboardCard
          title="Active Disputes"
          value="3"
          icon={AlertCircle}
          trend="2 resolved this week"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Upcoming Lease Expirations
          </h2>
          <div className="space-y-3">
            {[
              { unit: "Apt 101", tenant: "John Doe", date: "Mar 15, 2024" },
              { unit: "Apt 205", tenant: "Jane Smith", date: "Mar 28, 2024" },
              { unit: "Apt 310", tenant: "Mike Johnson", date: "Apr 1, 2024" },
            ].map((lease) => (
              <div
                key={lease.unit}
                className="flex items-center justify-between p-3 bg-gray-50 rounded"
              >
                <div>
                  <p className="font-medium">{lease.unit}</p>
                  <p className="text-sm text-gray-500">{lease.tenant}</p>
                </div>
                <span className="text-orange-600">{lease.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Recent Maintenance Requests
          </h2>
          <div className="space-y-3">
            {[
              { unit: "Apt 102", issue: "Plumbing", status: "Pending" },
              { unit: "Apt 207", issue: "HVAC", status: "In Progress" },
              { unit: "Apt 315", issue: "Electrical", status: "Scheduled" },
            ].map((request) => (
              <div
                key={request.unit}
                className="flex items-center justify-between p-3 bg-gray-50 rounded"
              >
                <div>
                  <p className="font-medium">{request.unit}</p>
                  <p className="text-sm text-gray-500">{request.issue}</p>
                </div>
                <span className={
                  request.status === 'Pending' ? 'text-red-600' :
                  request.status === 'In Progress' ? 'text-yellow-600' :
                  'text-green-600'
                }>{request.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, value, icon: Icon, trend }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center">
        <div className="p-2 bg-blue-100 rounded">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="ml-3 text-lg font-medium text-gray-900">{title}</h3>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p className="mt-1 text-sm text-gray-500">{trend}</p>
      </div>
    </div>
  );
}