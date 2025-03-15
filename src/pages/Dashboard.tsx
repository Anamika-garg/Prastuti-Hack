import { useState } from 'react';
import { format } from 'date-fns';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const mockExpiringItems = [
  { id: 1, name: 'Milk', expiryDate: '2024-02-10', quantity: 1, unit: 'gallon' },
  { id: 2, name: 'Yogurt', expiryDate: '2024-02-12', quantity: 2, unit: 'cups' },
  { id: 3, name: 'Bread', expiryDate: '2024-02-08', quantity: 1, unit: 'loaf' },
];

const mockWasteData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Food Waste (lbs)',
      data: [4, 3, 5, 2, 3, 1],
      borderColor: 'rgb(22, 163, 74)',
      backgroundColor: 'rgba(22, 163, 74, 0.5)',
    },
  ],
};

export default function Dashboard() {
  const [expiringItems] = useState(mockExpiringItems);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Track your food inventory and waste reduction progress
        </p>
      </div>

      {/* Expiring Items Alert */}
      <div className="bg-yellow-50 p-4 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationCircleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              Items Expiring Soon
            </h3>
            <div className="mt-2 text-sm text-yellow-700">
              <ul className="list-disc space-y-1 pl-5">
                {expiringItems.map((item) => (
                  <li key={item.id}>
                    {item.quantity} {item.unit} of {item.name} - Expires {format(new Date(item.expiryDate), 'MMM d, yyyy')}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-green-100 rounded-md p-3">
                  <div className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Items
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">24</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-blue-100 rounded-md p-3">
                  <div className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Items Used This Week
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">8</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-red-100 rounded-md p-3">
                  <div className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Waste This Month
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">3 lbs</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Waste Tracking Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Waste Tracking</h2>
        <div className="h-64">
          <Line
            data={mockWasteData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'top' as const,
                },
                title: {
                  display: false,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}