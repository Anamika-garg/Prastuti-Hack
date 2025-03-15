import { useState } from 'react';
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

interface ShareListing {
  id: number;
  title: string;
  description: string;
  location: string;
  distance: string;
  quantity: number;
  unit: string;
  expiryDate: string;
  image: string;
  donor: {
    name: string;
    rating: number;
    image: string;
  };
}

const mockListings: ShareListing[] = [
  {
    id: 1,
    title: 'Fresh Vegetables',
    description: 'Assorted vegetables from my garden: tomatoes, cucumbers, and lettuce',
    location: 'Downtown Community Center',
    distance: '0.8 miles',
    quantity: 5,
    unit: 'lbs',
    expiryDate: '2024-02-10',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    donor: {
      name: 'Sarah Johnson',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    },
  },
  {
    id: 2,
    title: 'Canned Goods',
    description: 'Unopened canned soups and vegetables',
    location: 'Local Food Bank',
    distance: '1.2 miles',
    quantity: 8,
    unit: 'cans',
    expiryDate: '2024-06-15',
    image: 'https://images.unsplash.com/photo-1584263347416-85a696b4eda7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    donor: {
      name: 'Mike Chen',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    },
  },
];

export default function Community() {
  const [listings] = useState<ShareListing[]>(mockListings);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Community Sharing</h1>
        <p className="mt-1 text-sm text-gray-500">
          Share excess food with your community or find available donations
        </p>
      </div>

      {/* Share Food Button */}
      <div className="flex justify-end">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Share Food
        </button>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">{listing.title}</h3>
                <div className="flex items-center">
                  <img
                    src={listing.donor.image}
                    alt={listing.donor.name}
                    className="h-8 w-8 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="text-sm font-medium text-gray-900">{listing.donor.name}</p>
                    <p className="text-sm text-gray-500">★ {listing.donor.rating}</p>
                  </div>
                </div>
              </div>

              <p className="mt-2 text-sm text-gray-500">{listing.description}</p>

              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  <span>{listing.distance}</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>Expires {new Date(listing.expiryDate).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-primary-600 rounded-md shadow-sm text-sm font-medium text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Request Item
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Food Banks Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">Nearby Food Banks</h2>
        <div className="mt-4 bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">City Food Bank</h3>
                  <p className="text-sm text-gray-500">123 Main St, City, State</p>
                  <p className="text-sm text-gray-500">Open Mon-Fri: 9AM-5PM</p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-primary-600 rounded-md text-sm font-medium text-primary-600 hover:bg-primary-50"
                >
                  Get Directions
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Community Pantry</h3>
                  <p className="text-sm text-gray-500">456 Oak Ave, City, State</p>
                  <p className="text-sm text-gray-500">Open Tue-Sat: 10AM-6PM</p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-primary-600 rounded-md text-sm font-medium text-primary-600 hover:bg-primary-50"
                >
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}