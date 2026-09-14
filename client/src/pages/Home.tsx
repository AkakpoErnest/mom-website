import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown, ArrowRight, Menu, X, MapPin, Mail, Phone } from "lucide-react";

const links = [["About", "about"], ["Experience", "experience"], ["Education", "education"]];
const roles = [
  { date: "2025 — Present", role: "Deputy Registrar (Operations)", place: "National Teaching Council, Ghana", text: "Overseeing operational strategies and implementation for teacher regulation in Ghana." },
  { date: "2017 — 2025", role: "Principal", place: "Mount Mary College of Education, Somanya", text: "Eight years of institutional leadership, advancing academic excellence, gender balance, and practical teacher training across 124 partner schools." },
  { date: "2013 — 2017", role: "Senior Lecturer & Head of Department", place: "French Education · University of Education, Winneba", text: "Teaching advanced French linguistics and leading departmental administration." },
];
const degrees = [
  ["PhD", "French (Linguistics and Didactics)", "University of Cape Coast"],
  ["MPhil", "French", "University of Education, Winneba"],
  ["M.Ed.", "Computer Education and Technology", "Ohio University, USA"],
  ["B.Ed.", "French", "University of Education, Winneba"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <div className="editorial-site" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="page-width nav-inner">
          <a href="#top" className="wordmark" aria-label="Dr. Cecilia Agbeh — home"><span className="monogram">CA<span>.</span></span><span className="brand-name">DR. CECILIA AGBEH</span></a>
          <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}<a className="nav-contact" href="#contact">Let’s connect <ArrowUpRight size={16}/></a></nav>
          <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>
        {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{[...links, ["Let’s connect", "contact"]].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={18}/></a>)}</nav>}
      </header>
      <main id="main">
        <section className="hero-section page-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="small-line"/> EDUCATOR. LEADER. ADVOCATE.</p>
            <h1 id="hero-title">Dr. Cecilia<br/>Esinam Eyaa<br/><em>Agbeh.</em></h1>
            <p className="hero-mission">Advancing education.<br/>Empowering the next generation.</p>
            <p className="hero-description">A career dedicated to teacher education, institutional leadership, and creating opportunity in Ghana.</p>
            <div className="hero-actions"><a className="solid-link" href="#about">Explore my journey <ArrowUpRight size={18}/></a><a className="text-link" href="#contact">Get in touch <ArrowRight size={17}/></a></div>
          </div>
          <div className="portrait-column">
            <div className="portrait-frame"><img src="/images/dr-cecilia-agbeh.jpg" alt="Portrait of Dr. Cecilia Esinam Eyaa Agbeh" fetchPriority="high"/><span className="portrait-index">A LIFE IN EDUCATION</span></div>
            <div className="portrait-caption"><span className="status-dot"/><div><strong>Deputy Registrar (Operations)</strong><span>National Teaching Council, Ghana</span></div><span className="caption-year">2025 — PRESENT</span></div>
          </div>
          <a href="#about" className="discover-link"><ArrowDown size={15}/> DISCOVER THE STORY</a>
        </section>
        <section className="impact-band" aria-label="Impact at Mount Mary College of Education"><div className="page-width impact-inner"><p>Leadership with<br/><em>lasting impact.</em><span>Mount Mary · 2017–2025</span></p>{[["1,400+", "Students in the community"], ["60%", "Female enrollment"], ["124", "Partner basic schools"]].map(([value, label]) => <div className="stat" key={value}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
        <section id="about" className="page-width editorial-section about-grid">
          <div><p className="eyebrow">01 / THE PERSON BEHIND THE WORK</p><h2>Education is a<br/>foundation for<br/><em>possibility.</em></h2><div className="section-note">Rooted in Ghana.<br/>Inspired by a world of possibilities.</div></div>
          <div className="biography"><p className="lead-text">An educator at heart. A leader through service. A committed advocate for the future of teacher education.</p><p>Dr. Cecilia Esinam Eyaa Agbeh serves as Deputy Registrar in charge of Operations at the National Teaching Council, Ghana. Her work brings together academic expertise, institutional leadership, and a commitment to expanding opportunity.</p><p>As Principal of Mount Mary College of Education in Somanya from 2017 to 2025, she led a community of more than 1,400 students and 140 staff. Her tenure saw female enrollment reach 60% and the college celebrate its 75th anniversary.</p><p>She spearheaded the Support Teaching in Schools (STS) programme, connecting student teachers with practical experience in 124 basic schools. She also advocates for educational infrastructure, resources, and teacher welfare in dialogue with national policy makers.</p><p>With expertise in French Linguistics and Didactics, she brings a distinctive perspective to the relationship between language, learning, and educational leadership.</p><div className="focus-tags"><span>Teacher education</span><span>Educational leadership</span><span>French linguistics</span></div></div>
        </section>
        <section id="experience" className="career-section"><div className="page-width editorial-section"><div className="section-heading"><div><p className="eyebrow">02 / LEADERSHIP & SERVICE</p><h2>A journey of <em>purpose.</em></h2></div><p>Building institutions.<br/>Supporting the people within them.</p></div><div className="career-list">{roles.map((role, i) => <article className="career-row" key={role.role}><div className="career-date"><span className={i === 0 ? "active-dot" : "timeline-dot"}/>{role.date}</div><div><h3>{role.role}</h3><p className="career-place">{role.place}</p><p className="career-description">{role.text}</p></div><span className="career-number">0{i+1}</span></article>)}</div></div></section>
        <section id="education" className="page-width editorial-section"><div className="section-heading"><div><p className="eyebrow">03 / ACADEMIC FOUNDATION</p><h2>A lifelong pursuit<br/>of <em>knowledge.</em></h2></div><p>Learning across disciplines.<br/>Perspectives from around the world.</p></div><div className="education-grid"><div className="degree-list">{degrees.map(([degree, subject, school]) => <article className="degree-row" key={degree}><span className="degree-label">{degree}</span><div><h3>{subject}</h3><p>{school}</p></div></article>)}</div><aside className="certifications"><span className="eyebrow">BEYOND THE DEGREE</span><h3>Leadership without borders.</h3><p className="cert-intro">Professional development in institutional management and educational leadership.</p><ul><li><strong>Lean Theory Programme</strong><span>University of St Andrews · Scotland</span></li><li><strong>Management of Higher Education Institutes</strong><span>Galilee Institute · Israel</span></li><li><strong>Educational Leadership</strong><span>The Hague University of Applied Sciences · Holland</span></li></ul></aside></div></section>
        <section id="contact" className="contact-section"><div className="page-width contact-grid"><div><p className="eyebrow">04 / LET’S CONNECT</p><h2>Great things begin<br/>with a <em>conversation.</em></h2><p>For speaking engagements, academic consultations,<br className="desktop-break"/> and conversations about educational leadership.</p><a className="solid-link contact-button" href="mailto:info@ntc.gov.gh">Start a conversation <ArrowUpRight size={18}/></a></div><address className="contact-details"><p className="eyebrow">CONTACT THROUGH THE NTC</p><a href="mailto:info@ntc.gov.gh"><Mail size={19}/><span>info@ntc.gov.gh</span><ArrowUpRight size={16}/></a><a href="tel:+233302736555"><Phone size={19}/><span>+233 (0) 30 273 6555</span><ArrowUpRight size={16}/></a><div><MapPin size={19}/><span>National Teaching Council<br/>Accra, Ghana</span></div></address></div></section>
      </main>
      <footer className="site-footer page-width"><a className="wordmark" href="#top"><span className="monogram">CA<span>.</span></span><span className="brand-name">EDUCATION. LEADERSHIP. IMPACT.</span></a><p>© {new Date().getFullYear()} Dr. Cecilia Esinam Eyaa Agbeh</p><a href="#top" className="text-link">Back to top ↑</a></footer>
    </div>
  );
}
