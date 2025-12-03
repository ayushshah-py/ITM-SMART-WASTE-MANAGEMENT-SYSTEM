import { Clock, Bell, DollarSign, BarChart3, Leaf, Heart } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Efficient & Timely Collection',
      description: 'Optimized routes and schedules ensure waste is collected before bins overflow, maintaining cleanliness consistently.',
      color: 'bg-blue-500',
    },
    {
      icon: Bell,
      title: 'Real-Time Monitoring',
      description: 'Instant notifications and alerts keep stakeholders informed about bin status, collection progress, and system issues.',
      color: 'bg-green-500',
    },
    {
      icon: DollarSign,
      title: 'Reduced Costs',
      description: 'Minimize fuel consumption, labor hours, and vehicle wear through intelligent route optimization and need-based collection.',
      color: 'bg-yellow-500',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      description: 'Comprehensive analytics and reporting enable authorities to make informed decisions based on real usage patterns.',
      color: 'bg-red-500',
    },
    {
      icon: Leaf,
      title: 'Environmental Impact',
      description: 'Promote recycling, reduce carbon footprint, and contribute to sustainable urban development goals.',
      color: 'bg-green-600',
    },
    {
      icon: Heart,
      title: 'Public Health',
      description: 'Cleaner streets and timely waste removal reduce disease transmission and improve overall community wellbeing.',
      color: 'bg-pink-500',
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Benefits & Impact
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming waste management to create cleaner cities, healthier communities,
            and a more sustainable future for all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${benefit.color} rounded-lg mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-6 text-center">Measurable Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">40%</div>
              <p className="text-green-100">Cost Reduction</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">60%</div>
              <p className="text-green-100">Time Saved</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">85%</div>
              <p className="text-green-100">Collection Efficiency</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-green-100">Real-Time Visibility</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏙️</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">For Cities</h4>
            <p className="text-gray-700">
              Enhanced operational efficiency, reduced costs, and improved urban aesthetics
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">👥</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">For Citizens</h4>
            <p className="text-gray-700">
              Cleaner neighborhoods, better health outcomes, and active participation in community care
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌍</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">For Environment</h4>
            <p className="text-gray-700">
              Reduced emissions, increased recycling, and contribution to sustainability goals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
