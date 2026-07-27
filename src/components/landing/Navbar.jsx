import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiMail, FiMenu, FiX, FiFacebook, FiYoutube, FiInstagram } from "react-icons/fi";
import { NAV_LINKS } from "../../data/landingContent";
import { cn } from "../../utils/cn";
import { SITE } from "../../utils/constants";

/** Helper: is this an external URL or a hash-only anchor? */
function isExternal(to) {
  return to?.startsWith("http") || to?.startsWith("//");
}

/** Smart link: uses <Link> for internal routes, <a> for external/hash */
function SmartLink({ to, children, className, onClick, ...rest }) {
  if (isExternal(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }
  // Hash links on the home page (e.g. "/#about")
  if (to?.startsWith("/#")) {
    return (
      <a href={to} className={className} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="container-vid flex items-center justify-between py-6">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="font-display text-2xl font-bold tracking-tight">
            <span className="text-primary">Krishna</span>
            <span className="text-navy"> Int'l</span>
          </span>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">
            School, Aligarh
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setDropdownOpen(link.label)}
              onMouseLeave={() => link.children && setDropdownOpen(null)}
            >
              <SmartLink
                to={link.to}
                className={cn(
                  "flex items-center gap-1.5 text-sm font-bold transition-colors",
                  location.pathname === link.to ? "text-primary" : "text-gray-700 hover:text-primary"
                )}
              >
                {link.icon && <FiMail size={16} className="text-primary" />}
                {link.label}
                {link.children && <FiChevronDown size={14} className="mt-0.5" />}
              </SmartLink>

              {link.children && (
                <AnimatePresence>
                  {dropdownOpen === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute left-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-highlight py-2"
                    >
                      {link.children.map((child) => (
                        <SmartLink
                          key={child.label}
                          to={child.to}
                          className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-bgLight hover:text-primary"
                        >
                          {child.label}
                        </SmartLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden lg:flex items-center gap-2">
          <SocialIcon href={SITE.social.facebook} icon={FiFacebook} label="Facebook" />
          <SocialIcon href="https://www.youtube.com/@krishnainternationalschoo4378" icon={FiYoutube} label="YouTube" />
          <SocialIcon href={SITE.social.instagram} icon={FiInstagram} label="Instagram" />
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setMobileOpen(true)}
          aria-label="Open Menu"
        >
          <FiMenu size={24} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="font-display text-xl font-bold text-navy">Menu</span>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-navy bg-bgLight rounded-full">
                <FiX size={20} />
              </button>
            </div>
            
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map(link => (
                <div key={link.label}>
                  <SmartLink
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-bold text-navy"
                  >
                    {link.label}
                  </SmartLink>
                  {link.children && (
                    <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-bgLight">
                      {link.children.map(child => (
                        <SmartLink
                          key={child.label}
                          to={child.to}
                          onClick={() => setMobileOpen(false)}
                          className="text-gray-600 font-medium hover:text-primary"
                        >
                          {child.label}
                        </SmartLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 flex gap-3">
              <SocialIcon href={SITE.social.facebook} icon={FiFacebook} label="Facebook" />
              <SocialIcon href="https://www.youtube.com/@krishnainternationalschoo4378" icon={FiYoutube} label="YouTube" />
              <SocialIcon href={SITE.social.instagram} icon={FiInstagram} label="Instagram" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function SocialIcon({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-primary hover:text-white transition-colors"
    >
      <Icon size={14} />
    </a>
  );
}
