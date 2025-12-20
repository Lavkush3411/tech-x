import React from "react";
import { Project } from "../types";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Zap,
  CheckCircle2,
  Building2,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative glass rounded-[3.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-1000 bg-gradient-to-br from-slate-900/40 to-black/40 flex flex-col border-white/5">
      <div className="h-80 w-full overflow-hidden relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/10 to-transparent"></div>

        <div className="absolute top-10 left-10 flex flex-wrap gap-3">
          <span className="px-6 py-2.5 bg-black/70 backdrop-blur-xl rounded-full text-[10px] font-black uppercase tracking-[0.25em] text-white border border-white/10">
            {project.category}
          </span>
        </div>

        {project.stats && (
          <div className="absolute bottom-10 left-10 right-10">
            <div className="glass px-8 py-5 rounded-[2rem] flex items-center justify-between border-white/10 backdrop-blur-3xl bg-white/5">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                {project.stats.label}
              </span>
              <span className="text-blue-400 font-black flex items-center gap-2 text-sm uppercase">
                <Zap className="w-4 h-4 fill-blue-400" /> {project.stats.value}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="p-14 flex-grow flex flex-col">
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
          <Building2 className="w-3.5 h-3.5 text-blue-500" />{" "}
          {project.clientSector}
        </div>
        <h3 className="text-4xl font-black text-white mb-6 group-hover:text-blue-400 transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">
          {project.description}
        </p>

        <div className="space-y-4 mb-12">
          {project.techHighlights.map((highlight, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 text-xs font-bold text-slate-300"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-600" /> {highlight}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-12 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider font-black text-slate-400 bg-white/5 px-5 py-2.5 rounded-xl border border-white/5 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-10 border-t border-white/5">
          <div className="flex gap-8">
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-all transform hover:scale-125"
            >
              <Github className="w-7 h-7" />
            </a>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-all transform hover:scale-125"
              >
                <ExternalLink className="w-7 h-7" />
              </a>
            ) : (
              <span className="text-slate-800 cursor-not-allowed">
                <ExternalLink className="w-7 h-7 opacity-20" />
              </span>
            )}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-all transform hover:scale-125"
            >
              <button className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-blue-500 hover:text-white transition-all group/btn">
                View Case{" "}
                <ArrowUpRight className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
