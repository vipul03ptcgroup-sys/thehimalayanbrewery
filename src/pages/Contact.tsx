import { useState } from "react";
import RevealSection from "../components/RevealSection";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  const inputClass = "w-full bg-transparent border-b border-yellow-600/25 py-3 text-amber-50 font-light text-lg placeholder:text-amber-50/25 focus:outline-none focus:border-yellow-500 transition-colors duration-300";

  return (
    <div className="pt-24">
      <section className="relative py-28 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
            <polygon points="0,400 400,100 700,250 1000,80 1440,200 1440,400" fill="#2C3E2D" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950" />
        </div>
        <div className="relative">
          <p className="font-rajdhani text-xs uppercase tracking-[0.5em] text-yellow-500 mb-4">Reach Out</p>
          <h1 className="font-display text-5xl md:text-7xl text-amber-50 mb-6">Let's <em className="text-yellow-500">Connect</em></h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-600/50" />
            <span className="text-yellow-500">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-600/50" />
          </div>
          <p className="text-amber-50/60 text-xl font-light max-w-xl mx-auto">
            Have questions, business inquiries, or want to know more about our products? Get in touch with us — we’re here to help.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <RevealSection>
            <div className="md:sticky md:top-32">
              <p className="font-rajdhani text-xs uppercase tracking-widest text-yellow-500 mb-8">Get in Touch</p>
              <div className="flex flex-col gap-10">
                <div>
                  <p className="font-rajdhani text-xs uppercase tracking-widest text-amber-50/30 mb-2">Location</p>
                  <p className="font-display text-xl text-amber-50">The Himalayan Brewery</p>
                  <p className="text-amber-50/55 font-light text-lg">Virar (East), Maharashtra</p>
                  <p className="text-amber-50/55 font-light text-lg">India</p>
                </div>
                <div>
                  <p className="font-rajdhani text-xs uppercase tracking-widest text-amber-50/30 mb-2">Email</p>
                  <a href="mailto:ptcvirar@gmail.com" className="text-yellow-500 hover:text-yellow-400 transition-colors text-lg font-light">ptcvirar@gmail.com</a>
                </div>
                {/* <div>
                  <p className="font-rajdhani text-xs uppercase tracking-widest text-amber-50/30 mb-2">For Trade Inquiries</p>
                  <a href="mailto:trade@thehimalayanbrewery.com" className="text-yellow-500 hover:text-yellow-400 transition-colors text-lg font-light">trade@thehimalayanbrewery.com</a>
                </div> */}
                {/* <div>
                  <p className="font-rajdhani text-xs uppercase tracking-widest text-amber-50/30 mb-4">Follow Our Journey</p>
                  <div className="flex gap-4">
                    {["Instagram", "Facebook", "X"].map(s => (
                      <a key={s} href="#" className="font-rajdhani text-xs uppercase tracking-widest text-amber-50/40 hover:text-yellow-500 transition-colors border border-amber-50/10 hover:border-yellow-600/40 px-4 py-2">{s}</a>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={150}>
            {sent ? (
              <div className="flex flex-col items-center justify-center min-h-80 text-center py-16">
                <div className="text-5xl mb-6">⛰</div>
                <p className="font-rajdhani text-xs uppercase tracking-widest text-yellow-500 mb-3">Message Sent Successfully</p>
                <h3 className="font-display text-3xl text-amber-50 mb-4">Thank You for Contacting Us</h3>
                <p className="text-amber-50/55 font-light text-lg max-w-sm">YYour message has been received. Our team will get back to you within 24–48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <p className="font-rajdhani text-xs uppercase tracking-widest text-yellow-500">Send Us a Message</p>
                <input type="text" name="name" placeholder="Your Name" required value={form.name} onChange={handleChange} className={inputClass} />
                <input type="email" name="email" placeholder="Email Address" required value={form.email} onChange={handleChange} className={inputClass} />
                <select name="subject" required value={form.subject} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  <option value="" disabled className="bg-stone-900">Subject</option>
                  <option value="general" className="bg-stone-900">General Enquiry</option>
                  <option value="trade" className="bg-stone-900">Business / Partnership</option>
                  <option value="press" className="bg-stone-900">Product Information</option>
                  <option value="notify" className="bg-stone-900">Order / Availability</option>
                  <option value="other" className="bg-stone-900">Other</option>
                </select>
                <textarea name="message" placeholder="Your Message" required rows={5} value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} />
                <button type="submit" disabled={loading}
                  className="font-rajdhani text-sm uppercase tracking-widest px-10 py-4 bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed self-start">
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </RevealSection>
        </div>
      </section>

      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto border border-yellow-600/10 p-12 text-center">
          <RevealSection>
            <p className="font-rajdhani text-xs uppercase tracking-widest text-yellow-500 mb-4">Our Location</p>
            <h2 className="font-display text-3xl text-amber-50 mb-3">Based in Maharashtra</h2>
            <p className="text-amber-50/50 font-light text-lg">We operate from Maharashtra, delivering quality beverages and food products with a focus on freshness, hygiene, and customer satisfaction.</p>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
