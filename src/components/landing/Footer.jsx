import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiYoutube, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

// Helper for footer links
function FooterLink({ to, children, isExternal }) {
  if (isExternal) {
    return (
      <li>
        <a href={to} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
          {children}
        </a>
      </li>
    );
  }
  return (
    <li>
      <Link to={to} className="hover:text-accent transition-colors">
        {children}
      </Link>
    </li>
  );
}

import { FloatingCube } from "../../assets/illustrations";

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy pt-20 pb-10 relative overflow-hidden text-white mt-10">
      
      <div className="absolute right-10 top-10 opacity-10">
        <FloatingCube width={120} height={140} />
      </div>

      <div className="container-vid relative z-10">
        
        {/* Top: Logo + Contact info row */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-16 pb-12 border-b border-white/10">
          
          {/* Logo & Address */}
          <div>
            <h2 className="font-display font-bold text-3xl mb-6 bg-white px-4 py-2 rounded-2xl inline-block">
              <span className="text-primary">Krishna</span>
              <span className="text-navy"> Int'l</span>
            </h2>
            <div className="flex items-start gap-3 mt-4">
              <FiMapPin size={18} className="text-accent mt-1 shrink-0" />
              <div className="text-white/70 text-sm leading-relaxed">
                <p className="font-semibold text-white">KRISHNA INTERNATIONAL SCHOOL</p>
                <p>Delhi G.T. Road, Aligarh-202001</p>
                <p>(U.P.) INDIA</p>
              </div>
            </div>
            <a href="#" className="inline-block mt-3 text-accent font-semibold text-sm hover:text-accentDark transition-colors">
              → View Direction
            </a>
          </div>

          {/* Contact Details + Socials */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-start">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  <FiPhone size={16} />
                </div>
                <div className="text-white/80 text-sm">
                  <p>+ (91) 983-70-50000</p>
                  <p>+ (91) 735-10-50000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">
                  <FiMail size={16} />
                </div>
                <span className="text-white/80 text-sm">info@kisaligarh.com</span>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              <a href="https://www.youtube.com/@krishnainternationalschoo4378" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors text-white/70">
                <FiYoutube size={20} />
              </a>
              <a href="https://www.facebook.com/krishnainternationalaligarh" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-white/70">
                <FiFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/krishnainternationalaligarh/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors text-white/70">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Link Columns — matching original footer */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 mb-16">
          
          {/* About KIS */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-white uppercase tracking-wider">About KIS</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <FooterLink to="/#about">Overview</FooterLink>
              <FooterLink to="/#mission">School Features</FooterLink>
              <FooterLink to="/#about">Chairman's Message</FooterLink>
              <FooterLink to="/#about">Principal's Message</FooterLink>
              <FooterLink to="/#mission">Quintessential Campus</FooterLink>
              <FooterLink to="/#about">Why Krishna International?</FooterLink>
              <FooterLink to="/#about">Recognition and Award</FooterLink>
            </ul>
          </div>

          {/* Admission */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-white uppercase tracking-wider">Admission</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <FooterLink to="/admission">Overview</FooterLink>
              <FooterLink to="https://krishnaintf.accevate.com/online/main" isExternal>Fee Payment</FooterLink>
              <FooterLink to="/admission">Fee Structure</FooterLink>
              <FooterLink to="https://krishnaintf.accevate.com/registration/" isExternal>Enroll</FooterLink>
              <FooterLink to="/admission">Transfer Certificate</FooterLink>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-white uppercase tracking-wider">Academics</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <FooterLink to="/academics">Overview</FooterLink>
              <FooterLink to="/academics">Academic Structure</FooterLink>
              <FooterLink to="/academics">Subjects Taught</FooterLink>
              <FooterLink to="/academics">Teaching Methodology</FooterLink>
              <FooterLink to="/academics">Roll of Honour</FooterLink>
              <FooterLink to="/academics">Career Guidance</FooterLink>
            </ul>
          </div>

          {/* Co-Curricular */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-white uppercase tracking-wider">Co-Curricular</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <FooterLink to="/co-curricular">Overview</FooterLink>
              <FooterLink to="/co-curricular">Sports and Life Skills</FooterLink>
              <FooterLink to="/co-curricular">Performing Arts</FooterLink>
              <FooterLink to="/co-curricular">Fine Arts</FooterLink>
              <FooterLink to="/co-curricular">Excursions And Trips</FooterLink>
              <FooterLink to="/co-curricular">Community Engagement</FooterLink>
            </ul>
          </div>

          {/* School Events */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-white uppercase tracking-wider">School Events</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <FooterLink to="/gallery">Recent</FooterLink>
              <FooterLink to="/gallery">Upcoming</FooterLink>
            </ul>
          </div>

          {/* Join Us */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-white uppercase tracking-wider">Join Us</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <FooterLink to="/#contact">Vacancy</FooterLink>
              <FooterLink to="https://krishnaintf.accevate.com/registration/" isExternal>Registration</FooterLink>
              <FooterLink to="https://krishnaintf.accevate.com/alumni/welcome" isExternal>Alumni</FooterLink>
            </ul>
            <div className="mt-6">
              <p className="text-white/40 text-xs mb-1">School code:</p>
              <p className="text-white font-bold text-lg tracking-wider">KISALG</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>KRISHNA INTERNATIONAL SCHOOL © {new Date().getFullYear()}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
