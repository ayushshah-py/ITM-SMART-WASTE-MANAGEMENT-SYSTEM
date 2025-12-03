import { CheckCircle2, TrendingUp, Target, Sparkles } from 'lucide-react';

interface ConclusionProps {
  onGetStarted: () => void;
  onLearnMore: () => void;
  onOpenContactForm: () => void;
}

export default function Conclusion({ onLearnMore, onOpenContactForm }: ConclusionProps) {
  return (
    <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conclusion
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-2xl text-green-100 max-w-3xl mx-auto">
            Empowering cities and citizens for a cleaner tomorrow
          </p>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
          <p className="text-xl text-white leading-relaxed mb-8 text-center">
            The Smart Waste Management Portal represents a significant leap forward in urban
            infrastructure and environmental stewardship. By seamlessly integrating IoT technology,
            data analytics, and community engagement, we've created a comprehensive solution that
            addresses the critical challenges facing modern cities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                <CheckCircle2 size={28} />
                <span>Key Achievements</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Automated waste collection with real-time monitoring</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Reduced operational costs and environmental impact</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Enhanced citizen participation and awareness</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Scalable architecture for future expansion</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                <Target size={28} />
                <span>Future Scope</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>AI-powered predictive analytics for waste generation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Integration with smart city infrastructure</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Gamification for increased citizen engagement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Blockchain for transparent waste tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
            <TrendingUp className="mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-2">Smart Cities</h3>
            <p className="text-green-100">
              Contributing to the development of intelligent, sustainable urban environments
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
            <Sparkles className="mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-2">Innovation</h3>
            <p className="text-green-100">
              Leveraging cutting-edge technology to solve real-world challenges
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
            <CheckCircle2 className="mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-2">Sustainability</h3>
            <p className="text-green-100">
              Promoting environmental responsibility and long-term ecological balance
            </p>
          </div>
        </div>

        <div className="text-center bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Building a Cleaner Future
          </h3>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Together, we can transform waste management from a challenge into an opportunity
            for creating healthier, more livable cities for generations to come.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenContactForm}
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
            </button>
            <button
              onClick={onLearnMore}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-white mb-2">
            🌍 Empowering cities and citizens for a cleaner tomorrow 🌱
          </p>
          <p className="text-green-200 text-lg">
            A project by ITM Vocational University Students
          </p>
        </div>
      </div>
    </div>
  );
}
