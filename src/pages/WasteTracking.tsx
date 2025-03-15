import { useState } from 'react';
import { format } from 'date-fns';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface WasteLog {
  id: number;
  date: string;
  itemName: string;
  quantity: number;
  unit: string;
  reason: string;
}

const mockWasteLogs: WasteLog[] = [
  {
    id: 1,
    date: '2024-02-01',
    itemName: 'Spinach',
    quantity: 0.5,
    unit: 'lbs',
    reason: 'Wilted',
  },
  {
    id: 2,
    date: '2024-02-02',
    itemName: 'Yogurt',
    quantity: 1,
    unit: 'cup',
    reason: 'Expired',
  },
];

const wasteByCategory = {
  labels: ['Produce', 'Dairy', 'Meat', 'Grains', 'Other'],
  datasets: [
    {
      label: 'Waste by Category (lbs)',
      data: [4, 3, 2, 1, 1],
      backgroundColor: [
        'rgba(22, 163, 74, 0.5)',
        'rgba(37, 99, 235, 0.5)',
        'rgba(239, 68, 68, 0.5)',
        'rgba(234, 179, 8, 0.5)',
        'rgba(107, 114, 128, 0.5)',
      ],
      borderColor: [
        'rgb(22, 163, 74)',
        'rgb(37, 99, 235)',
        'rgb(239, 68, 68)',
        'rgb(234, 179, 8)',
        'rgb(107, 114, 128)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function WasteTracking() {
  const [wasteLogs] = useState<WasteLog[]>(mockWasteLogs);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Waste Tracking</h1>
        <p className="mt-2 text-sm text-gray-700">
          Monitor and analyze your food waste patterns
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Waste by Category Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Waste by Category</h2>
          <div className="h-64">
            <Bar
              data={wasteByCategory}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top' as const,
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Recent Waste Logs */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Waste Logs</h2>
          <div className="flow-root">
            <ul role="list" className="-my-5 divide-y divide-gray-200">
              {wasteLogs.map((log) => (
                <li key={log.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {log.itemName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {format(new Date(log.date), 'MMM d, yyyy')} • {log.quantity} {log.unit}
                      </p>
                      <p className="text-sm text-gray-500">
                        Reason: {log.reason}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}