import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative text-foreground pt-8 pb-4 text-center mt-8 overflow-hidden bg-primary px-2 sm:px-4">
      {/* Animated gradient background like Hero */}
      {/* Removed light gradients for dark background */}
      <div className="relative z-10">
        <div className="mb-4 flex flex-col items-center justify-center">
          <img src="/on-logo-white.png" alt="Event Logo" className="h-20 w-auto mb-2 mx-auto sm:h-24" />
        </div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 text-base">
          <a href="https://x.com/ObservenowMedia/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-transparent rounded-lg text-white text-xl sm:text-2xl border-2 border-white hover:bg-white/10 transition-colors"><FaTwitter /></a>
          <a href="https://www.facebook.com/people/ObserveNow-Media/61573042113968/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-transparent rounded-lg text-white text-xl sm:text-2xl border-2 border-white hover:bg-white/10 transition-colors"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/company/observenow/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-transparent rounded-lg text-white text-xl sm:text-2xl border-2 border-white hover:bg-white/10 transition-colors"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/now_observe/reels/?hl=am-et" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-transparent rounded-lg text-white text-xl sm:text-2xl border-2 border-white hover:bg-white/10 transition-colors"><FaInstagram /></a>
          <a href="https://www.youtube.com/@ObserveNowMedia" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-transparent rounded-lg text-white text-xl sm:text-2xl border-2 border-white hover:bg-white/10 transition-colors"><FaYoutube /></a>
        </div>
        {/* Removed Terms of use | Privacy Notice links */}
        <div className="text-xs mb-2 px-2 text-center text-white/80 break-words">
          For more information on how we collect and process your personal data please read our <a href="#" className="underline">Privacy Policy</a>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
