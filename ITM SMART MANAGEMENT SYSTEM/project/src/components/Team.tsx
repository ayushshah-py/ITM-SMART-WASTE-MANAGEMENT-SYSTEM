import { User, X } from 'lucide-react';
import { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  responsibilities: string[];
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: 'Jinal Vekariya',
      role: 'Project Leader & Developer',
      expertise: 'System Architecture & Backend Development',
      responsibilities: [
        'Led the entire system design and implementation',
        'Responsible for backend architecture and database integration',
        'Coordinated the team\'s development workflow and quality testing',
        'Ensured project alignment with smart city objectives',
      ],
    },
    {
      name: 'Maitri More',
      role: 'Frontend Developer & UI Designer',
      expertise: 'Web Design & User Interface',
      responsibilities: [
        'Designed responsive web interfaces using HTML, CSS, and JavaScript',
        'Created visually appealing layouts that enhance user experience',
        'Contributed to aesthetic design alignment with project theme',
        'Implemented interactive features and animations',
      ],
    },
    {
      name: 'Khushi Rajput',
      role: 'Research & Documentation Specialist',
      expertise: 'Research Analysis & Technical Writing',
      responsibilities: [
        'Conducted detailed research on waste management challenges and smart city solutions',
        'Prepared comprehensive documentation for the portal\'s development and deployment',
        'Ensured project alignment with sustainability goals',
        'Created technical reports and project presentations',
      ],
    },
    {
      name: 'Twisha Panchal',
      role: 'IoT Integration & Testing Engineer',
      expertise: 'IoT Systems & Quality Assurance',
      responsibilities: [
        'Assisted in conceptualizing IoT-based smart bins and sensor integration',
        'Managed testing, debugging, and performance analysis',
        'Focused on ensuring smooth data transmission between sensors and the portal',
        'Conducted system integration and validation testing',
      ],
    },
    {
      name: 'Tanisha Agrawal',
      role: 'Database & Deployment Specialist',
      expertise: 'Database Management & Cloud Deployment',
      responsibilities: [
        'Handled database schema design and MySQL optimization',
        'Deployed and configured the project on cloud hosting platforms',
        'Maintained data integrity and operational scalability',
        'Implemented backup and recovery strategies',
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            A dedicated team of innovative students committed to creating sustainable
            solutions for smarter cities.
          </p>
          <div className="inline-flex items-center space-x-2 bg-white rounded-lg px-6 py-3 shadow-md">
            <span className="text-2xl">🎓</span>
            <span className="text-lg font-semibold text-gray-900">ITM Vocational University</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-4">
                  <User className="text-green-600" size={48} />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.expertise}</p>
                <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                  View Profile →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Collaborative Excellence
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-8">
            Our diverse team brings together expertise in software development, IoT systems,
            data analytics, and user experience design. Through collaborative effort and
            innovative thinking, we've created a comprehensive solution that addresses
            real-world challenges in urban waste management.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">5</div>
              <p className="text-gray-700">Team Members</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-700">Hours of Development</p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg">
              <div className="text-3xl font-bold text-gray-700 mb-2">1</div>
              <p className="text-gray-700">Shared Vision</p>
            </div>
          </div>
        </div>
      </div>

      {selectedMember && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 text-white relative">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full mb-4">
                  <User className="text-green-600" size={64} />
                </div>
                <h3 className="text-3xl font-bold mb-2">{selectedMember.name}</h3>
                <p className="text-xl text-green-100">{selectedMember.role}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-1 h-6 bg-green-600 mr-3"></span>
                  Expertise
                </h4>
                <p className="text-gray-700 text-lg">{selectedMember.expertise}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-1 h-6 bg-green-600 mr-3"></span>
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {selectedMember.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{responsibility}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <span className="text-xl">🎓</span>
                  <span className="font-semibold">ITM Vocational University</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
