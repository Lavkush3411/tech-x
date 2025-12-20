"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import {
  PROJECTS,
  SERVICES,
  SKILL_GROUPS,
  TESTIMONIALS,
  METHODOLOGY,
  SOCIAL_LINKS,
} from "./constants";
import {
  CheckCircle2,
  Linkedin,
  Mail,
  Code2,
  Server,
  Terminal,
  Database,
  Rocket,
  ShieldCheck,
  Zap,
  ArrowRight,
  Quote,
  Cloud,
  HardDrive,
  Activity,
  Infinity as InfinityIcon,
  BarChart3,
  Globe,
  Settings,
  Globe2,
  Shield,
  Key,
  Lock,
} from "lucide-react";
import DynamicForm from "@/components/Form";

const App: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const filteredProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />

      {/* Hero Section: Updated Tagline */}
      <section className="relative pt-32 pb-24 px-6 lg:pt-56 lg:pb-48 flex flex-col items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-5%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[200px] rounded-full"></div>
          <div className="absolute bottom-[-5%] right-[-10%] w-[70%] h-[70%] bg-emerald-600/10 blur-[200px] rounded-full"></div>
        </div>

        <div className="max-w-6xl text-center px-4">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-black uppercase tracking-widest mb-10 backdrop-blur-xl animate-fade-in">
            <Rocket className="w-4 h-4" /> Global Software Development Firm
          </div>

          <h1 className="text-6xl md:text-6xl font-black text-white tracking-tighter mb-14 leading-[0.85] text-balance">
            Your Partner in{" "}
            <span className="gradient-text">Modern Web and App </span>{" "}
            Development
          </h1>

          <p className="text-xl md:text-3xl text-slate-400 mb-14 max-w-4xl mx-auto leading-relaxed font-medium">
            Distributed Power. Global Scale. We deliver{" "}
            <span className="text-white">React</span> frontends,{" "}
            <span className="text-white">Express/NestJs</span> backend engines,
            and enterprise <span className="text-white">AWS</span> clouds.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#projects"
              className="w-full sm:w-auto px-12 py-6 bg-blue-600 text-white font-black rounded-3xl hover:bg-blue-500 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-600/40"
            >
              View Our Work <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-12 py-6 glass text-white font-black rounded-3xl hover:bg-white/5 transition-all flex items-center justify-center"
            >
              Partner With TechX
            </a>
          </div>
        </div>

        <div className="mt-28 flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex flex-col items-center gap-2 group">
            <Code2 className="w-10 h-10 text-blue-500 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              React / NextJs
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <Terminal className="w-10 h-10 text-orange-500 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Node / Nest / Express
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <Cloud className="w-10 h-10 text-cyan-500 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              AWS / Azure
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <Database className="w-10 h-10 text-purple-500 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Postgresql / MongoDb / Dynamodb
            </span>
          </div>
        </div>
      </section>

      {/* About Section: Why TechX */}
      <section className="py-32 px-6 bg-slate-900/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter">
              Why Partner <br />
              With TechX?
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Software is more than code—it&apos;s the foundation of your
              business. We provide a rigorous engineering approach that
              prioritizes performance, security, and long-term maintainability.
            </p>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              At TechX, we specialize in delivering innovative web and mobile
              app solutions that help businesses thrive in the digital age. Our
              team is skilled in developing scalable and high-performance
              applications that are tailored to meet your unique needs.
            </p>

            <div className="space-y-8">
              {[
                {
                  title: "Performance First",
                  desc: "Every React component and API endpoint is benchmarked for maximum speed.",
                  icon: <Zap className="text-blue-500" />,
                },
                {
                  title: "Cloud-Native Security",
                  desc: "Built-in security audits following AWS Well-Architected frameworks.",
                  icon: <ShieldCheck className="text-emerald-500" />,
                },
                {
                  title: "Scalability Ready",
                  desc: "Architectures designed to handle 10x traffic bursts from day one.",
                  icon: <BarChart3 className="text-purple-500" />,
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="p-3 bg-white/5 rounded-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative p-1 glass rounded-[3rem]">
            <div className="bg-slate-950 p-12 rounded-[2.8rem] space-y-10">
              <div className="flex justify-between items-center pb-8 border-b border-white/5">
                <h3 className="text-2xl font-bold text-white">
                  Project Ecosystem
                </h3>
                <Activity className="text-blue-500 w-6 h-6 animate-pulse" />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-black text-white">40+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Global Clients
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-blue-500">100%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    AWS Integration
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-emerald-500">
                    99.9%
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Service Uptime
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-purple-500">
                    5yr+
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Senior Experience
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-white/5 flex gap-4">
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-blue-600"></div>
                </div>
                <div className="text-[10px] font-bold text-slate-400 whitespace-nowrap">
                  Node.js Maturity
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                Engineering <br />
                Excellence.
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Specialized in modern web and mobile stacks, focusing on the
                core technologies that drive business growth. From responsive
                web apps to feature-rich mobile apps, we leverage the latest
                technologies to create seamless user experiences that drive
                engagement and growth. We work closely with our clients to
                ensure our solutions align with their business goals, providing
                both functionality and usability.
              </p>
              <br></br>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                {" "}
                Whether you’re looking to build a new app or improve an existing
                one, TechX is here to turn your ideas into impactful digital
                products.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-blue-500">
                <Code2 />
              </div>
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-emerald-500">
                <Server />
              </div>
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-purple-500">
                <Database />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group glass p-12 rounded-[3.5rem] hover:border-blue-500/40 transition-all duration-700 bg-gradient-to-br from-slate-900/30 to-black/30"
              >
                <div className="mb-10 p-6 bg-white/5 rounded-[1.8rem] w-fit group-hover:scale-110 group-hover:bg-blue-600/10 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-black text-white mb-6 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                  {service.extendedDescription}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.pillars.map((pillar: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm font-bold text-slate-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      {pillar}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Map Section: AWS Services Focus */}
      <section className="py-32 px-6 bg-slate-900/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-16 tracking-tighter">
            The TechX <span className="text-blue-500">AWS</span> Stack.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "EC2", icon: <Server /> },
              { name: "Route 53", icon: <Globe2 /> },
              { name: "Cognito", icon: <Shield /> },
              { name: "IAM", icon: <Lock /> },
              { name: "KMS Encryption", icon: <Key /> },
              { name: "SQS", icon: <Mail /> },
              { name: "Lambda", icon: <Zap /> },
              { name: "DynamoDB", icon: <Database /> },
              { name: "S3 Storage", icon: <HardDrive /> },
              { name: "API Gateway", icon: <Globe /> },
              { name: "RDS Postgres", icon: <Settings /> },
              { name: "CloudFront", icon: <InfinityIcon /> },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="glass p-8 rounded-3xl group hover:bg-blue-600/10 transition-all duration-500 border-white/5"
              >
                <div className="text-slate-400 mb-4 flex justify-center group-hover:text-blue-400 group-hover:scale-125 transition-all">
                  {/* Using React.ReactElement<any> to fix 'size' property error during cloneElement */}
                  {React.cloneElement(
                    tech.icon as React.ReactElement<{ size: number }>,
                    {
                      size: 32,
                    }
                  )}
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              Case Studies.
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {["All", "SaaS", "Backend", "Frontend", "Mobile"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                    filter === cat
                      ? "bg-white text-black shadow-2xl scale-105"
                      : "glass text-slate-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Depth Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter">
              Tech Stack <br />
              Deep-Dive.
            </h2>
            <p className="text-xl text-slate-400 mb-16 leading-relaxed">
              We specialize in the full development lifecycle, from
              sophisticated React UIs to scalable Node.js microservices deployed
              on high-availability AWS infrastructure.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {SKILL_GROUPS.map((group, idx) => (
                <div
                  key={idx}
                  className="glass p-8 rounded-[2.5rem] hover:bg-white/5 transition-all border-white/5"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-400">
                      {group.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">
                        {group.category}
                      </h4>
                      <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">
                        {group.level}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {group.skills.map((skill: string) => (
                      <li
                        key={skill}
                        className="text-slate-400 text-sm flex items-center gap-3 font-medium"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>{" "}
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-emerald-600/10 blur-[150px] -z-10 animate-pulse"></div>
            <div className="glass p-12 rounded-[3.5rem] relative overflow-hidden bg-slate-950/80 border-white/5">
              <h3 className="text-3xl font-black text-white mb-14 tracking-tight">
                The TechX Pipeline.
              </h3>
              <div className="space-y-12">
                {METHODOLOGY.map((step, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="w-14 h-14 shrink-0 glass rounded-[1.2rem] flex items-center justify-center text-blue-500 font-black shadow-xl border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 px-6 bg-slate-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-white mb-6 tracking-tighter">
              What Clients Say.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Global feedback from partners using our React and AWS powered
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="glass p-12 rounded-[3.5rem] relative border-white/5"
              >
                <Quote className="absolute top-12 right-12 w-24 h-24 text-white/5 -z-10" />
                <p className="text-xl text-slate-300 italic mb-10 leading-relaxed font-medium">
                  &quot;{t.content}&quot;
                </p>
                <div className="flex items-center gap-6">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-16 h-16 rounded-2xl border-2 border-blue-500 shadow-xl"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg">{t.name}</h4>
                    <p className="text-sm text-slate-500 font-medium">
                      {t.role} • {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-32 px-6">
        <div
          className="max-w-7xl mx-auto glass 
  p-6 sm:p-10 lg:p-24
  rounded-3xl sm:rounded-[4rem]
  relative overflow-hidden bg-black/50 border-white/5"
        >
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full"></div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 [&>*]:min-w-0">
            <div>
              <h2 className="text-6xl md:text-8xl font-black text-white mb-10 leading-[0.85] tracking-tighter">
                Let&apos;s Build <br />
                <span className="gradient-text">Exceptional.</span>
              </h2>
              <p className="text-xl text-slate-400 mb-16 leading-relaxed max-w-lg font-medium">
                Ready to architect your React frontend and scale your AWS
                backend? TechX brings the senior engineering power you need.
              </p>

              <div className="space-y-12">
                <div className="flex items-center gap-10 group">
                  <div className="w-20 h-20 glass rounded-[2rem] flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-2xl border-white/10">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                      Primary Inquiry
                    </p>
                    <a
                      href="mailto:Lkyadav090@gmail.com"
                      className="text-l font-black text-white hover:text-blue-400 transition-all"
                    >
                      Lkyadav090@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-10 group">
                  <div className="w-20 h-20 glass rounded-[2rem] flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-2xl border-white/10">
                    <Linkedin className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                      Social Network
                    </p>
                    <a
                      href="https://www.linkedin.com/in/lavkush-yadav-116b53205"
                      className="text-2xl font-black text-white hover:text-emerald-400 transition-all"
                    >
                      Lavkush Yadav
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 p-12 rounded-[3.5rem] border border-white/10 backdrop-blur-3xl shadow-2xl">
              <DynamicForm />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Footer */}
      <footer className="py-24 px-6 border-t border-white/5 bg-[#010309]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 bg-blue-600 rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-blue-600/30">
                  <Rocket className="text-white w-9 h-9" />
                </div>
                <span className="text-4xl font-black text-white tracking-tighter">
                  Tech<span className="text-blue-500">X</span>
                </span>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed max-w-sm mb-12 font-medium">
                Building premium React ecosystems and scalable AWS backends for
                high-growth ventures and global enterprises.
              </p>
              <div className="flex gap-6">
                {SOCIAL_LINKS.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 glass rounded-[1.2rem] flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600/10 transition-all border-white/10"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-12">
                Core Stack
              </h4>
              <ul className="space-y-6 text-slate-500 font-bold text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    React / NextJs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Node / Express / NestJS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    AWS EC2 / Lambda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    PostgreSQL / MongoDB / DynamoDB
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-12">
                Operations
              </h4>
              <ul className="space-y-6 text-slate-500 font-bold text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Technical Audit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    CI / CD Pipelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Scalability Review
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700">
              TechX Engineering Global © 2024 • Ahmedabad • Remote
            </div>
            <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-slate-600">
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-emerald-500"></div>{" "}
                System Status: Operational
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
