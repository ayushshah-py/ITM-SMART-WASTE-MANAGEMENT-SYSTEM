import { AlertTriangle, TrendingDown, DollarSign, Users } from 'lucide-react';

export default function ProblemStatement() {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Overflowing Bins',
      description: 'Inefficient tracking leads to overflowing waste bins, creating health hazards and environmental pollution in urban areas.',
      color: 'red',
    },
    {
      icon: TrendingDown,
      title: 'Lack of Real-Time Data',
      description: 'Municipal authorities lack visibility into bin fill levels, making it difficult to optimize collection schedules and routes.',
      color: 'orange',
    },
    {
      icon: DollarSign,
      title: 'High Operational Costs',
      description: 'Manual monitoring and unoptimized routes result in excessive fuel consumption, labor costs, and vehicle maintenance.',
      color: 'yellow',
    },
    {
      icon: Users,
      title: 'Low Community Engagement',
      description: 'Citizens have limited involvement in waste management processes, reducing awareness and participation in cleanliness initiatives.',
      color: 'blue',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Problem Statement
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional waste management systems face critical challenges that impact
            urban cleanliness, operational efficiency, and environmental sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const colorClasses = {
              red: 'bg-red-100 text-red-600',
              orange: 'bg-orange-100 text-orange-600',
              yellow: 'bg-yellow-100 text-yellow-600',
              blue: 'bg-blue-100 text-blue-600',
            };

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-4 ${colorClasses[problem.color as keyof typeof colorClasses]}`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The Impact of Inaction
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Without addressing these challenges, cities face escalating issues including public
            health risks, environmental degradation, wasted resources, and declining quality of life.
            The Smart Waste Management Portal provides a comprehensive solution to transform these
            challenges into opportunities for building cleaner, smarter, and more sustainable cities.
          </p>
        </div>
      </div>
    </div>
  );
}
