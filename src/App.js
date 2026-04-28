import React, { useState } from 'react';
import { 
  BarChart3, 
  ShieldCheck, 
  Microscope, 
  Activity, 
  Stethoscope,
  Target,
  Rocket,
  Map,
  BrainCircuit,
  ArrowRight,
  Image as ImageIcon,
  CheckCircle2,
  Database,
  Lightbulb,
  TrendingUp,
  Globe,
  Clock,
  ArrowUpRight
} from 'lucide-react';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    // .page-wrapper
    <div className="bg-white text-slate-900 font-sans selection:bg-slate-200 w-full min-h-screen">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full h-20 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="px-5 md:px-10 lg:px-20 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
              <Activity className="text-slate-900 w-6 h-6" /> OSG <span className="text-xs font-normal text-slate-500 ml-2 border border-slate-300 px-2 py-0.5 rounded-full">WIREFRAME</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-500">
              <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
              <a href="#outcomes" className="hover:text-slate-900 transition-colors">Outcomes</a>
              <a href="#process" className="hover:text-slate-900 transition-colors">Process</a>
              <a href="#insights" className="hover:text-slate-900 transition-colors">Insights</a>
            </div>
          </div>
        </div>
      </nav>

      {/* .main-wrapper */}
      <main className="w-full flex flex-col">

        {/* 1. HERO SECTION */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNykiLz48L3N2Zz4=')] opacity-60" />
          
          <div className="px-5 md:px-10 lg:px-20 relative z-10 w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div className="flex flex-col">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-slate-900">
                  Data Analytics & Strategy for <br className="hidden md:block"/>
                  Better Commercial Decisions
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
                  OSG helps pharma, medtech, and healthcare leaders turn fragmented customer, market, and real-world data into clear decisions on growth, customer strategy, product positioning, and experience improvement.
                </p>
                
                {/* Shortened Bullets */}
                <ul className="flex flex-col gap-3 mb-10 max-w-lg text-slate-700 font-medium">
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-slate-400 shrink-0 w-5 h-5 mt-0.5"/><span>Analytics tied directly to business decisions</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-slate-400 shrink-0 w-5 h-5 mt-0.5"/><span>Deep experience across complex healthcare sectors</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-slate-400 shrink-0 w-5 h-5 mt-0.5"/><span>Secure workflows for sensitive commercial data</span></li>
                </ul>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <button className="bg-slate-900 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors flex items-center gap-2">
                    Talk to Our Team <ArrowRight className="w-4 h-4"/>
                  </button>
                  <button className="border-2 border-slate-200 bg-transparent text-slate-900 px-8 py-4 text-sm font-bold uppercase tracking-wider hover:border-slate-900 transition-colors">
                    See Capabilities
                  </button>
                </div>
              </div>

              {/* Hero Visual (Abstract Graphic Placeholder) */}
              <div className="w-full h-[500px] bg-slate-50 border border-slate-200 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white"></div>
                <div className="relative z-10 flex flex-col items-center gap-4 text-slate-400">
                  <BarChart3 className="w-24 h-24 opacity-20" />
                  <span className="text-sm font-bold tracking-widest uppercase">Abstract Analytics Graphic</span>
                </div>
                {/* Decorative wireframe shapes */}
                <div className="absolute bottom-10 left-10 w-32 h-32 border border-slate-200 rounded-full" />
                <div className="absolute top-20 right-10 w-48 h-48 border border-slate-200 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-slate-200" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. TRUST + CREDIBILITY STRIP */}
        <section className="bg-slate-50 border-y border-slate-200 py-6">
          <div className="px-5 md:px-10 lg:px-20 w-full">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex gap-8 text-slate-600 font-bold items-center text-sm md:text-base">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-slate-400"/> 100+ Projects</div>
                <div className="flex items-center gap-2"><Globe className="w-5 h-5 text-slate-400"/> Global Teams</div>
              </div>
              <div className="hidden md:block w-px h-6 bg-slate-300"></div>
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-bold text-slate-500 uppercase tracking-widest">
                <span>Pharma</span>
                <span>MedTech</span>
                <span>Healthcare</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHO WE HELP */}
        <section className="py-20 md:py-28 bg-white">
          <div className="px-5 md:px-10 lg:px-20 w-full">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">Built for Complex, Data-Rich Industries</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Clickable Cards */}
                {[
                  { title: 'Pharma', icon: <Microscope className="w-8 h-8 text-slate-700"/>, desc: 'Clarify treatment landscapes and align commercial teams around the right targets.' },
                  { title: 'MedTech', icon: <Activity className="w-8 h-8 text-slate-700"/>, desc: 'Understand adoption drivers and sharpen launch plans for complex device portfolios.' },
                  { title: 'Healthcare', icon: <Stethoscope className="w-8 h-8 text-slate-700"/>, desc: 'Combine patient and provider data to improve service mix and experience decisions.' }
                ].map((item, i) => (
                  <a href="#" key={i} className="group bg-slate-50 border border-slate-200 p-8 hover:border-slate-900 transition-colors h-full flex flex-col cursor-pointer block">
                    <div className="mb-6">{item.icon}</div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 flex-1">{item.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider group-hover:gap-3 transition-all">
                      Explore <ArrowRight className="w-4 h-4"/>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHAT WE DO (Grouped Categories) */}
        <section id="services" className="py-20 md:py-28 bg-slate-900 text-white">
          <div className="px-5 md:px-10 lg:px-20 w-full">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Analytics & Strategy Services</h2>
                <p className="text-xl text-slate-400">We group our expertise into four core areas to connect rigorous analytics with practical strategy.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Customer Strategy', icon: <Target className="w-6 h-6"/>, desc: 'Prioritize the customers, accounts, or audiences that matter most. Identify what truly drives behavior, value, loyalty, and choice.' },
                  { title: 'Growth & Launch', icon: <Rocket className="w-6 h-6"/>, desc: 'Support go-to-market, launch, and expansion decisions with evidence-based analytics and scenario planning.' },
                  { title: 'Experience & Journey', icon: <Map className="w-6 h-6"/>, desc: 'Map end-to-end interactions to find the points of friction that matter most and focus resources on changes that move outcomes.' },
                  { title: 'AI & Predictive Analytics', icon: <BrainCircuit className="w-6 h-6"/>, desc: 'Use models to forecast behavior, size opportunities, and give leaders clear, tailored views of the trade-offs behind critical decisions.' }
                ].map((item, i) => (
                  <div key={i} className="border border-slate-700 bg-slate-800/50 p-8 hover:bg-slate-800 transition-colors">
                    <div className="w-12 h-12 bg-slate-700 flex items-center justify-center mb-6 text-white">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. HOW IT WORKS (Visual Flow) */}
        <section id="process" className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="px-5 md:px-10 lg:px-20 w-full">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">A Clear Path to Impact</h2>
                <p className="text-xl text-slate-600">Managing your data-insights-decision value chain efficiently.</p>
              </div>
              
              {/* Horizontal Flow Container */}
              <div className="relative mt-16 max-w-5xl mx-auto">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-slate-200 z-0"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                  {[
                    { step: 'Data', icon: <Database className="w-6 h-6"/>, title: 'Gather & Structure', desc: 'Securely ingest and align complex datasets.' },
                    { step: 'Insights', icon: <Lightbulb className="w-6 h-6"/>, title: 'Analyze & Model', desc: 'Apply rigorous methods to find the signal.' },
                    { step: 'Decisions', icon: <Target className="w-6 h-6"/>, title: 'Strategic Output', desc: 'Translate findings into actionable roadmaps.' },
                    { step: 'Impact', icon: <TrendingUp className="w-6 h-6"/>, title: 'Measurable Value', desc: 'Drive growth, adoption, and experience.' }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-white border-2 border-slate-900 flex items-center justify-center mb-6 relative">
                        {item.icon}
                        {/* Mobile connecting line */}
                        {i !== 3 && <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-slate-200"></div>}
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{item.step}</div>
                      <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. AI / DIFFERENTIATOR SECTION (NEW) */}
        <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200">
          <div className="px-5 md:px-10 lg:px-20 w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Visual Side */}
              <div className="order-2 lg:order-1 w-full aspect-square md:aspect-video lg:aspect-square bg-white border border-slate-200 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                 <div className="absolute w-[150%] h-[150%] animate-[spin_60s_linear_infinite] opacity-5">
                    <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSIyIDQiLz48L3N2Zz4=')]"></div>
                 </div>
                 <BrainCircuit className="w-20 h-20 text-slate-900 mb-6 relative z-10" />
                 <div className="text-center relative z-10">
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Agentic AI Models</h4>
                    <p className="text-sm text-slate-500">Visual Graphic Placeholder</p>
                 </div>
              </div>

              {/* Content Side */}
              <div className="order-1 lg:order-2 flex flex-col">
                <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest w-fit mb-6">
                  Intelligence
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                  AI-Powered Decisions
                </h2>
                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                  Introducing our generative AI and predictive modeling capabilities that let you interact with complex commercial data like never before. Safely scale AI while keeping strategic decisions explainable and defensible.
                </p>
                <ul className="flex flex-col gap-4 mb-8">
                  <li className="flex items-start gap-3 border-b border-slate-200 pb-4"><ArrowRight className="w-5 h-5 text-slate-900 shrink-0"/> <span className="font-medium text-slate-700">Predict market adoption curves with higher accuracy.</span></li>
                  <li className="flex items-start gap-3 border-b border-slate-200 pb-4"><ArrowRight className="w-5 h-5 text-slate-900 shrink-0"/> <span className="font-medium text-slate-700">Synthesize vast amounts of unstructured healthcare data.</span></li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-slate-900 shrink-0"/> <span className="font-medium text-slate-700">Empower leadership teams with real-time scenario planning.</span></li>
                </ul>
                <button className="bg-slate-900 text-white px-6 py-3 font-bold uppercase tracking-wider text-sm w-fit hover:bg-slate-800 transition-colors">
                  Explore AI Capabilities
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 7. SELECTED OUTCOMES (With Metrics) */}
        <section id="outcomes" className="py-20 md:py-28 bg-white">
          <div className="px-5 md:px-10 lg:px-20 w-full">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">Selected Outcomes</h2>
                  <p className="text-xl text-slate-600">A few examples of how analytics and strategy create measurable impact.</p>
                </div>
                <button className="text-slate-900 hover:text-slate-600 font-bold uppercase tracking-wider text-sm flex items-center gap-2 border-b-2 border-slate-900 pb-1">
                  View Case Studies <ArrowRight className="w-4 h-4"/>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { 
                    client: 'Global MedTech Company', 
                    metric: '+25%',
                    metricLabel: 'Impact on Sales Efficiency',
                    problem: 'Complex device portfolio needed clearer customer segmentation.',
                    solution: 'Built a behavioral analytics framework to focus commercial efforts.',
                    impact: 'Sales aligned around fewer, higher-value segments.'
                  },
                  { 
                    client: 'Top 5 Pharma Brand', 
                    metric: '8%',
                    metricLabel: 'Jump in Brand Revenue',
                    problem: 'Launch planning lacked clear understanding of channel response.',
                    solution: 'Combined survey and behavioral data to quantify decision drivers.',
                    impact: 'Clearer targeting strategy significantly increased launch effectiveness.'
                  },
                  { 
                    client: 'Healthcare Services Org', 
                    metric: '15 pt',
                    metricLabel: 'Increase in Patient Experience Score',
                    problem: 'Leadership needed to know where friction impacted growth.',
                    solution: 'Mapped end-to-end journey to find high-impact friction points.',
                    impact: 'Prioritized roadmap of experience improvements executed.'
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 p-8 flex flex-col h-full">
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-6">{item.client}</div>
                    
                    {/* Explicit Impact Metrics */}
                    <div className="mb-8 bg-white border border-slate-200 p-6 shadow-sm">
                      <div className="text-5xl font-light text-slate-900 mb-2 tracking-tighter">{item.metric}</div>
                      <div className="text-sm font-bold text-slate-600 uppercase tracking-wide leading-snug">{item.metricLabel}</div>
                    </div>

                    <div className="flex flex-col gap-4 flex-1">
                      <div><span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Problem</span><p className="text-sm text-slate-800 font-medium">{item.problem}</p></div>
                      <div><span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Solution</span><p className="text-sm text-slate-600">{item.solution}</p></div>
                      <div className="mt-auto pt-4 border-t border-slate-200"><span className="text-xs font-bold text-slate-900 uppercase tracking-widest block mb-1">Impact</span><p className="text-sm text-slate-900 font-bold">{item.impact}</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. WHY OSG (Pillars & Proof) */}
        <section className="py-20 md:py-28 bg-slate-900 text-white">
          <div className="px-5 md:px-10 lg:px-20 w-full">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Why Choose OSG</h2>
                <p className="text-xl text-slate-400 max-w-2xl">Organizations that need analytics to change decisions, not just provide reports.</p>
              </div>

              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-16">
                {[
                  { title: 'Decision-Focused', desc: 'Every engagement starts with the decisions you need to make, working backwards to the analytics required to support them.' },
                  { title: 'Industry Depth', desc: 'We work where stakeholder dynamics, regulation, and data complexity make decisions harder, not simpler.' },
                  { title: 'Proprietary Methods', desc: 'Our unique approaches and platforms are translated into clear recommendations, not left as technical detail.' },
                  { title: 'Enterprise-Ready', desc: 'Workflows designed for sensitive commercial, clinical, and patient data, with security as a core expectation.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-8 h-8 text-slate-400 shrink-0"/>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Micro-proof Row */}
              <div className="border-t border-slate-700 pt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                 <ShieldCheck className="w-6 h-6 text-slate-300"/>
                 <span>GDPR-Compliant Workflows</span>
                 <span className="hidden md:inline">•</span>
                 <span>HIPAA-Aware Standards</span>
                 <span className="hidden md:inline">•</span>
                 <span>Secure Infrastructure</span>
              </div>
            </div>
          </div>
        </section>

        {/* 9. INSIGHTS (Tabs + Details) */}
        <section id="insights" className="py-20 md:py-28 bg-white border-b border-slate-200">
          <div className="px-5 md:px-10 lg:px-20 w-full">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">Latest Insights</h2>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-200 pb-4">
                {['All', 'Reports', 'Blog', 'AI & Data', 'Customer Strategy'].map(filter => (
                  <button 
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`text-sm font-bold uppercase tracking-wider px-5 py-2.5 transition-colors ${activeFilter === filter ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { type: 'Report', cat: 'AI & Data', title: 'Agentic AI in Life Sciences: Designing Decision Systems', readTime: '8 min read', date: 'Mar 13, 2026' },
                  { type: 'Blog', cat: 'Strategy', title: 'Beyond Traditional Segmentation: Using Behavioral Data', readTime: '5 min read', date: 'Mar 10, 2026' },
                  { type: 'Blog', cat: 'Healthcare', title: 'Measuring True Customer Value in Healthcare Settings', readTime: '6 min read', date: 'Feb 28, 2026' }
                ].map((item, i) => (
                  <a href="#" key={i} className="group flex flex-col h-full block">
                    <div className="h-48 bg-slate-100 w-full border border-slate-200 flex items-center justify-center mb-6 overflow-hidden relative">
                       <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10"></div>
                       <ImageIcon className="w-8 h-8 text-slate-300"/>
                       {/* Category Tag on Image */}
                       <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900 z-20 shadow-sm border border-slate-200">
                         {item.cat}
                       </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-xs text-slate-500 font-bold uppercase tracking-widest mb-3">
                        <span>{item.type}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {item.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:underline decoration-2 underline-offset-4 leading-snug">{item.title}</h3>
                      <div className="mt-auto flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider group-hover:text-slate-600 transition-colors">
                        Read Article <ArrowUpRight className="w-4 h-4"/>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 10. ABOUT (Short & Minimal) */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="px-5 md:px-10 lg:px-20 w-full">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">About OSG</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl">
                OSG is a Data Analytics & Strategy partner focused on helping leadership teams in pharma, medtech, and healthcare make complex commercial choices that cannot be made on instinct alone.
              </p>
              
              <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-bold text-slate-900 uppercase tracking-widest mb-12">
                <li>Global Experience</li>
                <li>Multidisciplinary Teams</li>
                <li>Tailored Models</li>
              </ul>
              
              <button className="border-2 border-slate-900 bg-transparent text-slate-900 px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-slate-900 hover:text-white transition-colors">
                Learn About Our Firm
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* 11. FINAL CTA BAND */}
      <footer className="bg-slate-900 text-white py-16 border-t-4 border-slate-700">
        <div className="px-5 md:px-10 lg:px-20 w-full">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl md:text-3xl font-bold tracking-tight max-w-xl text-center md:text-left">
              Need an analytics and strategy partner for a high-stakes commercial decision?
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button className="text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors px-4 py-3">
                Request Overview
              </button>
              <button className="bg-white text-slate-900 px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">
                Talk to Our Team
              </button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}