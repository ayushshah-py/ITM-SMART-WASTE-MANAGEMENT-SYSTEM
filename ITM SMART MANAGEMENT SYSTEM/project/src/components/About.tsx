import { Target, CheckCircle2 } from 'lucide-react';

export default function About() {
  const objectives = [
    'Automate waste collection and monitoring processes',
    'Improve urban hygiene and reduce operational costs',
    'Minimize manual intervention and human error',
    'Promote recycling and sustainability practices',
    'Increase citizen participation through user-friendly interfaces',
    'Enable data-driven decision making for authorities',
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About the Project
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Target className="text-green-600" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Project Aim</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To design and develop a comprehensive Smart Waste Management Portal that
              automates waste collection processes, enables real-time monitoring and analytics,
              improves operational efficiency, and encourages active citizen engagement in
              maintaining urban cleanliness and sustainability.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Objectives</h3>
            <div className="space-y-4">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Project Relevance
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            As cities grow rapidly, traditional waste management systems struggle to keep pace.
            Our Smart Waste Management Portal addresses this challenge by leveraging IoT technology,
            data analytics, and community participation to create cleaner, more sustainable urban
            environments. This system aligns with global smart city initiatives and contributes
            to achieving sustainable development goals.
          </p>
        </div>
      </div>
    </div>
  );
}
