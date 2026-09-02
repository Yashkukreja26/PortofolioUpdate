import React, { memo } from "react";
import {
  ExternalLink,
  Sparkles,
  Cpu,
  Layers,
  Wifi,
  Bot,
  GraduationCap,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Instagram,
  Youtube,
  Send
} from "lucide-react";
import { bhagautiDetails } from "../data/resumeData";

const SERVICE_ICONS = {
  Cpu: Cpu,
  Layers: Layers,
  Wifi: Wifi,
  Bot: Bot,
  GraduationCap: GraduationCap,
  Zap: Zap,
};

const BhagautiSection = () => {
  return (
    <section
      id="Bhagauti"
      className="relative py-20 px-[5%] sm:px-[5%] lg:px-[10%] bg-[#030014] text-white overflow-hidden"
    >
      {/* Background ambient glow matching site's theme */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/10 via-purple-600/10 to-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up" data-aos-duration="1000">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 backdrop-blur-md mb-4">
          <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Founded by Yash Kukreja
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]">
            BHAGAUTI Engineering
          </span>
        </h2>

        <p className="mt-3 text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
          Delivering 25+ industry-grade Embedded Systems and IoT capstone prototypes, custom PCB layouts, and mentoring 50+ aspiring engineers.
        </p>

        {/* Primary Website Banner Button */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={bhagautiDetails.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-purple-500/40 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            <span className="relative flex items-center gap-2">
              <span className="text-lg">🌐</span>
              <span className="tracking-wide">Explore bhagauti.in</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>

          <a
            href="https://www.instagram.com/bhagauti.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-pink-400 hover:text-white transition-all duration-300 hover:scale-105 text-sm font-medium"
          >
            <Instagram className="w-4 h-4 text-pink-500" />
            <span>@bhagauti.in</span>
          </a>

          <a
            href="https://www.youtube.com/@BHAGAUTI13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-red-400 hover:text-white transition-all duration-300 hover:scale-105 text-sm font-medium"
          >
            <Youtube className="w-4 h-4 text-red-500" />
            <span>@BHAGAUTI13</span>
          </a>
        </div>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16" data-aos="fade-up" data-aos-duration="1200">
        {bhagautiDetails.stats.map((item, idx) => (
          <div
            key={idx}
            className="relative group p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:scale-[1.02] overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <span className="block text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent mb-1">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Services / Engineering Capabilities Grid */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-8" data-aos="fade-right">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-indigo-400" />
              What We Engineer & Deliver
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              End-to-end prototyping services tailored for engineering scholars and industry clients.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bhagautiDetails.services.map((service, index) => {
            const IconComponent = SERVICE_ICONS[service.icon] || Cpu;
            return (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
                data-aos-duration="1000"
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl border border-white/10 hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-indigo-300 group-hover:text-purple-300 transition-colors" />
                  </div>

                  <h4 className="text-lg font-semibold text-white group-hover:text-indigo-200 transition-colors mb-2 flex items-center justify-between">
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                  </h4>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-5 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-indigo-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Hardware Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Collaboration Callout */}
      <div
        data-aos="fade-up"
        data-aos-duration="1100"
        className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-950/50 border border-indigo-500/20 backdrop-blur-xl overflow-hidden"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Need a Custom Embedded System or Capstone Guidance?
            </h3>
            <p className="text-slate-300 text-sm">
              Connect with Yash Kukreja directly for consultations on hardware development, IoT prototyping, or academic capstone engineering.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="#Contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 active:scale-95 transition-all text-sm flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>

            <a
              href="https://bhagauti.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium hover:scale-105 transition-all text-sm flex items-center justify-center gap-2"
            >
              <span>Visit bhagauti.in</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BhagautiSection);
