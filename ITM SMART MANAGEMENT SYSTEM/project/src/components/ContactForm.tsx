import { useState } from 'react';
import { X, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    emailAddress: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!formData.fullName.trim()) {
        throw new Error('Please enter your full name');
      }
      if (!formData.contactNumber.trim()) {
        throw new Error('Please enter your contact number');
      }
      if (!formData.emailAddress.trim()) {
        throw new Error('Please enter your email address');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.emailAddress)) {
        throw new Error('Please enter a valid email address');
      }

      const { error: submitError } = await supabase
        .from('form_submissions')
        .insert([
          {
            full_name: formData.fullName,
            contact_number: formData.contactNumber,
            email_address: formData.emailAddress,
          },
        ]);

      if (submitError) throw submitError;

      setSubmitted(true);
      setFormData({
        fullName: '',
        contactNumber: '',
        emailAddress: '',
      });

      setTimeout(() => {
        onClose();
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full shadow-2xl transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-200"
          >
            <X size={24} />
          </button>
          <h3 className="text-2xl font-bold">Get Started</h3>
          <p className="text-green-100 text-sm mt-1">
            Join us in building a cleaner future
          </p>
        </div>

        {submitted ? (
          <div className="p-8 flex flex-col items-center justify-center text-center">
            <div className="bg-green-100 rounded-full p-4 mb-4">
              <CheckCircle className="text-green-600" size={48} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Success!</h4>
            <p className="text-gray-600">
              Thank you for your interest. We will contact you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all duration-200 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                placeholder="Enter your contact number"
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all duration-200 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all duration-200 disabled:bg-gray-100"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit</span>
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              We respect your privacy and will never share your information.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
