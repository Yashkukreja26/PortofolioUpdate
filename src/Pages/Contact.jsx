import React, { useState, useEffect } from "react";
import {
  Share2,
  User,
  Mail,
  MessageSquare,
  Send,
  Phone,
  MapPin,
  Globe,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Sending Message...',
      html: 'Please wait while we send your message',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      // Submit via fetch to FormSubmit
      const response = await fetch("https://formsubmit.co/ajax/kukrejayash3@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully to Yash Kukreja!',
          icon: 'success',
          confirmButtonColor: '#6366f1',
          timer: 3000,
          timerProgressBar: true
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      // Fallback submit
      const form = e.target;
      form.submit();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          <span
            style={{
              color: "#6366f1",
              backgroundImage:
                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get In Touch
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Have a project, embedded hardware inquiry, or capstone mentorship question? Let's connect.
        </p>
      </div>

      <div
        className="h-auto py-10 flex items-center justify-center px-[5%] md:px-0"
        id="Contact"
      >
        <div className="container px-[1%] grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl">
          {/* Left Column: Form */}
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-10 border border-white/10 transform transition-all duration-300 hover:shadow-[#6366f1]/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                    Send a Message
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Fill in your details below and I'll respond as soon as possible.
                  </p>
                </div>
                <Share2 className="w-8 h-8 text-[#6366f1] opacity-60" />
              </div>

              <form 
                action="https://formsubmit.co/kukrejayash3@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="relative group"
                >
                  <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50 text-sm sm:text-base"
                    required
                  />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="relative group"
                >
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50 text-sm sm:text-base"
                    required
                  />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="relative group"
                >
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                  <textarea
                    name="message"
                    placeholder="Tell me about your hardware project, capstone idea, or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9rem] disabled:opacity-50 text-sm sm:text-base"
                    required
                  />
                </div>

                <button
                  data-aos="fade-up"
                  data-aos-delay="400"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Direct Info & Bhagauti Hub */}
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="space-y-6 flex flex-col justify-between"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 space-y-6">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Projects & Mentorship
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Direct Contact & Collaboration
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Founder of Bhagauti Engineering. Reach out directly for turnkey hardware, PCB designs, or engineering capstone solutions.
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <a
                  href="tel:+917420076433"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.08] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Phone / WhatsApp</div>
                    <div className="text-white font-medium text-sm sm:text-base group-hover:text-indigo-300 transition-colors">+91 7420076433</div>
                  </div>
                </a>

                <a
                  href="mailto:kukrejayash3@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.08] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Direct Email</div>
                    <div className="text-white font-medium text-sm sm:text-base group-hover:text-purple-300 transition-colors">kukrejayash3@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://bhagauti.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-pink-500/40 hover:bg-white/[0.08] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Venture Website</div>
                    <div className="text-white font-medium text-sm sm:text-base group-hover:text-pink-300 transition-colors">https://bhagauti.in</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Location</div>
                    <div className="text-white font-medium text-sm sm:text-base">Jalgaon, Maharashtra, India</div>
                  </div>
                </div>
              </div>
            </div>

            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;