'use client';

import React, { useState } from 'react';
import { ContactSectionData } from '@/types/portfolio';
import { IconRenderer } from '@/components/common/IconRenderer';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { SectionBackgroundMesh } from '@/components/common/SectionBackgroundMesh';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from 'lucide-react';

interface ContactSectionProps {
  contact: ContactSectionData;
  headingTag?: 'h1' | 'h2';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contact, headingTag = 'h2' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _honey: '', // Bot honeypot
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [activationNotice, setActivationNotice] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam trap: if bot filled this hidden field, pretend success
    if (formData._honey) {
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setActivationNotice(false);

    try {
      // Direct CORS-enabled AJAX endpoint to send form details directly to akhilaravindsb@gmail.com
      // Works on GitHub Pages, custom domain, and localhost with no backend required
      const response = await fetch('https://formsubmit.co/ajax/akhilaravindsb@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || 'New Portfolio Project Inquiry',
          message: formData.message.trim(),
          _subject: `New Portfolio Inquiry: ${formData.subject.trim() || 'General'} from ${formData.name.trim()}`,
          _replyto: formData.email.trim(),
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setIsSubmitted(true);
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        // FormSubmit one-time activation flow for new recipient addresses
        setIsSubmitted(true);
        setActivationNotice(true);
      } else {
        throw new Error(data.message || 'Server returned an error');
      }
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setSubmitError(
        'Unable to send message automatically. You can click below to send via your email client or retry.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const mailtoFallbackUrl = `mailto:akhilaravindsb@gmail.com?subject=${encodeURIComponent(
    formData.subject || `New Inquiry from ${formData.name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" aria-label="Contact Section" className="py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-[#F0F0F6] p-6 sm:p-8 shadow-sm relative overflow-hidden">
          {/* Blurred glowing background color mesh */}
          <SectionBackgroundMesh variant="default" />

          <div className="relative z-10">
            <ScrollReveal direction="up">
              {headingTag === 'h1' ? (
                <h1 className="text-2xl font-black text-[#2B2B2B] mb-2 tracking-tight">
                  {contact.form.heading}
                </h1>
              ) : (
                <h2 className="text-2xl font-black text-[#2B2B2B] mb-2 tracking-tight">
                  {contact.form.heading}
                </h2>
              )}
              <p className="text-xs text-[#767676] mb-6 leading-relaxed">
                {contact.subtitle}
              </p>
            </ScrollReveal>

            {isSubmitted ? (
              <div
                role="alert"
                aria-live="polite"
                className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 sm:p-8 text-center space-y-4 animate-fade-in-up"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-emerald-950">
                    Message Sent to Akhil!
                  </h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                    {activationNotice
                      ? "Your inquiry has been submitted! FormSubmit has sent a one-time confirmation link to akhilaravindsb@gmail.com. Once confirmed, messages will be delivered straight to the inbox."
                      : "Thank you for reaching out! Your form details were sent directly to akhilaravindsb@gmail.com. I will review and reply within 24 hours."}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                        _honey: '',
                      });
                      setSubmitError(null);
                      setActivationNotice(false);
                    }}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                action="https://formsubmit.co/akhilaravindsb@gmail.com"
                method="POST"
                className="space-y-4"
              >
                {/* Honeypot field for bot spam detection */}
                <input
                  type="text"
                  name="_honey"
                  value={formData._honey}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {submitError && (
                  <div
                    role="alert"
                    aria-live="polite"
                    className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-xs text-rose-800 space-y-2 animate-fade-in-up"
                  >
                    <div className="flex items-center gap-2 font-bold text-rose-900">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Submission Notice</span>
                    </div>
                    <p className="leading-relaxed">{submitError}</p>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <a
                        href={mailtoFallbackUrl}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded font-bold transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Send via Email Client</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitError(null)}
                        className="px-3 py-1.5 bg-white border border-rose-200 text-rose-700 hover:bg-rose-100 rounded font-medium transition-colors"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                )}

                {contact.form.fields.map((field) => (
                  <div key={field.name} className="space-y-1.5">
                    <label
                      htmlFor={field.name}
                      className="block text-xs font-bold text-[#2B2B2B]"
                    >
                      {field.label} {field.required && <span className="text-amber-500">*</span>}
                    </label>

                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        rows={5}
                        required={field.required}
                        aria-required={field.required}
                        placeholder={field.placeholder}
                        value={(formData as any)[field.name]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F0F0F6] border border-transparent rounded-lg text-xs text-[#2B2B2B] placeholder-[#71717A] focus:outline-none focus:border-[#FFB400] focus:bg-white transition-all resize-y"
                      />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        aria-required={field.required}
                        placeholder={field.placeholder}
                        value={(formData as any)[field.name]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F0F0F6] border border-transparent rounded-lg text-xs text-[#2B2B2B] placeholder-[#71717A] focus:outline-none focus:border-[#FFB400] focus:bg-white transition-all"
                      />
                    )}
                  </div>
                ))}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#FFB400] hover:bg-[#E5A200] disabled:bg-amber-300 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>{contact.form.submitButton}</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <a
                    href="mailto:akhilaravindsb@gmail.com"
                    className="text-[11px] text-[#767676] hover:text-amber-600 transition-colors inline-flex items-center gap-1.5 self-center"
                  >
                    <Mail className="w-3 h-3 text-[#FFB400]" />
                    <span>Or email directly: akhilaravindsb@gmail.com</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-4">
          <ScrollReveal direction="right">
            <h2 className="text-2xl font-black text-[#2B2B2B] mb-2 tracking-tight">
              Contact Information
            </h2>
            <p className="text-xs text-[#767676] mb-6 leading-relaxed">
              Reach out directly through any of these communication channels.
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {contact.infoCards.map((card, index) => {
              const isEmail = card.icon === 'mail' || card.line1.includes('@');
              const isPhone = card.icon === 'phone' || card.line1.startsWith('+');

              return (
                <ScrollReveal
                  key={card.label}
                  direction="left"
                  delayMs={index * 100}
                >
                  <div className="bg-white rounded-xl border border-[#F0F0F6] p-5 shadow-sm hover:shadow-card-hover transition-all duration-300 flex items-center gap-4 relative overflow-hidden group">
                    {/* Blurred glowing background color mesh */}
                    <SectionBackgroundMesh variant="compact" />

                    <div className="w-12 h-12 rounded-full bg-[#FFB400] text-white flex items-center justify-center shrink-0 shadow-sm relative z-10 group-hover:scale-105 transition-transform">
                      <IconRenderer name={card.icon} className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5 relative z-10">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#767676]">
                        {card.label}
                      </span>

                      {isEmail ? (
                        <a
                          href={`mailto:${card.line1}`}
                          className="text-xs font-bold text-[#2B2B2B] hover:text-amber-600 transition-colors block"
                        >
                          {card.line1}
                        </a>
                      ) : isPhone ? (
                        <a
                          href={`tel:${card.line1.replace(/\s+/g, '')}`}
                          className="text-xs font-bold text-[#2B2B2B] hover:text-amber-600 transition-colors block"
                        >
                          {card.line1}
                        </a>
                      ) : (
                        <p className="text-xs font-bold text-[#2B2B2B]">{card.line1}</p>
                      )}

                      <p className="text-[11px] text-[#767676]">{card.line2}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
