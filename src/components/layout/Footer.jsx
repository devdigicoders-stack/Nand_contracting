import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa6';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { contactInfo } from '../../data/contactInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nand-navy text-slate-300 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-nand-orange via-[#FFB067] to-transparent opacity-80"></div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* COLUMN 01 — COMPANY */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start text-left pb-6 lg:pb-0">
            <Link 
              to="/" 
              className="inline-block mb-5 transition-transform duration-300 hover:scale-105"
            >
              <img 
                src="/logo.png" 
                alt="NAND Contracting & Hospitality Services" 
                className="h-16 sm:h-20 w-auto max-w-[260px] object-contain rounded-xl bg-white p-1.5 shadow-md ring-1 ring-white/10" 
              />
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed mb-5 text-slate-400 max-w-sm">
              NAND Contracting & Hospitality Services provides integrated contracting, civil maintenance, architectural renovation, hospitality staffing and outsourced manpower solutions across Qatar.
            </p>
            <div className="bg-nand-orange/10 border border-nand-orange/20 px-3.5 py-2 rounded-xl inline-block">
              <p className="text-xs font-semibold text-white">
                Building Trust. <span className="text-nand-orange">Maintaining Excellence.</span>
              </p>
            </div>
            
            {/* SOCIAL LINKS */}
            <div className="mt-6 flex items-center space-x-3">
              <a href="https://www.facebook.com/share/19dNL9zbFA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center transition-all bg-[#1877F2] text-white border border-[#1877F2] hover:opacity-80" title="Facebook">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/nandqa2026" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center transition-all bg-[#E4405F] text-white border border-[#E4405F] hover:opacity-80" title="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/nandqa/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center transition-all bg-[#0A66C2] text-white border border-[#0A66C2] hover:opacity-80" title="LinkedIn">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@nandqa.com?_r=1&_t=ZS-9A4sUROzUvN" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center transition-all bg-[#000000] text-white border border-[#000000] hover:opacity-80" title="TikTok">
                <FaTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 02 — QUICK LINKS */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-white font-bold mb-4 tracking-wide uppercase text-xs sm:text-sm flex flex-col items-start">
              Quick Links
              <span className="w-6 h-0.5 bg-nand-orange mt-1.5 rounded-full"></span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link to="/" className="text-slate-400 hover:text-nand-orange transition-colors hover:translate-x-0.5 inline-block">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-nand-orange transition-colors hover:translate-x-0.5 inline-block">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-nand-orange transition-colors hover:translate-x-0.5 inline-block">Contact Us</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-nand-orange transition-colors hover:translate-x-0.5 inline-block">Request a Quote</Link></li>
            </ul>
          </div>

          {/* COLUMN 03 — SERVICES */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-white font-bold mb-4 tracking-wide uppercase text-xs sm:text-sm flex flex-col items-start">
              Our Services
              <span className="w-6 h-0.5 bg-nand-orange mt-1.5 rounded-full"></span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link to="/contracting-construction" className="text-slate-400 hover:text-nand-orange transition-colors hover:translate-x-0.5 inline-block">Contracting & Construction</Link></li>
              <li><Link to="/facility-maintenance" className="text-slate-400 hover:text-nand-orange transition-colors hover:translate-x-0.5 inline-block">Facility & Technical Maintenance</Link></li>
              <li><Link to="/hospitality-manpower" className="text-slate-400 hover:text-nand-orange transition-colors hover:translate-x-0.5 inline-block">Hospitality & Manpower</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-nand-orange transition-colors hover:translate-x-0.5 inline-block">Emergency Support</Link></li>
            </ul>
          </div>

          {/* COLUMN 04 — CONTACT */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-white font-bold mb-4 tracking-wide uppercase text-xs sm:text-sm flex flex-col items-start">
              Contact NAND
              <span className="w-6 h-0.5 bg-nand-orange mt-1.5 rounded-full"></span>
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm w-full">
              <li>
                <a href={`tel:+${contactInfo.phoneRaw}`} className="flex items-center hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mr-3 text-nand-orange group-hover:bg-nand-orange group-hover:text-white transition-colors shrink-0">
                    <FiPhone className="w-4 h-4" />
                  </div>
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${contactInfo.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mr-3 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                    <FaWhatsapp className="w-4 h-4" />
                  </div>
                  <span>{contactInfo.whatsapp} (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mr-3 text-nand-orange group-hover:bg-nand-orange group-hover:text-white transition-colors shrink-0">
                    <FiMail className="w-4 h-4" />
                  </div>
                  <span className="break-all">{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a href={contactInfo.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start group hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mr-3 text-nand-orange group-hover:bg-nand-orange group-hover:text-white transition-colors shrink-0 mt-0.5">
                    <HiOutlineMapPin className="w-4 h-4" />
                  </div>
                  <span className="text-slate-400 text-xs leading-relaxed group-hover:text-white transition-colors">
                    {contactInfo.fullAddress}
                  </span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-slate-800/80 bg-[#04101A]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
              <p>© {currentYear} NAND Contracting & Hospitality Services. All Rights Reserved.</p>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-700"></span>
              <p>
                Designed and Development by <a href="https://www.worknestconnect.com/" target="_blank" rel="noopener noreferrer" className="text-nand-orange hover:text-[#e66d00] transition-colors font-semibold">Worknest Connect</a>
              </p>
            </div>
            <div className="flex space-x-5">
              <Link to="/privacy-policy" className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-slate-400 transition-colors cursor-pointer">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
