import { portfolioConfig } from "@/content/portfolio";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ArrowDown, ArrowUpRight, ChartNoAxesCombined, CheckCircle2, ClipboardList, FileText, GraduationCap, Layers3, Lightbulb, Mail, Maximize2, Megaphone, Phone, SearchCheck, Sparkles, Target, UsersRound } from "lucide-react";
import { useEffect, useState } from "react";

const projectIcons = [SearchCheck, ChartNoAxesCombined, Lightbulb, ClipboardList, UsersRound, Megaphone, Target];

function initials(name: string) {
  return name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

export default function Home() {
  const config = portfolioConfig;
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof portfolioConfig.certificates)[number] | null>(null);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".scroll-reveal"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
        } else {
          entry.target.classList.remove("is-revealed");
        }
      }),
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`portfolio-shell theme-${config.stylePreset}`}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <a className="monogram" href="#top" aria-label={`${config.name} — top of page`}>{initials(config.name)}</a>
        <button className={`menu-trigger ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="site-nav" aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
          <span className="burger-lines" aria-hidden="true"><i /><i /><i /></span>
        </button>
        <nav id="site-nav" className={menuOpen ? "site-nav open" : "site-nav"} aria-label="Portfolio sections">
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#creative" onClick={() => setMenuOpen(false)}>Creative work</a>
          <a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <main id="main-content">
        <section id="top" className="hero section-frame">
          <div className="hero-copy entry">
            <p className="eyebrow"><span className="live-dot" aria-hidden="true" />{config.eyebrow}</p>
            <h1><span className="hero-name">{config.name}</span><span className="hero-headline">{config.headline}</span></h1>
            <p className="hero-intro">{config.introduction}</p>
            <div className="hero-actions">
              <a className="primary-action" href={`mailto:${config.email}?subject=Professional%20enquiry%20for%20${encodeURIComponent(config.name)}`}><Mail size={17} aria-hidden="true" /> Start a conversation</a>
              <a className="text-action" href="#certificates">View credentials <ArrowDown size={17} aria-hidden="true" /></a>
            </div>
          </div>
          <aside className="hero-aside entry" aria-label="Professional summary">
            <div className="glass-orb" aria-hidden="true"><Sparkles size={22} /></div>
            <p className="aside-number">01</p>
            <p className="aside-title">Current focus</p>
            <p>{config.availability}</p>
            <div className="aside-rule" />
            <p className="aside-meta">Based in<br />{config.location}</p>
          </aside>
        </section>

        <section className="skills-section section-frame" aria-labelledby="skills-title">
          <div className="section-intro entry"><p className="eyebrow">Capabilities</p><h2 id="skills-title">A balanced foundation for thoughtful contribution.</h2></div>
          <ul className="skill-list" aria-label="Key skills">
            {config.skills.map((skill, index) => <li className="entry scroll-reveal" key={skill}><span>{String(index + 1).padStart(2, "0")}</span>{skill}<CheckCircle2 size={17} aria-hidden="true" /></li>)}
          </ul>
        </section>

        <section id="education" className="education-section section-frame" aria-labelledby="education-title">
          <div className="section-intro entry"><p className="eyebrow">Education</p><h2 id="education-title">Analytical study, applied with intent.</h2></div>
          <div className="education-grid">
            {config.education.map((item, index) => <article className="education-card entry scroll-reveal" key={item.title}><div className="education-mark" aria-hidden="true"><GraduationCap size={20} /></div><span className="work-number">0{index + 1}</span><p className="timeline-meta">{item.meta}</p><h3>{item.title}</h3><p>{item.body}</p></article>)}
          </div>
        </section>

        <section id="experience" className="experience-section section-frame" aria-labelledby="experience-title">
          <div className="section-intro entry"><p className="eyebrow">Experience</p><h2 id="experience-title">Learning through practical, collaborative settings.</h2></div>
          <div className="timeline">
            {config.experience.map((item, index) => <article className="timeline-item experience-card entry scroll-reveal" key={`${item.title}-${item.meta}`}><span className="timeline-index">0{index + 1}</span><div><p className="timeline-meta">{item.meta}</p><h3>{item.title}</h3><p>{item.body}</p></div></article>)}
          </div>
        </section>

        <section id="work" className="work-section section-frame" aria-labelledby="work-title">
          <div className="section-intro entry"><p className="eyebrow">Selected work</p><h2 id="work-title">Early evidence, approached with care.</h2></div>
          <div className="work-grid">
            {config.projects.map((project, index) => {
              const WorkIcon = projectIcons[index % projectIcons.length];
              return <article className={`work-card entry scroll-reveal work-card-${index + 1}`} key={`${project.title}-${project.meta}`}><div className="work-mark" aria-hidden="true"><WorkIcon size={20} /></div><p className="timeline-meta">{project.meta}</p><time className="work-date" dateTime={project.date}>{project.date}</time><h3>{project.title}</h3><p>{project.body}</p>{project.supportingDocument ? <a className="supporting-document" href={project.supportingDocument} target="_blank" rel="noreferrer"><FileText size={15} aria-hidden="true" /> View supporting document <ArrowUpRight size={14} aria-hidden="true" /></a> : <span className="supporting-document is-unavailable"><FileText size={15} aria-hidden="true" /> Supporting material available on request</span>}<span className="work-number">0{index + 1}</span></article>;
            })}
          </div>
        </section>

        <section id="creative" className="creative-section section-frame" aria-labelledby="creative-title">
          <div className="section-intro entry"><p className="eyebrow">Creative work</p><h2 id="creative-title">Visual thinking, explored with care.</h2></div>
          <div className="creative-grid">
            {config.creativeWork.map((item, index) => <article className={`creative-card entry scroll-reveal creative-card-${index + 1}`} key={item.title}><div className="creative-image"><img src={item.image} alt={item.alt} /></div><div className="creative-copy"><p className="timeline-meta">{item.meta}</p><h3>{item.title}</h3><p>{item.body}</p></div></article>)}
          </div>
        </section>

        <section className="achievements-section section-frame" aria-labelledby="achievements-title">
          <div className="section-intro entry"><p className="eyebrow">Recognition & learning</p><h2 id="achievements-title">Progress made visible.</h2></div>
          <div className="achievement-list">
            {config.achievements.map((item) => <article className="achievement entry scroll-reveal" key={`${item.title}-${item.meta}`}><div><p className="timeline-meta">{item.meta}</p><h3>{item.title}</h3></div><p>{item.body}</p></article>)}
          </div>
        </section>

        <section id="certificates" className="certificates-section section-frame" aria-labelledby="certificates-title">
          <div className="section-intro entry"><p className="eyebrow">Credentials</p><div><h2 id="certificates-title">Every milestone, kept in view.</h2><p className="certificate-intro">A considered record of accredited learning, university participation, and practical experience.</p></div></div>
          <div className="certificate-grid">
            {config.certificates.map((certificate, index) => <article className={`certificate-card entry certificate-card-${index + 1}`} key={certificate.title}>
              <button type="button" className="certificate-preview-trigger" onClick={() => setSelectedCertificate(certificate)} aria-label={`Preview ${certificate.title} certificate`}>
                <div className="certificate-visual"><div className="certificate-glare" aria-hidden="true" /><img src={certificate.image} alt={certificate.alt} /></div>
                <div className="certificate-copy"><p className="timeline-meta">{certificate.issuer}</p><h3>{certificate.title}</h3><div className="certificate-foot"><span>{certificate.detail}</span></div><span className="preview-certificate"><Maximize2 size={14} aria-hidden="true" /> Open full certificate</span></div>
              </button>
            </article>)}
          </div>
          <Dialog open={Boolean(selectedCertificate)} onOpenChange={(open) => !open && setSelectedCertificate(null)}>
            <DialogContent className="certificate-dialog" showCloseButton>
              {selectedCertificate && <><DialogTitle>{selectedCertificate.title}</DialogTitle><DialogDescription>{selectedCertificate.issuer} · {selectedCertificate.detail}</DialogDescription><div className="certificate-full-image"><img src={selectedCertificate.image} alt={selectedCertificate.alt} /></div></>}
            </DialogContent>
          </Dialog>
        </section>

        <section id="contact" className="contact-section section-frame" aria-labelledby="contact-title">
          <div className="contact-copy entry"><p className="eyebrow">Professional enquiries</p><h2 id="contact-title">Let’s make an introduction.</h2><p>For professional opportunities, collaboration, or career-related enquiries, please choose the contact method that works best for you.</p></div>
          <div className="contact-actions entry">
            <a href={`mailto:${config.email}?subject=Professional%20enquiry%20for%20${encodeURIComponent(config.name)}`}><Mail aria-hidden="true" /><span><small>Email</small>{config.email}</span><ArrowUpRight aria-hidden="true" /></a>
            <a href={`tel:${config.phone.replace(/[^+\d]/g, "")}`}><Phone aria-hidden="true" /><span><small>Phone</small>{config.phone}</span><ArrowUpRight aria-hidden="true" /></a>
          </div>
        </section>

      </main>

      <footer className="site-footer"><p>© {new Date().getFullYear()} {config.name}. Built for considered opportunities.</p><a href="#top">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a></footer>
    </div>
  );
}
