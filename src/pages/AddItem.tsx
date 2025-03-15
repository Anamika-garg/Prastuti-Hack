import { useState } from 'react';
import { QrCodeIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';

interface ItemForm {
  name: string;
  category: string;
  quantity: number;
  unit: string;
  expiryDate: string;
  barcode?: string;
}

const categories = [
  'Produce',
  'Dairy',
  'Meat',
  'Grains',
  'Pantry',
  'Frozen',
  'Beverages',
  'Other',
];

export default function AddItem() {
  const [isScanning, setIsScanning] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ItemForm>();

  const onSubmit = (data: ItemForm) => {
    console.log('Form submitted:', data);
    // Handle form submission
  };

  const handleScan = () => {
    setIsScanning(true);
    // Implement QR/barcode scanning logic
    setTimeout(() => setIsScanning(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Add Item</h1>
        <p className="mt-1 text-sm text-gray-500">
          Add items to your inventory manually or by scanning
        </p>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          {/* Scan Button */}
          <div className="mb-6">
            <button
              type="button"
              onClick={handleScan}
              disabled={isScanning}
              className="w-full flex items-center justify-center px-4 py-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 focus:outline-none focus:border-primary-500"
            >
              <QrCodeIcon className="h-8 w-8 text-gray-400 mr-2" />
              <span className="text-sm font-medium text-gray-600">
                {isScanning ? 'Scanning...' : 'Scan Barcode or QR Code'}
              </span>
            </button>
          </div>

          {/* Manual Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Item Name
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  {...register('category', { required: 'Category is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  {...register('quantity', {
                    required: 'Quantity is required',
                    min: { value: 0, message: 'Quantity must be positive' },
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {errors.quantity && (
                  <p className="mt-1 text-sm text-red-600">{errors.quantity.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="unit" className="block text-sm font-medium text-gray-700">
                  Unit
                </label>
                <input
                  type="text"
                  {...register('unit', { required: 'Unit is required' })}
                  placeholder="e.g., pieces, lbs, oz"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {errors.unit && (
                  <p className="mt-1 text-sm text-red-600">{errors.unit.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="date"
                  {...register('expiryDate', { required: 'Expiry date is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {errors.expiryDate && (
                  <p className="mt-1 text-sm text-red-600">{errors.expiryDate.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="barcode" className="block text-sm font-medium text-gray-700">
                  Barcode (Optional)
                </label>
                <input
                  type="text"
                  {...register('barcode')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <PlusIcon className="h-5 w-5 mr-2" />
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}