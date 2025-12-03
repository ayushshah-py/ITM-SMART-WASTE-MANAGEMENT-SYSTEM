import { Code, Database, Cloud, Smartphone, Cpu, Globe } from 'lucide-react';

export default function Technologies() {
  const techStack = [
    {
      category: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      technologies: ['HTML5 & CSS3', 'JavaScript / TypeScript', 'React.js', 'Tailwind CSS'],
    },
    {
      category: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      technologies: ['PHP / Python', 'Flask / Django', 'RESTful APIs', 'Node.js'],
    },
    {
      category: 'Database Management',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      technologies: ['MySQL', 'PostgreSQL', 'Data Analytics', 'Query Optimization'],
    },
    {
      category: 'Cloud & Hosting',
      icon: Cloud,
      color: 'from-gray-500 to-slate-600',
      technologies: ['AWS', 'Firebase', 'Azure', 'Cloud Storage'],
    },
    {
      category: 'IoT Integration',
      icon: Cpu,
      color: 'from-purple-500 to-pink-500',
      technologies: ['Sensor APIs', 'MQTT Protocol', 'Real-time Data', 'Device Management'],
    },
    {
      category: 'Web Technologies',
      icon: Globe,
      color: 'from-yellow-500 to-orange-500',
      technologies: ['Responsive Design', 'PWA Support', 'Cross-browser', 'Performance Optimization'],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technologies Used
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with modern, industry-standard technologies to ensure scalability,
            reliability, and exceptional performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${tech.color} p-6 text-white`}>
                  <Icon className="mb-3" size={40} />
                  <h3 className="text-2xl font-bold">{tech.category}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {tech.technologies.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technology Stack Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Core Technologies</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Frontend:</span> Modern JavaScript frameworks with responsive design
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Backend:</span> Robust server-side processing and API management
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Database:</span> Reliable data storage and efficient querying
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Advanced Features</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Cloud Integration:</span> Scalable hosting and storage solutions
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold">IoT Connectivity:</span> Real-time data from smart sensors
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Security:</span> End-to-end encryption and secure authentication
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
