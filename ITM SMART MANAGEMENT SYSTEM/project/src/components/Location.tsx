import { MapPin, Utensils, Landmark, Wrench, ExternalLink } from 'lucide-react';

export default function Location() {
  const mapsLink = 'https://maps.app.goo.gl/RnEm6rKgSHqc7wrcA?g_st=aw';
  const campusLocations = [
    {
      id: 1,
      name: 'College Canteen',
      icon: Utensils,
      description: 'Central hub for community gathering and waste management implementation',
      color: 'bg-blue-500',
      position: { top: '35%', left: '30%' },
    },
    {
      id: 2,
      name: 'College Temple',
      icon: Landmark,
      description: 'Spiritual center with comprehensive waste segregation system',
      color: 'bg-purple-500',
      position: { top: '20%', left: '65%' },
    },
    {
      id: 3,
      name: 'College Workshop',
      icon: Wrench,
      description: 'Technical facility demonstrating IoT-enabled smart bin technology',
      color: 'bg-orange-500',
      position: { top: '65%', left: '50%' },
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ITM Vocational University
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Smart Waste Management Implementation Across Campus Locations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-blue-50 via-green-50 to-gray-100 rounded-2xl flex items-center justify-center">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 600 500"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <linearGradient id="campusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0f2fe" />
                    <stop offset="100%" stopColor="#dcfce7" />
                  </linearGradient>
                </defs>
                <rect width="600" height="500" fill="url(#campusGradient)" />
                <path
                  d="M 50 200 Q 150 100 300 150 T 550 200"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <circle cx="180" cy="180" r="40" fill="#dbeafe" stroke="#0284c7" strokeWidth="2" />
                <circle cx="390" cy="120" r="40" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
                <circle cx="300" cy="320" r="40" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
              </svg>

              {campusLocations.map((location) => (
                <div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 animate-bounce"
                  style={{
                    top: location.position.top,
                    left: location.position.left,
                    animationDelay: `${location.id * 0.2}s`,
                  }}
                >
                  <div
                    className={`${location.color} rounded-full p-3 shadow-lg transform hover:scale-125 transition-transform duration-300 cursor-pointer group relative`}
                  >
                    <location.icon className="text-white" size={24} />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {location.name}
                    </div>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-6 right-6 bg-white rounded-lg px-4 py-2 shadow-md flex items-center space-x-2 text-sm text-gray-700">
                <MapPin size={16} className="text-green-600" />
                <span>Campus Locations</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {campusLocations.map((location) => {
              const Icon = location.icon;
              return (
                <div
                  key={location.id}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-green-600"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${location.color} rounded-lg p-3 flex-shrink-0`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {location.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {location.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Campus-Wide Implementation Strategy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">3</div>
              <p className="text-green-100">Primary Locations</p>
              <p className="text-sm text-green-200 mt-2">
                Strategic placement across campus
              </p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-green-100">Coverage</p>
              <p className="text-sm text-green-200 mt-2">
                Full campus waste management integration
              </p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-green-100">Monitoring</p>
              <p className="text-sm text-green-200 mt-2">
                Real-time IoT sensor data collection
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8 md:p-10 border-2 border-blue-200">
          <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <MapPin className="text-green-600" size={28} />
            <span>Location Details</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">College Canteen</h5>
              <p className="text-gray-700 text-sm mb-3">
                High-traffic area with significant daily waste generation. Smart bins monitor peak usage times and optimize collection schedules.
              </p>
              <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Food & Beverage Waste
              </span>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">College Temple</h5>
              <p className="text-gray-700 text-sm mb-3">
                Community spiritual hub demonstrating segregated waste management for different waste categories and materials.
              </p>
              <span className="inline-block bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Mixed Waste Segregation
              </span>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">College Workshop</h5>
              <p className="text-gray-700 text-sm mb-3">
                Technical showcase displaying IoT sensors, data transmission systems, and real-time monitoring dashboard integration.
              </p>
              <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                IoT Technology Hub
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-3xl font-bold mb-3 flex items-center space-x-2">
                <MapPin size={32} />
                <span>Visit Us On Google Maps</span>
              </h4>
              <p className="text-blue-100 text-lg">
                Explore ITM Vocational University and Smart Waste Management implementation locations
              </p>
            </div>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
            >
              <span>Open in Maps</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
