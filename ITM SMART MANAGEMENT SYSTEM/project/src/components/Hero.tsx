import { Recycle, TrendingUp, Users, X } from 'lucide-react';
import { useState } from 'react';

interface HeroProps {
  onExploreFeatures: () => void;
  onViewLocation: () => void;
}

interface Feature {
  id: string;
  title: string;
  icon: React.ElementType;
  shortDesc: string;
  fullDesc: string;
  details: string[];
}

export default function Hero({ onExploreFeatures, onViewLocation }: HeroProps) {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const features: Feature[] = [
    {
      id: 'iot',
      title: 'IoT-Enabled',
      icon: Recycle,
      shortDesc: 'Smart bins with real-time fill-level monitoring',
      fullDesc: 'Our IoT-enabled smart bins are equipped with advanced sensors that continuously monitor waste levels, providing real-time data transmission to the central management system.',
      details: [
        'Real-time fill-level monitoring via ultrasonic sensors',
        'Wireless connectivity (4G/5G) for instant data transmission',
        'Low-power operation with battery efficiency optimization',
        'Geolocation tracking for precise bin locations',
        'Temperature and moisture sensors for waste characterization',
        'Automated alerts when bins reach capacity thresholds',
      ],
    },
    {
      id: 'efficient',
      title: 'Efficient Operations',
      icon: TrendingUp,
      shortDesc: 'Reduce costs and optimize collection routes',
      fullDesc: 'Leverage data analytics and AI algorithms to optimize collection schedules and routes, significantly reducing operational costs while improving service efficiency.',
      details: [
        'AI-powered route optimization reduces fuel consumption by up to 40%',
        'Predictive analytics forecast waste generation patterns',
        'Dynamic scheduling based on real-time bin status',
        'Labor cost reduction through intelligent resource allocation',
        'Vehicle maintenance cost optimization',
        'Reduced carbon emissions and environmental impact',
      ],
    },
    {
      id: 'community',
      title: 'Community Driven',
      icon: Users,
      shortDesc: 'Empowering citizens for cleaner neighborhoods',
      fullDesc: 'Engage citizens as active participants in the waste management ecosystem through mobile apps, gamification, and community initiatives.',
      details: [
        'Mobile app for citizens to report issues and track collections',
        'Gamification with rewards for proper waste segregation',
        'Community awareness campaigns and educational content',
        'Citizen feedback portal for continuous improvement',
        'Public dashboard showing real-time system performance',
        'Integration with local community organizations',
      ],
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white pt-16">
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Smart Waste Management Portal
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-green-100">
            Empowering Cities for a Cleaner and Smarter Tomorrow
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-green-50 leading-relaxed">
            Revolutionizing urban waste management through IoT-enabled smart bins,
            real-time monitoring, and community engagement for a sustainable future.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <button
              onClick={onExploreFeatures}
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Features
            </button>
            <button
              onClick={onViewLocation}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View College Location
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => setSelectedFeature(feature)}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:bg-opacity-20 cursor-pointer group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-green-100">{feature.shortDesc}</p>
                <p className="text-sm text-green-200 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to learn more →
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {selectedFeature && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setSelectedFeature(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 text-white relative">
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200"
              >
                <X size={24} />
              </button>
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full">
                  <selectedFeature.icon className="text-green-600" size={48} />
                </div>
                <h3 className="text-3xl font-bold">{selectedFeature.title}</h3>
              </div>
            </div>

            <div className="p-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {selectedFeature.fullDesc}
              </p>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-1 h-6 bg-green-600 mr-3"></span>
                  Key Features & Benefits
                </h4>
                <ul className="space-y-3">
                  {selectedFeature.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
