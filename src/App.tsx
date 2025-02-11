import React, { useState, useEffect, useRef, useMemo, useCallback, Suspense } from 'react';
import { 
  Star, 
  ArrowRight,
  Github, 
  Mail, 
  ExternalLink,
  Code2,
  Terminal,
  Sparkles,
  Rocket,
  Zap,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  ArrowDown
} from 'lucide-react';
import { useScrollReveal } from './hooks/useScrollReveal';

// Lazy load project components
const TravelApp = React.lazy(() => import('./projects/travel-app/App'));
const ArtGallery = React.lazy(() => import('./projects/art-gallery/App'));
const SmartHome = React.lazy(() => import('./projects/smart-home/App'));
const FitnessFoodAI = React.lazy(() => import('./projects/code-editor/App'));

// Loading fallback component
const ProjectLoader = () => (
  <div className="w-full h-full flex items-center justify-center bg-zinc-900">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-[#0066FF] border-t-transparent rounded-full animate-spin" />
      <p className="text-zinc-400">Carregando projeto...</p>
    </div>
  </div>
);

function App() {
  // Refs for intersection observer
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Cursor refs
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const cursorTimeout = useRef<NodeJS.Timeout>();

  // State management
  const [currentProject, setCurrentProject] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState({
    hero: true,
    about: false,
    projects: false,
    contact: false
  });
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  // Add scroll reveal hook
  useScrollReveal();

  // Memoized project data
  const projects = useMemo(() => [
    {
      id: 'wanderlust',
      title: "Wanderlust",
      description: "Plataforma de viagens com curadoria de experiências únicas e roteiros personalizados",
      component: TravelApp,
      tags: ["React", "Framer Motion", "Mapbox", "TailwindCSS"],
      highlights: [
        "Mapas interativos com pontos turísticos",
        "Sistema de recomendação baseado em IA",
        "Planejador de roteiros inteligente",
        "Reviews em realidade aumentada"
      ]
    },
    {
      id: 'foodai',
      title: "FoodAI",
      description: "Assistente de receitas saudáveis alimentado por IA que analisa fotos de alimentos",
      component: FitnessFoodAI,
      tags: ["React", "AI Vision", "Machine Learning", "TailwindCSS"],
      highlights: [
        "Análise de imagens com IA",
        "Recomendações nutricionais personalizadas",
        "Geração de receitas saudáveis",
        "Cálculo automático de macronutrientes"
      ]
    },
    {
      id: 'artverse',
      title: "ArtVerse",
      description: "Galeria de arte digital com NFTs e experiências imersivas",
      component: ArtGallery,
      tags: ["React", "Three.js", "Web3", "WebGL"],
      highlights: [
        "Visualização 3D de obras",
        "Marketplace de NFTs",
        "Galerias virtuais personalizáveis",
        "Leilões em tempo real"
      ]
    },
    {
      id: 'homeflow',
      title: "HomeFlow",
      description: "Dashboard para controle de casa inteligente com automações avançadas",
      component: SmartHome,
      tags: ["React", "WebSocket", "IoT", "Charts"],
      highlights: [
        "Controle por voz e gestos",
        "Análise de consumo em tempo real",
        "Automações baseadas em rotinas",
        "Integração com múltiplos dispositivos"
      ]
    }
  ], []);

  // Optimized cursor movement handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isCursorVisible) setIsCursorVisible(true);

    if (cursorTimeout.current) {
      clearTimeout(cursorTimeout.current);
    }

    cursorTimeout.current = setTimeout(() => {
      setIsCursorVisible(false);
    }, 5000);

    requestAnimationFrame(() => {
      const { clientX, clientY } = e;
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }
      
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }
    });
  }, [isCursorVisible]);

  // Optimized intersection observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (target === heroRef.current) {
            setIsIntersecting(prev => ({ ...prev, hero: entry.isIntersecting }));
          } else if (target === aboutRef.current) {
            setIsIntersecting(prev => ({ ...prev, about: entry.isIntersecting }));
          } else if (target === projectsRef.current) {
            setIsIntersecting(prev => ({ ...prev, projects: entry.isIntersecting }));
          } else if (target === contactRef.current) {
            setIsIntersecting(prev => ({ ...prev, contact: entry.isIntersecting }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = [
      heroRef.current,
      aboutRef.current,
      projectsRef.current,
      contactRef.current
    ].filter(Boolean);

    elements.forEach(el => el && observer.observe(el));

    return () => {
      elements.forEach(el => el && observer.unobserve(el));
    };
  }, []);

  // Cursor effect setup
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', () => setIsCursorVisible(false));
    document.addEventListener('mouseenter', () => setIsCursorVisible(true));

    const buttons = document.querySelectorAll('button, a');
    const handleMouseEnter = () => {
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform += ' scale(1.5)';
      }
    };

    const handleMouseLeave = () => {
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = 
          cursorOutlineRef.current.style.transform.replace(' scale(1.5)', '');
      }
    };

    buttons.forEach(button => {
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', () => setIsCursorVisible(false));
      document.removeEventListener('mouseenter', () => setIsCursorVisible(true));
      
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      });

      if (cursorTimeout.current) {
        clearTimeout(cursorTimeout.current);
      }
    };
  }, [handleMouseMove]);

  // Project navigation handlers
  const nextProject = useCallback(() => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevProject = useCallback(() => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const technologies = [
    {
      category: "Frontend",
      items: [
        "React", "Vue.js", "Next.js", "Nuxt.js", "Svelte",
        "TypeScript", "JavaScript", "TailwindCSS", "Framer Motion"
      ]
    },
    {
      category: "Backend",
      items: [
        "Node.js", "Python", "Go", "NestJS", "Express",
        "GraphQL", "tRPC", "Prisma", "TypeORM"
      ]
    },
    {
      category: "UI/UX",
      items: [
        "Figma", "Adobe XD", "Three.js", "GSAP", "WebGL",
        "Lottie", "Spline", "Motion One", "React Spring"
      ]
    },
    {
      category: "DevOps & Cloud",
      items: [
        "Docker", "Kubernetes", "AWS", "Vercel", "Netlify",
        "CI/CD", "GitHub Actions", "Terraform", "Ansible"
      ]
    }
  ];

  return (
    <>
      <div 
        className={`cursor-dot ${isCursorVisible ? 'opacity-100' : 'opacity-0'} hidden md:block`} 
        ref={cursorDotRef} 
      />
      <div 
        className={`cursor-outline ${isCursorVisible ? 'opacity-50' : 'opacity-0'} hidden md:block`} 
        ref={cursorOutlineRef} 
      />
      
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-radial from-[#0066FF]/20 via-transparent to-transparent opacity-30 animated-bg" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,#0066FF,transparent)] blur-[100px] opacity-20 animated-bg" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066FF]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066FF]/50 to-transparent" />
          </div>
          
          <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-[#0066FF]/10">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
              <span className="font-mono text-[#0066FF] font-bold tracking-tight">Ian Rodrigues - Developer Full Stack</span>
              <div className="hidden md:flex items-center gap-8">
                <a href="#work" className="text-sm hover:text-[#0066FF] transition-colors">Trabalhos</a>
                <a href="#about" className="text-sm hover:text-[#0066FF] transition-colors">Sobre</a>
                <a href="#contact" className="text-sm hover:text-[#0066FF] transition-colors">Contato</a>
              </div>
            </div>
          </nav>

          <section className="pt-32 md:pt-40 pb-24 px-4 md:px-6 relative" ref={heroRef}>
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                <div className="reveal reveal-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 mb-8">
                  <Terminal className="w-4 h-4 text-[#0066FF]" />
                  <span className="text-sm text-[#0066FF]">Desenvolvedor Full Stack</span>
                </div>
                
                <h1 className="reveal reveal-delay-2 hero-title text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  Ian Rodrigues
                </h1>
                
                <p className="reveal reveal-delay-3 text-base md:text-lg text-zinc-400 mt-4 mb-16 max-w-2xl leading-relaxed px-4 md:px-0">
                  Desenvolvedor autodidata especializado em criar aplicações web modernas 
                  e intuitivas, com foco em performance e experiência do usuário.
                </p>

                <div className="reveal reveal-delay-4 flex flex-col md:flex-row items-center gap-4 mb-24 w-full md:w-auto px-4 md:px-0">
                  <a 
                    href="#work"
                    className="w-full md:w-auto px-6 py-3 bg-[#0066FF] text-white rounded-lg hover:bg-[#0066FF]/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Rocket className="w-4 h-4" />
                    Ver Projetos
                  </a>
                  <a 
                    href="#contact"
                    className="w-full md:w-auto px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors border border-zinc-800 flex items-center justify-center"
                  >
                    Entrar em Contato
                  </a>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm text-zinc-500">
                  <span className="hidden md:block">Explore mais sobre meu trabalho</span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="work" className="py-16 md:py-24 relative" ref={projectsRef}>
          <div className="absolute inset-0 bg-[#0066FF]/5" />
          
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
            <div className="slide-in-left flex items-center gap-4 mb-8">
              <Sparkles className="w-5 h-5 text-[#0066FF]" />
              <h2 className="text-2xl md:text-3xl font-bold">Projetos em Destaque</h2>
            </div>

            <div className="scale-up relative">
              <div className="mb-4">
                <h3 className="text-lg md:text-2xl font-bold text-[#0066FF] mb-2">
                  {projects[currentProject].title}
                </h3>
                <p className="text-sm md:text-base text-zinc-400 max-w-2xl mb-3">
                  {projects[currentProject].description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {projects[currentProject].tags.map((tag) => (
                    <span key={tag} 
                      className="px-2 py-1 text-xs bg-[#0066FF]/10 text-[#0066FF] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mb-4">
                  {projects[currentProject].highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-xs text-zinc-400">
                      <Zap className="w-3 h-3 text-[#0066FF] flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative w-full h-[600px] md:h-[800px] rounded-lg overflow-hidden border border-zinc-800/50 hover:border-[#0066FF]/20 transition-colors group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                <div className="absolute inset-0">
                  <div className="w-full h-full transform scale-[0.8] md:scale-[0.65] origin-center transition-transform duration-700">
                    <Suspense fallback={<ProjectLoader />}>
                      {React.createElement(projects[currentProject].component)}
                    </Suspense>
                  </div>
                </div>

                <button 
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                
                <button 
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProject(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentProject === index 
                          ? 'w-8 bg-white' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 px-4 md:px-6 relative" ref={aboutRef}>
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,#0066FF,transparent)] blur-[100px] opacity-10 animated-bg" />
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div className="slide-in-left flex items-center gap-4 mb-16">
              <Terminal className="w-5 h-5 text-[#0066FF]" />
              <h2 className="text-2xl md:text-3xl font-bold">Sobre</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="slide-in-left space-y-6">
                <p className="text-base md:text-lg text-zinc-400">
                  Desenvolvedor full stack com experiência em arquiteturas modernas e 
                  microsserviços, especializado em criar experiências digitais inovadoras 
                  e escaláveis.
                </p>
                <p className="text-base md:text-lg text-zinc-400">
                  Apaixonado por UI/UX e novas tecnologias, sempre buscando combinar 
                  design excepcional com código de alta qualidade para entregar produtos 
                  que encantam os usuários.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-12">
                  <div className="p-4 md:p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
                    <div className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-2">3+</div>
                    <div className="text-sm text-zinc-400">Anos de Experiência</div>
                  </div>
                  <div className="p-4 md:p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
                    <div className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-2">50+</div>
                    <div className="text-sm text-zinc-400">Projetos Entregues</div>
                  </div>
                  <div className="p-4 md:p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
                    <div className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-2">100%</div>
                    <div className="text-sm text-zinc-400">Clientes Satisfeitos</div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6">Serviços</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-zinc-900/50 rounded-lg border border-zinc-800/50 hover:border-[#0066FF]/20 transition-all">
                      <h4 className="font-medium mb-2">Desenvolvimento Web Full Stack</h4>
                      <p className="text-sm text-zinc-400">Criação de aplicações web completas, desde o frontend até o backend, com foco em performance e escalabilidade.</p>
                    </div>
                    <div className="p-4 bg-zinc-900/50 rounded-lg border border-zinc-800/50 hover:border-[#0066FF]/20 transition-all">
                      <h4 className="font-medium mb-2">Arquitetura de Software</h4>
                      <p className="text-sm text-zinc-400">Planejamento e implementação de arquiteturas escaláveis usando as melhores práticas e padrões de projeto.</p>
                    </div>
                    <div className="p-4 bg-zinc-900/50 rounded-lg border border-zinc-800/50 hover:border-[#0066FF]/20 transition-all">
                      <h4 className="font-medium mb-2">UI/UX Design</h4>
                      <p className="text-sm text-zinc-400">Design de interfaces modernas e intuitivas com foco na experiência do usuário e acessibilidade.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="slide-in-right space-y-12">
                {technologies.map((tech, index) => (
                  <div key={tech.category} className={`reveal reveal-delay-${index + 1}`}>
                    <h3 className="text-xl font-bold mb-6">{tech.category}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {tech.items.map((item) => (
                        <div 
                          key={item}
                          className="p-3 bg-zinc-900/50 rounded-lg border border-zinc-800/50 hover:border-[#0066FF]/20 transition-all hover:transform hover:scale-105 hover:bg-[#0066FF]/5"
                        >
                          <span className="text-zinc-400 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-4 md:px-6 bg-gradient-to-b from-zinc-900/50 to-zinc-950" ref={contactRef}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="slide-up text-3xl md:text-4xl font-bold mb-6">Vamos Trabalhar Juntos?</h2>
            <p className="slide-up reveal-delay-1 text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              Interessado em transformar sua ideia em realidade? Vamos conversar sobre seu projeto 
              e explorar como posso ajudar a alcançar seus objetivos.
            </p>
            
            <a 
              href="https://wa.me/5527995085243" 
              target="_blank" 
              rel="noopener noreferrer"
              className="scale-up reveal-delay-2 inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#0066FF] text-white rounded-xl hover:bg-[#0066FF]/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl w-full md:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              Iniciar Conversa no WhatsApp
            </a>
          </div>
        </section>

        <footer className="py-8 px-4 md:px-6 border-t border-zinc-900">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-sm text-zinc-500">© 2025 Ian Rodrigues</span>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#0066FF]" />
              <span className="text-sm text-zinc-500">com ❤️ e código</span>
            </div>
          </div>
        </footer>
      </div>

      <a 
        href="https://wa.me/5527995085243" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-btn bg-[#0066FF] text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
      </a>
    </>
  );
}

export default App;
