import React, { useState, useEffect } from 'react';
import { FiSend, FiCheckCircle, FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { contactInfo } from '../../data/contactInfo';
import { submitEnquiry } from '../../services/enquiryService';

const ContactForm = ({ inquiryType }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    whatsapp: '',
    email: '',
    location: '',
    message: '',
    // Dynamic fields
    serviceRequired: '',
    propertyType: '',
    maintenanceType: '',
    renovationType: '',
    workforceCategory: '',
    numWorkers: '',
    requiredDate: '',
    supportRequired: '',
    emergencyType: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset form when inquiry type changes to keep it clean
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      serviceRequired: '',
      propertyType: '',
      maintenanceType: '',
      renovationType: '',
      workforceCategory: '',
      numWorkers: '',
      requiredDate: '',
      supportRequired: '',
      emergencyType: ''
    }));
  }, [inquiryType]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);
    
    try {
      await submitEnquiry({ inquiryType, ...formData });
      setIsSubmitted(true);
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '', company: '', phone: '', whatsapp: '', email: '', location: '', message: '',
          serviceRequired: '', propertyType: '', maintenanceType: '', renovationType: '', workforceCategory: '', numWorkers: '', requiredDate: '', supportRequired: '', emergencyType: ''
        });
      }, 5000);
    } catch (error) {
      setErrorMsg(error.message || 'Failed to submit enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
        <FiCheckCircle className="w-16 h-16 text-green-500 mb-6" />
        <h3 className="text-2xl font-bold text-nand-navy mb-2">Thank you!</h3>
        <p className="text-slate-600 max-w-md mx-auto">
          Your requirement has been received. Our team will review the details and contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      
      {/* EMERGENCY WARNING PANEL */}
      {inquiryType === 'emergency' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
          <p className="text-red-800 text-sm font-semibold mb-4">
            For urgent maintenance requirements, you can also contact NAND directly by phone or WhatsApp for immediate support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:+${contactInfo.phoneRaw}`} className="flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded font-bold hover:bg-red-700 transition-colors text-sm">
              <FiPhoneCall className="mr-2" /> Call Now
            </a>
            <a href={`https://wa.me/${contactInfo.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 bg-[#25D366] text-white rounded font-bold hover:bg-[#20bd5a] transition-colors text-sm">
              <FaWhatsapp className="mr-2" /> WhatsApp Now
            </a>
          </div>
        </div>
      )}

      {/* BASE FIELDS (Always shown) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name <span className="text-nand-orange">*</span></label>
          <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-nand-blue focus:ring-2 focus:ring-nand-blue/20 outline-none transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-nand-blue focus:ring-2 focus:ring-nand-blue/20 outline-none transition-all" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number <span className="text-nand-orange">*</span></label>
          <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-nand-blue focus:ring-2 focus:ring-nand-blue/20 outline-none transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email Address <span className="text-nand-orange">*</span></label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-nand-blue focus:ring-2 focus:ring-nand-blue/20 outline-none transition-all" />
        </div>
      </div>

      {/* CONDITIONAL FIELDS BASED ON INQUIRY TYPE */}
      
      {/* CONTRACTING */}
      {inquiryType === 'contracting' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-lg border border-slate-100">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Service Required</label>
            <select name="serviceRequired" value={formData.serviceRequired} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-nand-blue focus:ring-2 focus:ring-nand-blue/20 outline-none transition-all bg-white">
              <option value="" disabled>Select...</option>
              <option value="Facility Maintenance">Facility Maintenance</option>
              <option value="Civil Works">Civil Works</option>
              <option value="Technical Maintenance">Technical Maintenance</option>
              <option value="Painting & Decoration">Painting & Decoration</option>
              <option value="Gypsum & False Ceiling">Gypsum & False Ceiling</option>
              <option value="Subcontracting">Subcontracting</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Property Type</label>
            <select name="propertyType" value={formData.propertyType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-nand-blue focus:ring-2 focus:ring-nand-blue/20 outline-none transition-all bg-white">
              <option value="" disabled>Select...</option>
              <option value="Villa">Villa</option>
              <option value="Apartment">Apartment</option>
              <option value="Commercial Building">Commercial Building</option>
              <option value="Office">Office</option>
              <option value="Shop">Shop</option>
              <option value="Hospitality Property">Hospitality Property</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      )}

      {/* MAINTENANCE */}
      {inquiryType === 'maintenance' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-lg border border-slate-100">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Maintenance Type</label>
            <select name="maintenanceType" value={formData.maintenanceType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-nand-blue focus:ring-2 focus:ring-nand-blue/20 outline-none transition-all bg-white">
              <option value="" disabled>Select...</option>
              <option value="Building Maintenance">Building Maintenance</option>
              <option value="Preventive Maintenance">Preventive Maintenance</option>
              <option value="Corrective Maintenance">Corrective Maintenance</option>
              <option value="HVAC / AC">HVAC / AC</option>
              <option value="Electrical">Electrical</option>
              <option value="Plumbing">Plumbing</option>
              <option value="AMC Requirement">AMC Requirement</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Property Type</label>
            <input type="text" name="propertyType" value={formData.propertyType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-nand-blue focus:ring-2 focus:ring-nand-blue/20 outline-none transition-all bg-white" placeholder="e.g. Commercial Office" />
          </div>
        </div>
      )}

      {/* RENOVATION */}
      {inquiryType === 'renovation' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-lg border border-slate-100">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Renovation Type</label>
            <select name="renovationType" value={formData.renovationType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-nand-blue focus:ring-2 focus:ring-nand-blue/20 outline-none transition-all bg-white">
              <option value="" disabled>Select...</option>
              <option value="Villa Renovation">Villa Renovation</option>
              <option value="Apartment Renovation">Apartment Renovation</option>
              <option value="Office Renovation">Office Renovation</option>
              <option value="Shop / Commercial Renovation">Shop / Commercial Renovation</option>
              <option value="Interior Fit-Out">Interior Fit-Out</option>
              <option value="Partition Works">Partition Works</option>
              <option value="Ceiling Works">Ceiling Works</option>
              <option value="Complete Finishing Package">Complete Finishing Package</option>
            </select>
          </div>
        </div>
      )}

      {/* MANPOWER */}
      {inquiryType === 'manpower' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-lg border border-slate-100">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Workforce Category</label>
            <select name="workforceCategory" value={formData.workforceCategory} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-nand-blue focus:ring-2 focus:ring-nand-blue/20 outline-none transition-all bg-white">
              <option value="" disabled>Select...</option>
              <option value="Hospitality & Service Staff">Hospitality & Service Staff</option>
              <option value="Drivers & Transport Support">Drivers & Transport Support</option>
              <option value="Construction & General Labour">Construction & General Labour</option>
              <option value="Warehouse & Logistics">Warehouse & Logistics Workforce</option>
              <option value="Facility & Cleaning Support">Facility & Cleaning Support</option>
              <option value="Temporary & Outsourced">Temporary & Outsourced Workforce</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Number of Workers</label>
            <input type="number" min="1" name="numWorkers" value={formData.numWorkers} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-nand-blue focus:ring-2 focus:ring-nand-blue/20 outline-none transition-all bg-white" placeholder="e.g. 5" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Required Date</label>
            <input type="date" name="requiredDate" value={formData.requiredDate} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-nand-blue focus:ring-2 focus:ring-nand-blue/20 outline-none transition-all bg-white text-slate-600" />
          </div>
        </div>
      )}

      {/* HOSPITALITY */}
      {inquiryType === 'hospitality' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-lg border border-slate-100">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Support Required</label>
            <select name="supportRequired" value={formData.supportRequired} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-nand-blue focus:ring-2 focus:ring-nand-blue/20 outline-none transition-all bg-white">
              <option value="" disabled>Select...</option>
              <option value="Hotel Support">Hotel Support</option>
              <option value="Restaurant Support">Restaurant Support</option>
              <option value="Hospitality Operations Support">Hospitality Operations Support</option>
              <option value="Event Hospitality Support">Event Hospitality Support</option>
              <option value="Guest Service Support">Guest Service Support</option>
              <option value="Hospitality Facility Support">Hospitality Facility Support</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Business / Property Name</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-nand-blue focus:ring-2 focus:ring-nand-blue/20 outline-none transition-all bg-white" placeholder="Your Hotel / Restaurant" />
          </div>
        </div>
      )}

      {/* EMERGENCY */}
      {inquiryType === 'emergency' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-lg border border-slate-100">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Emergency Category</label>
            <select name="emergencyType" value={formData.emergencyType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-nand-blue focus:ring-2 focus:ring-nand-blue/20 outline-none transition-all bg-white">
              <option value="" disabled>Select...</option>
              <option value="Plumbing Emergency">Plumbing Emergency</option>
              <option value="Electrical Emergency">Electrical Emergency</option>
              <option value="AC / HVAC Breakdown">AC / HVAC Breakdown</option>
              <option value="Water Leakage">Water Leakage</option>
              <option value="General Emergency Repair">General Emergency Repair</option>
            </select>
          </div>
        </div>
      )}

      {/* SHARED END FIELDS */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Location / Area</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-nand-blue focus:ring-2 focus:ring-nand-blue/20 outline-none transition-all" placeholder="Doha, Lusail, etc." />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          {inquiryType === 'general' ? 'Message' : 'Requirement Details'} <span className="text-nand-orange">*</span>
        </label>
        <textarea name="message" required rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-nand-blue focus:ring-2 focus:ring-nand-blue/20 outline-none transition-all resize-none" placeholder="Please describe your requirements..."></textarea>
      </div>

      {errorMsg && (
        <div className="bg-red-50 text-red-600 p-3 rounded text-sm mb-4">
          {errorMsg}
        </div>
      )}
      <div className="pt-2">
        <button type="submit" disabled={isSubmitting} className="w-full md:w-auto inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-nand-orange text-white font-bold rounded-md hover:bg-[#e66d00] transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed">
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          {!isSubmitting && <FiSend className="ml-2 w-4 h-4" />}
        </button>
      </div>

    </form>
  );
};

export default ContactForm;
