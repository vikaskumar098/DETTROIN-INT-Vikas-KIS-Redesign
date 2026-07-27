import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiYoutube, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { SITE } from "../../utils/constants";

/**
 * Curated 4-column footer replacing the original's full sitemap
 * duplication (every nav category repeated in full). Each column has
 * a single clear job, keeping the footer scannable, not exhausting.
 */
export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-100">
      <div className="container-kis grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 font-display text-lg font-semibold text-ink-900">
              K
            </span>
            <span className="font-display text-lg text-white">Krishna International</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
            Dedicated to excellence — nurturing intellectually curious, self-motivated learners on a five-acre campus in Aligarh.
          </p>
          <div className="mt-6 flex gap-3">
            <SocialIcon href={SITE.social.facebook} icon={FiFacebook} label="Facebook" />
            <SocialIcon href={SITE.social.instagram} icon={FiInstagram} label="Instagram" />
            <SocialIcon href={SITE.social.youtube} icon={FiYoutube} label="YouTube" />
          </div>
        </div>

        <FooterColumn
          title="Quick Links"
          links={[
            { label: "About Us", to: "/about" },
            { label: "Academics", to: "/academics" },
            { label: "Admissions", to: "/admissions" },
            { label: "Gallery", to: "/gallery" },
          ]}
        />

        <FooterColumn
          title="Resources"
          links={[
            { label: "Fee Structure", to: "/admissions#fees" },
            { label: "Transfer Certificate", to: "/contact" },
            { label: "Careers", to: "/contact#careers" },
            { label: "Mandatory Disclosure", to: "/about#disclosure" },
          ]}
        />

        <div>
          <h4 className="font-display text-base text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-ink-300">
            <li className="flex items-start gap-2.5">
              <FiMapPin className="mt-0.5 shrink-0 text-gold-400" size={15} />
              {SITE.address}
            </li>
            <li className="flex items-center gap-2.5">
              <FiPhone className="shrink-0 text-gold-400" size={15} />
              <a href={`tel:${SITE.phone1.replace(/\s/g, "")}`} className="hover:text-white">
                {SITE.phone1}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <FiMail className="shrink-0 text-gold-400" size={15} />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-kis flex flex-col items-center justify-between gap-4 py-6 text-xs text-ink-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Krishna International School. All rights reserved.</p>
          <p>
            School Code: <span className="text-ink-200">{SITE.schoolCode}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-display text-base text-white">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-ink-300 link-underline hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-ink-100 transition-colors hover:bg-gold-500 hover:text-ink-900"
    >
      <Icon size={15} />
    </a>
  );
}
