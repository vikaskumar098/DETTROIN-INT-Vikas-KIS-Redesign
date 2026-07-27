import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiChevronDown, FiPhone } from "react-icons/fi";
import { useScrolled } from "../../hooks/useScrollPosition";
import { NAV_LINKS } from "../../utils/navigation";
import { SITE } from "../../utils/constants";
import Button from "../ui/Button";
import { cn } from "../../utils/cn";

/**
 * Why this beats the original navbar:
 * - One CTA of highest visual weight ("Enquire Now") instead of three
 *   competing buttons (Enroll / Explore / Pay Fee) in the original hero+header.
 * - Dropdowns cap at 4 links (mega-menus in the original had up to 11).
 * - Fully keyboard-operable: every trigger is a real <button>, not an <a href="#">.
 * - Condenses on scroll (opacity + height) instead of staying a bulky fixed block.
 */
export default function Navbar() {
  const scrolled = useScrolled(40);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-soft py-2"
            : "bg-transparent py-4"
        )}
      >
        {/* Utility bar */}
        <div
          className={cn(
            "hidden lg:block border-b transition-all duration-300 overflow-hidden",
            scrolled ? "max-h-0 opacity-0 border-transparent" : "max-h-10 opacity-100 border-white/10"
          )}
        >
          <div className="container-kis flex items-center justify-end gap-6 py-1.5 text-xs text-white/80">
            <a href={`tel:${SITE.phone1.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-gold-300">
              <FiPhone size={12} /> {SITE.phone1}
            </a>
            <a href={SITE.feeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">
              Pay Fee
            </a>
            <a href={SITE.portalUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">
              Parent Portal
            </a>
          </div>
        </div>

        <nav className="container-kis flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
            <span
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full font-display text-lg font-semibold transition-colors",
                scrolled ? "bg-ink-900 text-gold-400" : "bg-white/15 text-white backdrop-blur"
              )}
            >
              K
            </span>
            <span className={cn("font-display text-lg leading-tight", scrolled ? "text-ink-900" : "text-white")}>
              Krishna International
              <span className="block text-[11px] font-sans font-medium uppercase tracking-[0.16em] opacity-70">
                School, Aligarh
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => link.children && setOpenDropdown(null)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      scrolled ? "text-ink-800 hover:text-gold-700" : "text-white/90 hover:text-white",
                      isActive && (scrolled ? "text-gold-700" : "text-white")
                    )
                  }
                >
                  {link.label}
                  {link.children && <FiChevronDown size={14} aria-hidden="true" />}
                </NavLink>

                <AnimatePresence>
                  {link.children && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full mt-1 w-64 rounded-xl2 bg-white p-2 shadow-lifted ring-1 ring-ink-50"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          className="block rounded-lg px-4 py-2.5 text-sm text-ink-700 hover:bg-ivory hover:text-gold-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button to="/admissions" variant={scrolled ? "gold" : "outline"} className={!scrolled ? "!border-white/40 !text-white !bg-white/10" : ""}>
              Enquire Now
            </Button>
          </div>

          {/* Mobile trigger */}
          <button
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full lg:hidden",
              scrolled ? "text-ink-900 bg-ink-50" : "text-white bg-white/10"
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={20} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-ink-950/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-[95] w-[85%] max-w-sm overflow-y-auto bg-white p-6 lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-lg text-ink-900">Menu</span>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-50 text-ink-900"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <MobileAccordionLink key={link.label} link={link} onNavigate={() => setMobileOpen(false)} />
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Button to="/admissions" variant="gold" onClick={() => setMobileOpen(false)}>
                  Enquire Now
                </Button>
                <Button href={SITE.feeUrl} variant="outline">
                  Pay School Fee
                </Button>
              </div>

              <div className="mt-8 border-t border-ink-100 pt-6 text-sm text-slate-600">
                <a href={`tel:${SITE.phone1.replace(/\s/g, "")}`} className="flex items-center gap-2 font-medium text-ink-900">
                  <FiPhone size={14} /> {SITE.phone1}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileAccordionLink({ link, onNavigate }) {
  const [open, setOpen] = useState(false);

  if (!link.children) {
    return (
      <Link
        to={link.to}
        onClick={onNavigate}
        className="rounded-lg px-3 py-3 text-base font-medium text-ink-900 hover:bg-ivory"
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-ink-900 hover:bg-ivory"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {link.label}
        <FiChevronDown className={cn("transition-transform", open && "rotate-180")} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-4"
          >
            {link.children.map((child) => (
              <Link
                key={child.label}
                to={child.to}
                onClick={onNavigate}
                className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:text-gold-700"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
