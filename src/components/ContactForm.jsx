import React, { useState, useEffect } from 'react';
import { Mail, Phone, User, MapPin, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

const ContactForm = ({ presetRequirement = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    requirement: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Pre-fill requirements if passed down via props
  useEffect(() => {
    if (presetRequirement) {
      let matchedOption = '';
      const text = presetRequirement.toLowerCase();
      
      if (text.includes('panel') || text.includes('epc')) {
        matchedOption = 'Solar EPC Project Services';
      } else if (text.includes('inverter') || text.includes('battery')) {
        matchedOption = 'Inverters & Battery Systems';
      } else if (text.includes('water heater') || text.includes('water heating') || text.includes('heater')) {
        matchedOption = 'Solar Water Heater System';
      } else if (text.includes('street light') || text.includes('lighting')) {
        matchedOption = 'Solar Street Lighting Systems';
      } else if (text.includes('subsidy')) {
        matchedOption = 'Government Subsidy Guidance';
      } else if (text.includes('maintenance') || text.includes('support') || text.includes('clean')) {
        matchedOption = 'Solar Maintenance / Support';
      } else if (text.includes('residential') || text.includes('home') || text.includes('fan')) {
        // Map fans to household appliances or residential
        matchedOption = 'Residential Solar (Home)';
      } else if (text.includes('commercial') || text.includes('business')) {
        matchedOption = 'Commercial Solar (Business)';
      } else if (text.includes('industrial') || text.includes('factory')) {
        matchedOption = 'Industrial Solar (Factory)';
      } else {
        matchedOption = 'Other Solar Enquiry';
      }

      setFormData(prev => ({ 
        ...prev, 
        requirement: matchedOption,
        message: `Inquiring about: ${presetRequirement}. Please provide additional technical specifications and price estimation.`
      }));
    }
  }, [presetRequirement]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    // Numeric 10 digit validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/[\s-+]/g, '').slice(-10))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.location.trim()) newErrors.location = 'Location/City is required';
    if (!formData.requirement) newErrors.requirement = 'Please select a requirement';
    if (!formData.message.trim()) newErrors.message = 'Please input details of your energy needs';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when field changes
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API connection
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        requirement: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-100/50 shadow-md">
      {submitStatus === 'success' ? (
        <div className="text-center py-8 animate-fadeIn">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
          <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
            Your inquiry has been successfully transmitted. Our solar solution experts will contact you within 24 working hours.
          </p>
          <button
            onClick={() => setSubmitStatus(null)}
            className="mt-6 inline-flex items-center justify-center font-bold text-xs uppercase tracking-wider bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-xl transition-all"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <h3 className="text-xl font-bold text-primary mb-4 pb-2 border-b border-slate-50 flex items-center justify-between">
            <span>Send Enquiry Message</span>
            <span className="text-[10px] text-slate-400 font-normal">* All fields required</span>
          </h3>

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Full Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="h-4.5 w-4.5" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                  errors.name 
                    ? 'border-red-300 focus:ring-red-100' 
                    : 'border-slate-205 focus:border-primary focus:ring-primary/10'
                }`}
                placeholder="Enter your name"
                disabled={isSubmitting}
              />
            </div>
            {errors.name && (
              <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                <AlertCircle className="h-3 w-3" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Phone Number *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Phone className="h-4.5 w-4.5" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                  errors.phone 
                    ? 'border-red-300 focus:ring-red-100' 
                    : 'border-slate-205 focus:border-primary focus:ring-primary/10'
                }`}
                placeholder="Enter 10-digit mobile number"
                disabled={isSubmitting}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                <AlertCircle className="h-3 w-3" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex justify-between">
              <span>Email Address</span>
              <span className="text-[10px] text-slate-400 lowercase font-normal">(optional)</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Mail className="h-4.5 w-4.5" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                  errors.email 
                    ? 'border-red-300 focus:ring-red-100' 
                    : 'border-slate-205 focus:border-primary focus:ring-primary/10'
                }`}
                placeholder="Enter your email address"
                disabled={isSubmitting}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                <AlertCircle className="h-3 w-3" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Location Field */}
          <div>
            <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              City / Location *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <MapPin className="h-4.5 w-4.5" />
              </div>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                  errors.location 
                    ? 'border-red-300 focus:ring-red-100' 
                    : 'border-slate-205 focus:border-primary focus:ring-primary/10'
                }`}
                placeholder="e.g. Bangalore, Pune, etc."
                disabled={isSubmitting}
              />
            </div>
            {errors.location && (
              <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                <AlertCircle className="h-3 w-3" />
                <span>{errors.location}</span>
              </p>
            )}
          </div>

          {/* Requirement Selector */}
          <div>
            <label htmlFor="requirement" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Energy Requirement / Sizing *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <FileText className="h-4.5 w-4.5" />
              </div>
              <select
                id="requirement"
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 bg-white ${
                  errors.requirement 
                    ? 'border-red-300 focus:ring-red-100' 
                    : 'border-slate-205 focus:border-primary focus:ring-primary/10'
                }`}
                disabled={isSubmitting}
              >
                <option value="">-- Choose Requirement Category --</option>
                <option value="Residential Solar (Home)">Residential Solar (Home)</option>
                <option value="Commercial Solar (Business)">Commercial Solar (Business)</option>
                <option value="Industrial Solar (Factory)">Industrial Solar (Factory)</option>
                <option value="Inverters & Battery Systems">Inverters & Battery Systems</option>
                <option value="Solar Water Heater System">Solar Water Heater System</option>
                <option value="Solar Street Lighting Systems">Solar Street Lighting Systems</option>
                <option value="Solar EPC Project Services">Solar EPC Project Services</option>
                <option value="Government Subsidy Guidance">Government Subsidy Guidance</option>
                <option value="Solar Maintenance / Support">Solar Maintenance / Support</option>
                <option value="Other Solar Enquiry">Other Solar Enquiry</option>
              </select>
            </div>
            {errors.requirement && (
              <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                <AlertCircle className="h-3 w-3" />
                <span>{errors.requirement}</span>
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Detailed Requirements *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.message 
                  ? 'border-red-300 focus:ring-red-100' 
                  : 'border-slate-205 focus:border-primary focus:ring-primary/10'
              }`}
              placeholder="e.g. system size needed (3 kW, 5 kW, etc.), details of monthly electricity bill, spacing details..."
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                <AlertCircle className="h-3 w-3" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit Trigger */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-primary-light text-white font-extrabold text-xs uppercase tracking-widest py-4 rounded-xl shadow-md transition-all active:scale-97 select-none disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Processing...</span>
              </div>
            ) : (
              <span>Submit Request</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
