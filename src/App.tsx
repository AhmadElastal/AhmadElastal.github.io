import { useEffect, useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Code2,
  Database,
  Github,
  Globe2,
  Linkedin,
  Mail,
  Menu,
  ServerCog,
  Smartphone,
  X,
} from 'lucide-react'
import profileImage from './assets/dev-ahmad.png'

type Lang = 'ar' | 'en'

type Project = {
  title: { ar: string; en: string }
  description: { ar: string; en: string }
  technologies: string[]
}

const projects: Project[] = [
  {
    title: { ar: 'واجهة HubSpot محسّنة', en: 'Enhanced HubSpot Interface' },
    description: {
      ar: 'إعادة تصميم وتطوير واجهة Dashboard بأسلوب أوضح وأكثر كفاءة.',
      en: 'A cleaner, more efficient redesign of a dashboard-style experience.',
    },
    technologies: ['React', 'TypeScript', 'UI/UX'],
  },
  {
    title: { ar: 'منصة مؤسسة تعليمية', en: 'Educational Institution Platform' },
    description: {
      ar: 'نظام إدارة تعليمي متكامل مع واجهات منظمة وتجربة استخدام حديثة.',
      en: 'A structured educational management platform with a modern user experience.',
    },
    technologies: ['React', 'Node.js', 'MySQL'],
  },
  {
    title: { ar: 'واجهات تسجيل دخول', en: 'Authentication UI Collection' },
    description: {
      ar: 'مجموعة نماذج تسجيل دخول واستعادة كلمة المرور بتصاميم متعددة.',
      en: 'A collection of sign-in and password recovery interfaces.',
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: { ar: 'واجهات دفع إلكتروني', en: 'Payment Interfaces' },
    description: {
      ar: 'صفحات دفع حديثة تركّز على الوضوح والثقة وسهولة الاستخدام.',
      en: 'Modern payment screens focused on clarity, trust, and usability.',
    },
    technologies: ['React', 'Responsive UI', 'Frontend'],
  },
]

const content = {
  ar: {
    nav: ['الرئيسية', 'من أنا', 'المشاريع', 'المهارات', 'تواصل معي'],
    navIds: ['home', 'about', 'projects', 'skills', 'contact'],
    greeting: 'أهلاً، أنا أحمد محمد',
    title: 'مطور Full Stack',
    subtitle: 'أبني مواقع وتطبيقات ويب حديثة، سريعة، متجاوبة وقابلة للتطوير.',
    ctaProjects: 'شاهد أعمالي',
    ctaContact: 'تواصل معي',
    aboutTitle: 'من أنا',
    aboutText:
      'مطور مهتم ببناء تجارب رقمية عملية تجمع بين واجهات حديثة، بنية برمجية نظيفة، وأداء موثوق. أركز على تحويل الفكرة إلى منتج واضح وسهل الاستخدام.',
    stats: [
      ['4+', 'مشاريع'],
      ['Full Stack', 'التخصص'],
      ['AR / EN', 'لغات الموقع'],
    ],
    projectsTitle: 'المشاريع',
    projectsSubtitle: 'نماذج من الأعمال والواجهات التي أعمل على تطويرها.',
    projectButton: 'عرض التفاصيل',
    skillsTitle: 'المهارات',
    skillsSubtitle: 'تقنيات أستخدمها في تطوير الواجهات والخدمات وقواعد البيانات.',
    contactTitle: 'تواصل معي',
    contactText: 'لديك مشروع أو فكرة؟ يمكنك التواصل معي مباشرة عبر واتساب أو البريد الإلكتروني.',
    whatsapp: 'تواصل عبر واتساب',
    email: 'راسلني عبر البريد',
    footer: 'جميع الحقوق محفوظة',
  },
  en: {
    nav: ['Home', 'About', 'Projects', 'Skills', 'Contact'],
    navIds: ['home', 'about', 'projects', 'skills', 'contact'],
    greeting: "Hi, I'm Ahmad Mohammad",
    title: 'Full Stack Developer',
    subtitle: 'I build modern, fast, responsive, and scalable web experiences.',
    ctaProjects: 'View My Work',
    ctaContact: 'Contact Me',
    aboutTitle: 'About Me',
    aboutText:
      'I build practical digital experiences that combine modern interfaces, clean software structure, and reliable performance. I focus on turning ideas into clear and usable products.',
    stats: [
      ['4+', 'Projects'],
      ['Full Stack', 'Focus'],
      ['AR / EN', 'Website'],
    ],
    projectsTitle: 'Projects',
    projectsSubtitle: 'A selection of products and interfaces I am building and improving.',
    projectButton: 'View Details',
    skillsTitle: 'Skills',
    skillsSubtitle: 'Technologies I use across frontend, backend, and data layers.',
    contactTitle: 'Contact',
    contactText: 'Have a project or an idea? Reach me directly via WhatsApp or email.',
    whatsapp: 'Contact on WhatsApp',
    email: 'Send an Email',
    footer: 'All rights reserved',
  },
}

const skills = [
  ['HTML', 95],
  ['CSS', 92],
  ['JavaScript', 90],
  ['React', 86],
  ['Node.js', 82],
  ['PHP', 78],
  ['MySQL', 84],
  ['MongoDB', 76],
]

function App() {
  const [lang, setLang] = useState<Lang>('ar')
  const [mobileOpen, setMobileOpen] = useState(false)
  const t = content[lang]

  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])

  const contactLinks = useMemo(
    () => ({
      whatsapp: 'https://wa.me/972672022165',
      email: 'mailto:a0567202165@gmail.com',
      github: 'https://github.com/AhmadElastal',
    }),
    [],
  )

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="Dev Ahmad Mohammad">
            <div className="brand-mark">&lt;/&gt;</div>
            <div>
              <strong>Dev Ahmad</strong>
              <span>Mohammad</span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {t.nav.map((item, index) => (
              <a key={item} href={`#${t.navIds[index]}`}>
                {item}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="lang-switch"
              onClick={() => setLang((value) => (value === 'ar' ? 'en' : 'ar'))}
              aria-label="Switch language"
            >
              <Globe2 size={16} />
              {lang === 'ar' ? 'EN' : 'AR'}
            </button>
            <button className="menu-btn" onClick={() => setMobileOpen((v) => !v)} aria-label="Menu">
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {t.nav.map((item, index) => (
              <a key={item} href={`#${t.navIds[index]}`} onClick={() => setMobileOpen(false)}>
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="grid-glow" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">BUILD · LEARN · IMPROVE · REPEAT</p>
              <h1>{t.greeting}</h1>
              <h2>{t.title}</h2>
              <p className="hero-subtitle">{t.subtitle}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  {t.ctaProjects} <ArrowUpRight size={18} />
                </a>
                <a className="btn btn-ghost" href="#contact">
                  {t.ctaContact}
                </a>
              </div>
              <div className="social-row">
                <a href={contactLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin />
                </a>
                <a href={contactLinks.email} aria-label="Email">
                  <Mail />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="photo-ring">
                <img src={profileImage} alt="Dev Ahmad Mohammad" />
              </div>
              <div className="floating-card code-card">
                <Code2 size={20} />
                <span>code(); develop(); innovate();</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">01</span>
              <h2>{t.aboutTitle}</h2>
            </div>
            <div className="about-card glass-card">
              <div>
                <p>{t.aboutText}</p>
              </div>
              <div className="stats-grid">
                {t.stats.map(([value, label]) => (
                  <div className="stat" key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">02</span>
              <div>
                <h2>{t.projectsTitle}</h2>
                <p>{t.projectsSubtitle}</p>
              </div>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title.en}>
                  <div className={`project-visual project-visual-${index + 1}`}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="project-body">
                    <h3>{project.title[lang]}</h3>
                    <p>{project.description[lang]}</p>
                    <div className="tags">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <button className="text-link" type="button">
                      {t.projectButton} <ArrowUpRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">03</span>
              <div>
                <h2>{t.skillsTitle}</h2>
                <p>{t.skillsSubtitle}</p>
              </div>
            </div>
            <div className="skills-layout">
              <div className="skills-icons">
                <div className="skill-icon"><Code2 /><span>Frontend</span></div>
                <div className="skill-icon"><ServerCog /><span>Backend</span></div>
                <div className="skill-icon"><Database /><span>Databases</span></div>
                <div className="skill-icon"><Smartphone /><span>Responsive</span></div>
              </div>
              <div className="skill-bars glass-card">
                {skills.map(([name, value]) => (
                  <div className="skill-row" key={String(name)}>
                    <div className="skill-meta"><span>{name}</span><span>{value}%</span></div>
                    <div className="skill-track"><span style={{ width: `${value}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-card">
              <span className="section-kicker">04</span>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactText}</p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                  {t.whatsapp}
                </a>
                <a className="btn btn-ghost" href={contactLinks.email}>
                  {t.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="brand compact">
            <div className="brand-mark">&lt;/&gt;</div>
            <strong>Dev Ahmad Mohammad</strong>
          </div>
          <span>© {new Date().getFullYear()} Dev Ahmad Mohammad — {t.footer}</span>
        </div>
      </footer>
    </div>
  )
}

export default App
