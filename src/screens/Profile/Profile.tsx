import { Layout } from "../../components/Layout";

export const Profile = () => {
  return (
    <Layout>
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-white mb-6">Profile</h1>
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-gray-600 rounded-full"></div>
            <div className="ml-4">
              <h2 className="text-xl text-white">John Doe</h2>
              <p className="text-gray-400">Food Enthusiast</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-white mb-2">Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-gray-400">Food Saved</p>
                  <p className="text-white text-xl">23 items</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400">Recipes Created</p>
                  <p className="text-white text-xl">12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};