import { useState } from 'react';

interface UserProfile {
  name: string;
  email: string;
  notifications: {
    expirationAlerts: boolean;
    weeklyReports: boolean;
    tips: boolean;
  };
}

const mockProfile: UserProfile = {
  name: 'John Doe',
  email: 'john@example.com',
  notifications: {
    expirationAlerts: true,
    weeklyReports: true,
    tips: false,
  },
};

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile>(mockProfile);

  const handleNotificationChange = (setting: keyof UserProfile['notifications']) => {
    setProfile((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [setting]: !prev.notifications[setting],
      },
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Profile Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="expirationAlerts"
                      name="expirationAlerts"
                      type="checkbox"
                      checked={profile.notifications.expirationAlerts}
                      onChange={() => handleNotificationChange('expirationAlerts')}
                      className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="expirationAlerts" className="font-medium text-gray-700">
                      Expiration Alerts
                    </label>
                    <p className="text-gray-500">Receive notifications when items are about to expire</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="weeklyReports"
                      name="weeklyReports"
                      type="checkbox"
                      checked={profile.notifications.weeklyReports}
                      onChange={() => handleNotificationChange('weeklyReports')}
                      className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="weeklyReports" className="font-medium text-gray-700">
                      Weekly Reports
                    </label>
                    <p className="text-gray-500">Get weekly summaries of your food waste and savings</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="tips"
                      name="tips"
                      type="checkbox"
                      checked={profile.notifications.tips}
                      onChange={() => handleNotificationChange('tips')}
                      className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="tips" className="font-medium text-gray-700">
                      Food Storage Tips
                    </label>
                    <p className="text-gray-500">Receive tips on how to store food properly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="button"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}