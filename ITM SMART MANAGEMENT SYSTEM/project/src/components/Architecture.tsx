import { Trash2, Server, Monitor, Smartphone, Database, Cloud } from 'lucide-react';

export default function Architecture() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            System Architecture
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A robust, scalable architecture integrating IoT devices, cloud infrastructure,
            and user-friendly interfaces for seamless waste management.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center shadow-lg">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-4">
                <Trash2 className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">IoT Smart Bins</h3>
              <p className="text-gray-700 mb-4">
                Sensors monitor fill levels, temperature, and location in real-time
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="bg-white rounded-lg p-2">Ultrasonic Sensors</div>
                <div className="bg-white rounded-lg p-2">GPS Modules</div>
                <div className="bg-white rounded-lg p-2">Wireless Communication</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center shadow-lg">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4">
                <Server className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Central Server</h3>
              <p className="text-gray-700 mb-4">
                Processes data, analyzes patterns, and manages operations
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="bg-white rounded-lg p-2">Data Processing</div>
                <div className="bg-white rounded-lg p-2">Analytics Engine</div>
                <div className="bg-white rounded-lg p-2">API Management</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 text-center shadow-lg">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-700 rounded-full mb-4">
                <Monitor className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">User Interfaces</h3>
              <p className="text-gray-700 mb-4">
                Role-based dashboards for admins, collectors, and citizens
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="bg-white rounded-lg p-2">Admin Dashboard</div>
                <div className="bg-white rounded-lg p-2">Collector App</div>
                <div className="bg-white rounded-lg p-2">Citizen Portal</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">Data Flow Architecture</h3>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <Trash2 className="mx-auto mb-2" size={32} />
                  <p className="font-semibold">Smart Bins</p>
                  <p className="text-sm text-green-100">Collect Data</p>
                </div>
              </div>

              <div className="text-center text-3xl font-bold hidden md:block">→</div>

              <div className="text-center">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <Cloud className="mx-auto mb-2" size={32} />
                  <p className="font-semibold">Cloud</p>
                  <p className="text-sm text-green-100">Transmit Data</p>
                </div>
              </div>

              <div className="text-center text-3xl font-bold hidden md:block">→</div>

              <div className="text-center">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <Database className="mx-auto mb-2" size={32} />
                  <p className="font-semibold">Database</p>
                  <p className="text-sm text-green-100">Store & Process</p>
                </div>
              </div>

              <div className="text-center text-3xl font-bold hidden md:block">→</div>

              <div className="text-center">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <Smartphone className="mx-auto mb-2" size={32} />
                  <p className="font-semibold">Users</p>
                  <p className="text-sm text-green-100">Access Info</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
              <h4 className="font-bold text-gray-900 mb-2">Admin Interface</h4>
              <p className="text-sm text-gray-700">
                Dashboard with analytics, bin management, route optimization, and system configuration
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
              <h4 className="font-bold text-gray-900 mb-2">Collector Interface</h4>
              <p className="text-sm text-gray-700">
                Mobile app showing assigned routes, bin locations, real-time status, and collection logs
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-300">
              <h4 className="font-bold text-gray-900 mb-2">Citizen Interface</h4>
              <p className="text-sm text-gray-700">
                Web portal for reporting issues, viewing collection schedules, and tracking local cleanliness
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
