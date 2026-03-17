import React, { useState } from 'react';
import {
  Film,
  Brain,
  LayoutDashboard,
  Wand2,
  Activity,
  MessageSquare,
  User,
  Webhook,
  Lock,
  Cpu,
  Smartphone,
  Monitor,
  Globe
} from 'lucide-react';

const translations = {
  en: {
    nav: { agents: "Agents", workflow: "Workflow", apis: "APIs", proHub: "Pro Hub", download: "Download Desktop App" },
    hero: {
      title1: "The Next-Gen AI ",
      titleHighlight: "Conversational",
      title2: " Editing Workstation.",
      subtitle: "Partner with your AI crew. No manual dragging. Just chat and pop out the final cut.",
      ctaPrimary: "Get Started Free",
      ctaSecondary: "Watch Demo",
      chatPrompt: "\"Turn these raw clips into a relaxing VLOG and add upbeat BGM.\"",
      aiStatus: "AI Agent: Arranging clips & matching rhythm..."
    },
    crew: {
      title: "Our AI Crew",
      director: "Director Agent", directorDesc: "High-level creative vision and pacing control for your story.",
      storyboard: "Storyboard Agent", storyboardDesc: "Automated scene organization and visual flow optimization.",
      drama: "Short Drama Agent", dramaDesc: "Optimized for high-retention vertical video content.",
      timeline: "Timeline AI", timelineDesc: "Precision frame-by-frame rhythmic waveform adjustments."
    },
    workflow: {
      badge: "No Timeline Dragging",
      title: "Talk to your timeline.",
      desc: "Every edit is just a conversation away. Our LLM-powered engine translates your natural language into complex non-linear editing actions instantly.",
      chat1: "\"Edit this talking-head video.\"",
      chat2: "\"Analyze timeline rhythm and add BGM.\"",
      realtime: "Real-time Adjustment",
      synced: "SYNCED"
    },
    tech: {
      apiTitle: "Top-Tier APIs", apiDesc: "Connect to ElevenLabs, Runway, and Sora directly within PopCut.",
      privacyTitle: "Local-First Privacy", privacyDesc: "Your raw footage never leaves your machine. AI processing happens locally.",
      gpuTitle: "Local GPU Power", gpuDesc: "Harness the full potential of your RTX or M-series silicon for real-time rendering."
    },
    sync: {
      title: "Desktop Seamless Sync",
      desc: "Capture on mobile, refine with AI on desktop instantly."
    },
    footer: {
      tagline1: "Tell us your idea. We'll ",
      taglineHighlight: "pop out",
      tagline2: " the masterpiece. 🍿",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact Support",
      copyright: "© 2024 PopCut AI Technologies. All rights reserved."
    }
  },
  zh: {
    nav: { agents: "AI 智能体", workflow: "工作流", apis: "API 接口", proHub: "专业版中心", download: "下载桌面端" },
    hero: {
      title1: "下一代 AI ",
      titleHighlight: "对话式",
      title2: " 剪辑工作站。",
      subtitle: "与你的 AI 团队协作。告别手动拖拽，只需对话，即可生成最终成片。",
      ctaPrimary: "免费开始使用",
      ctaSecondary: "观看演示",
      chatPrompt: "\"把这些原始素材剪成一个轻松的 VLOG，并加上欢快的背景音乐。\"",
      aiStatus: "AI 智能体：正在排列片段并匹配节奏..."
    },
    crew: {
      title: "我们的 AI 团队",
      director: "导演智能体", directorDesc: "为你的故事提供高层次的创意视野和节奏控制。",
      storyboard: "分镜智能体", storyboardDesc: "自动化的场景组织和视觉流畅度优化。",
      drama: "短剧智能体", dramaDesc: "专为高留存率的竖屏视频内容优化。",
      timeline: "时间线 AI", timelineDesc: "精确到帧的节奏波形调整。"
    },
    workflow: {
      badge: "无需拖拽时间线",
      title: "与你的时间线对话。",
      desc: "每一次剪辑都只需一次对话。我们由大语言模型驱动的引擎能将你的自然语言瞬间转化为复杂的非线性剪辑操作。",
      chat1: "\"剪辑这段口播视频。\"",
      chat2: "\"分析时间线节奏并添加背景音乐。\"",
      realtime: "实时调整",
      synced: "已同步"
    },
    tech: {
      apiTitle: "顶级 API 接口", apiDesc: "在 PopCut 中直接连接 ElevenLabs、Runway 和 Sora。",
      privacyTitle: "本地优先隐私", privacyDesc: "你的原始素材绝不会离开你的电脑。AI 处理完全在本地进行。",
      gpuTitle: "本地 GPU 算力", gpuDesc: "充分发挥你的 RTX 或 M 系列芯片的潜力，实现实时渲染。"
    },
    sync: {
      title: "桌面端无缝同步",
      desc: "手机端拍摄，桌面端 AI 即时精修。"
    },
    footer: {
      tagline1: "告诉我们你的想法，我们为你",
      taglineHighlight: "生成",
      tagline2: " 杰作。🍿",
      privacy: "隐私政策",
      terms: "服务条款",
      contact: "联系支持",
      copyright: "© 2024 PopCut AI Technologies. 保留所有权利。"
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const t = translations[lang];

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="bg-background-dark font-display text-slate-100 antialiased overflow-x-hidden min-h-screen selection:bg-primary/30">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-xl border-b border-primary/10 px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-primary">
              <Film className="w-8 h-8" />
            </div>
            <h2 className="text-slate-100 text-2xl font-black tracking-tighter">PopCut</h2>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-slate-400 hover:text-primary transition-colors text-sm font-medium" href="#">{t.nav.agents}</a>
            <a className="text-slate-400 hover:text-primary transition-colors text-sm font-medium" href="#">{t.nav.workflow}</a>
            <a className="text-slate-400 hover:text-primary transition-colors text-sm font-medium" href="#">{t.nav.apis}</a>
            <a className="text-slate-400 hover:text-primary transition-colors text-sm font-medium" href="#">{t.nav.proHub}</a>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-slate-400 hover:text-slate-100 transition-colors text-sm font-medium bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
            >
              <Globe className="w-4 h-4" />
              {lang === 'en' ? '中文' : 'EN'}
            </button>
            <button className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-[0_0_25px_rgba(46,91,255,0.4)]">
              {t.nav.download}
            </button>
          </div>
        </div>
      </header>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 text-center lg:text-left mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-100">
                {t.hero.title1} <span className="text-primary drop-shadow-[0_0_15px_rgba(46,91,255,0.3)]">{t.hero.titleHighlight}</span>{t.hero.title2}
              </h1>
              <p className="text-slate-400 text-xl max-w-xl mx-auto lg:mx-0">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-primary text-white px-8 py-4 rounded-xl font-extrabold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(46,91,255,0.3)]">
                  {t.hero.ctaPrimary}
                </button>
                <button className="border border-slate-700 text-slate-100 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors backdrop-blur-sm">
                  {t.hero.ctaSecondary}
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-indigo-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-card-dark rounded-2xl border border-primary/20 overflow-hidden shadow-2xl">
                <div className="p-4 border-b border-white/5 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="aspect-video relative bg-black/40 flex flex-col">
                  <div className="flex-grow p-4 flex items-center justify-center">
                    <img alt="Modern video editing software interface with timeline" className="rounded-lg opacity-30 grayscale contrast-125 object-cover w-full h-full absolute inset-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_eEf7FdH04FGZ1M9zgN7Pmctla0WFn8FTRLi3anMc_5dmg2XEa8sDa-jXZLmq1hgmEbHOtbQ9mPcRr11X-cWE5Rp13m4StiGEFQq17YE_i1Ts8wuHJdF11j24yTFYy_V7X5o--PPP9t4QBBW1XdCcUdabEysA1Zk4yXk4Mh_2feLjBIELaUGu4FrVsc2bwPDDVvBuDGbIkI-ENhIRv9rv68JqsSU3wvr9DhlKXgwEx_vqb-LL0Cd4wK_yQE9TC1Yltzx5RWQzJIFu" />
                    <div className="absolute bottom-10 left-10 right-10 bg-background-dark/95 border border-primary/40 p-5 rounded-xl shadow-[0_0_40px_rgba(46,91,255,0.25)] backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="text-primary w-5 h-5" />
                        <p className="text-primary font-medium text-sm">{t.hero.chatPrompt}</p>
                      </div>
                      <div className="mt-4 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-2/3 shadow-[0_0_10px_#2e5bff]"></div>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-widest font-bold">{t.hero.aiStatus}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Box Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-12 text-slate-100 flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            {t.crew.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: t.crew.director, desc: t.crew.directorDesc },
              { icon: LayoutDashboard, title: t.crew.storyboard, desc: t.crew.storyboardDesc },
              { icon: Wand2, title: t.crew.drama, desc: t.crew.dramaDesc },
              { icon: Activity, title: t.crew.timeline, desc: t.crew.timelineDesc }
            ].map((item, i) => (
              <div key={i} className="bg-card-dark p-8 rounded-xl border border-primary/10 hover:border-primary/50 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors"></div>
                <item.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform block" />
                <h3 className="text-xl font-bold text-slate-100 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chat-to-Edit Workflow Section */}
        <section className="bg-slate-900/10 py-32 border-y border-primary/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase">
                  {t.workflow.badge}
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-100">{t.workflow.title}</h2>
                <p className="text-slate-400 text-lg">{t.workflow.desc}</p>
                <div className="space-y-4 pt-6">
                  <div className="flex items-center gap-4 bg-background-dark/80 backdrop-blur-sm p-4 rounded-xl border border-primary/10 max-w-md ml-0 shadow-xl">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <User className="text-primary w-4 h-4" />
                    </div>
                    <p className="text-slate-300 text-sm">{t.workflow.chat1}</p>
                  </div>
                  <div className="flex items-center gap-4 bg-background-dark/80 backdrop-blur-sm p-4 rounded-xl border border-primary/10 max-w-md ml-8 shadow-xl">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <User className="text-primary w-4 h-4" />
                    </div>
                    <p className="text-slate-300 text-sm">{t.workflow.chat2}</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative bg-card-dark rounded-2xl p-8 border border-primary/20 shadow-2xl overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
                  <div className="flex justify-between items-center mb-6 relative z-10">
                    <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest">{t.workflow.realtime}</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#2e5bff]"></div>
                      <span className="text-[10px] text-primary font-bold tracking-widest">{t.workflow.synced}</span>
                    </div>
                  </div>
                  <div className="space-y-4 relative z-10">
                    <div className="h-10 w-full bg-black/40 rounded-lg border border-white/5 flex overflow-hidden">
                      <div className="w-1/4 h-full bg-primary/40 border-r border-primary/20"></div>
                      <div className="w-1/3 h-full bg-primary/20 border-r border-primary/20"></div>
                      <div className="w-1/6 h-full bg-primary/60 border-r border-primary/20 shadow-[inset_0_0_15px_rgba(46,91,255,0.3)]"></div>
                    </div>
                    <div className="h-20 w-full bg-black/40 rounded-lg border border-white/5 p-3 flex items-center gap-1.5">
                      <div className="h-10 w-1.5 bg-primary/60 rounded-full"></div>
                      <div className="h-6 w-1.5 bg-primary/30 rounded-full"></div>
                      <div className="h-14 w-1.5 bg-primary/70 rounded-full shadow-[0_0_10px_rgba(46,91,255,0.5)]"></div>
                      <div className="h-8 w-1.5 bg-primary/40 rounded-full"></div>
                      <div className="h-12 w-1.5 bg-primary/60 rounded-full"></div>
                      <div className="h-16 w-1.5 bg-primary/80 rounded-full"></div>
                      <div className="h-6 w-1.5 bg-primary/30 rounded-full"></div>
                      <div className="h-14 w-1.5 bg-primary/60 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Grid Section */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Webhook, title: t.tech.apiTitle, desc: t.tech.apiDesc },
              { icon: Lock, title: t.tech.privacyTitle, desc: t.tech.privacyDesc },
              { icon: Cpu, title: t.tech.gpuTitle, desc: t.tech.gpuDesc }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4 group">
                <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/10 group-hover:border-primary/40 transition-all group-hover:shadow-[0_0_30px_rgba(46,91,255,0.15)]">
                  <item.icon className="text-primary w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sync Visual Section */}
        <section className="max-w-5xl mx-auto px-6 py-20 relative">
          <div className="bg-gradient-to-b from-card-dark to-black rounded-3xl p-12 border border-primary/10 flex flex-col md:flex-row items-center justify-center gap-16 overflow-hidden relative shadow-[0_0_100px_rgba(46,91,255,0.05)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
            <div className="relative">
              <div className="w-32 h-64 bg-background-dark rounded-[2.5rem] border-4 border-slate-800 p-2 flex flex-col gap-2 shadow-2xl relative z-10">
                <div className="w-full h-full bg-card-dark rounded-[2rem] overflow-hidden flex items-center justify-center border border-white/5">
                  <Smartphone className="text-primary w-10 h-10 animate-pulse" />
                </div>
              </div>
              {/* Data stream visual */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:block">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/10"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_#2e5bff]"></div>
                </div>
              </div>
            </div>
            <div className="bg-background-dark/80 backdrop-blur-md rounded-2xl border border-primary/20 p-8 shadow-2xl relative w-full max-w-md z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Monitor className="text-primary w-6 h-6" />
                </div>
                <h4 className="text-slate-100 font-black tracking-tight">{t.sync.title}</h4>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-full opacity-60 shadow-[0_0_10px_#2e5bff]"></div>
                </div>
                <div className="h-2 w-3/4 bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-full opacity-30"></div>
                </div>
              </div>
              <p className="text-slate-500 text-sm mt-8 font-medium">{t.sync.desc}</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background-dark py-20 border-t border-primary/5 px-6 relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
          <div className="flex items-center gap-2">
            <Film className="text-primary w-8 h-8" />
            <h2 className="text-slate-100 text-2xl font-black tracking-tighter">PopCut</h2>
          </div>
          <p className="text-primary/90 text-lg font-bold tracking-wide text-center">
            {t.footer.tagline1}<span className="text-white">{t.footer.taglineHighlight}</span>{t.footer.tagline2}
          </p>
          <div className="flex gap-10 text-slate-500 text-sm font-medium">
            <a className="hover:text-primary transition-colors" href="#">{t.footer.privacy}</a>
            <a className="hover:text-primary transition-colors" href="#">{t.footer.terms}</a>
            <a className="hover:text-primary transition-colors" href="#">{t.footer.contact}</a>
          </div>
          <p className="text-slate-700 text-xs font-bold tracking-widest uppercase">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
