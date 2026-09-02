import React, { useState, memo } from "react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle,
  ExternalLink,
  Sparkles
} from "lucide-react";
import { workExperience, education } from "../data/resumeData";

const ExperienceTimeline = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section
      id="Experience"
      className="relative py-16 px-[5%] sm:px-[5%] lg:px-[10%] bg-[#030014] text-white overflow-hidden"
    >
      <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Journey & Background
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base">
          Proven industry internships, hardware ventures, and strong academic grounding in Electronics & Embedded Systems.
        </p>

        {/* Tab Selector */}
        <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
              activeTab === "experience"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 scale-105"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Work Experience</span>
          </button>

          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
              activeTab === "education"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 scale-105"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </button>
        </div>
      </div>

      {/* Experience Tab Content */}
      {activeTab === "experience" && (
        <div className="max-w-4xl mx-auto space-y-6">
          {workExperience.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={index * 100}
              className="relative group p-6 sm:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {item.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30">
                      {item.badge}
                    </span>
                  </div>
                  <div className="text-base sm:text-lg font-medium text-indigo-400 mt-1 flex items-center gap-2">
                    <span>{item.company}</span>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-purple-400 hover:text-white underline gap-0.5"
                      >
                        (visit {item.company.toLowerCase().replace(" ", "")}.in)
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs sm:text-sm text-slate-400 gap-1">
                  <div className="flex items-center gap-1.5 text-indigo-300 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-2.5 mt-4">
                {item.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-1" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Education Tab Content */}
      {activeTab === "education" && (
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={index * 100}
              className="relative group p-6 sm:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                  {edu.degree}
                </h3>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-purple-300 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.year}</span>
                </div>
              </div>

              <div className="text-base sm:text-lg font-medium text-indigo-400 mb-2">
                {edu.institution}
              </div>

              <p className="text-sm sm:text-base text-slate-300">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default memo(ExperienceTimeline);
