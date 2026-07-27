import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiSend, FiCheck } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import { SITE } from "../../utils/constants";

/**
 * A working on-site enquiry form + embedded map, replacing the original's
 * approach of burying contact details at the bottom of a long footer with
 * no on-site form at all (enrollment jumped straight to a third-party portal).
 */
export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", grade: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production this posts to the school's CRM/inbox endpoint.
    setSubmitted(true);
  };

  return (
    <section className="section-pad bg-white" id="contact">
      <div className="container-kis">
        <SectionHeading eyebrow="Get In Touch" title="Visit, call, or send an enquiry" align="center" />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-5">
            <ContactRow icon={FiMapPin} title="Address" value={SITE.address} href={SITE.mapUrl} />
            <ContactRow icon={FiPhone} title="Phone" value={SITE.phone1} href={`tel:${SITE.phone1.replace(/\s/g, "")}`} />
            <ContactRow icon={FiMail} title="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
            <div className="aspect-video overflow-hidden rounded-xl2 ring-1 ring-ink-100">
              <iframe
                title="Krishna International School location"
                className="h-full w-full"
                loading="lazy"
                src="https://maps.google.com/maps?q=Krishna%20International%20School%20Aligarh&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>

          <div className="rounded-xl2 bg-ivory p-7 shadow-card ring-1 ring-ink-50 lg:col-span-3 sm:p-10">
            {submitted ? (
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                  <FiCheck size={24} />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink-900">Enquiry sent</h3>
                <p className="mt-2 max-w-xs text-sm text-slate-600">
                  Our admissions team will reach out within one working day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required />
                <Field label="Phone Number" name="phone" value={form.phone} onChange={handleChange} required type="tel" />
                <Field label="Grade Interested In" name="grade" value={form.grade} onChange={handleChange} className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-ink-100 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-shadow focus:border-gold-400 focus:ring-2 focus:ring-gold-100"
                  />
                </div>
                <button type="submit" className="btn-primary sm:col-span-2">
                  Send Enquiry <FiSend size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, title, value, href }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex items-start gap-4 rounded-xl2 p-4 transition-colors hover:bg-ivory"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-900 text-gold-400">
        <Icon size={16} />
      </span>
      <span>
        <span className="block text-xs uppercase tracking-wide text-slate-500">{title}</span>
        <span className="mt-0.5 block font-medium text-ink-900">{value}</span>
      </span>
    </a>
  );
}

function Field({ label, name, value, onChange, required, type = "text", className }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink-800">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-ink-100 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-shadow focus:border-gold-400 focus:ring-2 focus:ring-gold-100"
      />
    </div>
  );
}
