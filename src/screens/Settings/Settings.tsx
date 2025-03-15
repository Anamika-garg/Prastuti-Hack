import { Layout } from "../../components/Layout";
import { Button } from "../../components/ui/button";

export const Settings = () => {
  return (
    <Layout>
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>
        
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-white text-lg mb-4">Notifications</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Expiration Alerts</span>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Recipe Suggestions</span>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-white text-lg mb-4">Account</h2>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Edit Profile
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start text-red-500">
                Delete Account
              </Button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-white text-lg mb-4">App Settings</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Dark Mode</span>
                <Button variant="outline" size="sm">
                  On
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Language</span>
                <Button variant="outline" size="sm">
                  English
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};