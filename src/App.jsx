import React, { useState } from "react";
import { Link, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import {
  Menu, X, ArrowRight, CheckCircle2, Factory, Wrench, HardHat,
  Mail, Phone, MapPin, Send, ChevronRight
} from "lucide-react";

const products = [
  {
    id: "mobile-crushing-plant",
    category: "Crushing Plants",
    name: "Mobile Crushing Plant",
    short: "High-performance crushing solution designed for aggregate production.",
    description: "A flexible crushing solution for projects that require efficient aggregate processing and mobility between work sites.",
    features: ["Mobile configuration", "Efficient aggregate processing", "Expandable equipment configuration", "Suitable for project-based operations"],
    specs: [["Application", "Aggregate production"], ["Configuration", "Mobile"], ["System", "Crushing and screening"], ["Use", "Construction and infrastructure"]],
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "asphalt-mixing-plant",
    category: "Asphalt Plants",
    name: "Asphalt Mixing Plant",
    short: "Integrated asphalt production equipment for road and infrastructure projects.",
    description: "A plant solution designed to support controlled asphalt production for paving, road construction, and infrastructure applications.",
    features: ["Controlled material mixing", "Integrated aggregate handling", "Production-focused configuration", "Designed for infrastructure work"],
    specs: [["Application", "Asphalt production"], ["System", "Mixing plant"], ["Material", "Aggregates and asphalt"], ["Use", "Road and infrastructure"]],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "concrete-batching-plant",
    category: "Batching Plants",
    name: "Concrete Batching Plant",
    short: "Reliable concrete batching solution for construction and infrastructure projects.",
    description: "A configurable batching solution for producing concrete with organized aggregate, mixing, and control systems.",
    features: ["Aggregate handling", "Concrete mixing", "Control system integration", "Project-oriented configuration"],
    specs: [["Application", "Concrete production"], ["System", "Batching and mixing"], ["Material", "Concrete aggregates"], ["Use", "Construction projects"]],
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80"
  }
];

const services = [
  ["Equipment Consultation", "Understand project requirements and identify suitable equipment and plant configurations.", Wrench],
  ["Plant Installation", "Support for setting up equipment and plant systems at the project site.", Factory],
  ["Equipment Commissioning", "Assistance with initial setup, testing, and preparation for operation.", CheckCircle2],
  ["Technical Support", "Practical support for equipment operation and technical concerns.", HardHat],
  ["Maintenance", "Maintenance support intended to help keep equipment operating reliably.", Wrench],
  ["Spare Parts", "Parts support for equipment maintenance and continued operation.", Factory],
  ["After-Sales Service", "Continued assistance after installation and equipment delivery.", CheckCircle2]
];

const projects = [
  { name: "Asphalt Plant Installation", location: "Project Location", year: "2026", type: "Asphalt Plants", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80" },
  { name: "Aggregate Processing Setup", location: "Project Location", year: "2026", type: "Crushing Plants", image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=900&q=80" },
  { name: "Concrete Batching Solution", location: "Project Location", year: "2026", type: "Batching Plants", image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=900&q=80" }
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    ["/", "Home"],
    ["/about", "About Us"],
    ["/products", "Products / Solutions"],
    ["/projects", "Projects"],
    ["/services", "Services"],
    ["/contact", "Contact Us"]
  ];

  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">A+</span>
          <span><strong>ANGLEPLUS</strong><small>UNITED INC.</small></span>
        </Link>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([path, label]) => (
            <Link key={path} className={location.pathname === path ? "active" : ""} to={path} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>Request a Consultation</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand"><span className="brand-mark">A+</span><span><strong>ANGLEPLUS</strong><small>UNITED INC.</small></span></div>
          <p>Equipment, solutions, and support for asphalt, batching, crushing, and construction projects.</p>
        </div>
        <div><h4>Solutions</h4><Link to="/products">Asphalt Plants</Link><Link to="/products">Crushing Plants</Link><Link to="/products">Batching Plants</Link></div>
        <div><h4>Company</h4><Link to="/about">About Us</Link><Link to="/projects">Projects</Link><Link to="/services">Services</Link></div>
        <div><h4>Contact</h4><p><Phone size={15}/> +63 XXX XXX XXXX</p><p><Mail size={15}/> info@example.com</p><p><MapPin size={15}/> Philippines</p></div>
      </div>
      <div className="footer-bottom">© 2026 Angleplus United Inc. All rights reserved.</div>
    </footer>
  );
}

function PageHero({ eyebrow, title, text }) {
  return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>;
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <span className="eyebrow">ANGLEPLUS UNITED INC.</span>
          <h1>Reliable Solutions for <span>Asphalt, Batching & Crushing Plants</span></h1>
          <p>Providing equipment, solutions, and support for construction and infrastructure projects.</p>
          <div className="hero-actions"><Link className="btn primary" to="/products">Explore Our Solutions <ArrowRight size={18}/></Link><Link className="btn light" to="/contact">Contact Us</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading"><span className="eyebrow">OUR SOLUTIONS</span><h2>Equipment and plant solutions for demanding projects.</h2><p>Explore our core categories and discover solutions for asphalt production, aggregate processing, and concrete batching.</p></div>
          <div className="solution-grid">
            {[
              ["Asphalt Plants", "Asphalt mixing plants, components, supporting equipment, and applications.", "asphalt-mixing-plant"],
              ["Crushing Plants", "Crushers, screens, feeders, conveyors, and complete crushing solutions.", "mobile-crushing-plant"],
              ["Batching Plants", "Concrete batching plants, mixers, aggregate systems, and control systems.", "concrete-batching-plant"]
            ].map(([title, text, id]) => <div className="solution-card" key={title}><div className="icon-box"><Factory/></div><h3>{title}</h3><p>{text}</p><Link to={`/products/${id}`}>Learn More <ArrowRight size={16}/></Link></div>)}
          </div>
        </div>
      </section>

      <section className="split-section">
        <div className="split-image" style={{backgroundImage: "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80)"}}></div>
        <div className="split-content"><span className="eyebrow">MORE THAN EQUIPMENT</span><h2>Solutions backed by practical project support.</h2><p>Angleplus United Inc. can support customers beyond equipment supply through consultation, installation, commissioning, technical support, maintenance, spare parts, and after-sales service.</p><Link className="text-link" to="/services">Explore Our Services <ArrowRight size={17}/></Link></div>
      </section>

      <section className="section muted"><div className="container"><div className="section-heading"><span className="eyebrow">FEATURED EQUIPMENT</span><h2>Explore our equipment showcase.</h2></div><div className="product-grid">{products.map(p => <ProductCard key={p.id} product={p}/>)}</div></div></section>

      <section className="cta"><div className="container"><span className="eyebrow">START A CONVERSATION</span><h2>Have a project in mind?</h2><p>Tell us what you need and our team can discuss the appropriate equipment or solution.</p><Link className="btn primary" to="/contact">Request a Consultation <ArrowRight size={18}/></Link></div></section>
    </>
  );
}

function ProductCard({ product }) {
  return <article className="product-card"><div className="card-image"><img src={product.image} alt={product.name}/><span>{product.category}</span></div><div className="card-body"><h3>{product.name}</h3><p>{product.short}</p><Link to={`/products/${product.id}`}>View Details <ArrowRight size={16}/></Link></div></article>;
}

function Products() {
  return <><PageHero eyebrow="PRODUCTS / SOLUTIONS" title="Equipment built around project needs." text="Browse our core plant and equipment categories. This catalog is designed to grow as more products, photographs, specifications, and applications are added."/><section className="section"><div className="container"><div className="category-block"><h2>Asphalt Plants</h2><p>Solutions for asphalt mixing and related plant operations.</p><div className="product-grid">{products.filter(p => p.category === "Asphalt Plants").map(p => <ProductCard key={p.id} product={p}/>)}</div></div><div className="category-block"><h2>Crushing Plants</h2><p>Equipment for aggregate processing and complete crushing solutions.</p><div className="product-grid">{products.filter(p => p.category === "Crushing Plants").map(p => <ProductCard key={p.id} product={p}/>)}</div></div><div className="category-block"><h2>Batching Plants</h2><p>Concrete batching and mixing solutions for construction projects.</p><div className="product-grid">{products.filter(p => p.category === "Batching Plants").map(p => <ProductCard key={p.id} product={p}/>)}</div></div></div></section></>;
}

function ProductDetail({ id }) {
  const product = products.find(p => p.id === id);
  const navigate = useNavigate();
  if (!product) return <PageHero eyebrow="PRODUCT" title="Product not found" text="The requested product is not available in this starter catalog."/>;

  return <><section className="detail-hero"><div className="container detail-grid"><img src={product.image} alt={product.name}/><div><span className="eyebrow">{product.category}</span><h1>{product.name}</h1><p>{product.description}</p><button className="btn primary" onClick={() => navigate("/contact")}>Request an Inquiry <ArrowRight size={18}/></button></div></div></section><section className="section"><div className="container two-col"><div><span className="eyebrow">KEY FEATURES</span><h2>Designed for practical applications.</h2><ul className="check-list">{product.features.map(f => <li key={f}><CheckCircle2 size={19}/>{f}</li>)}</ul></div><div><span className="eyebrow">SPECIFICATIONS</span><div className="spec-table">{product.specs.map(([a,b]) => <div key={a}><strong>{a}</strong><span>{b}</span></div>)}</div></div></div></section></>;
}

function About() {
  return <><PageHero eyebrow="ABOUT US" title="Building practical solutions for construction and infrastructure." text="Angleplus United Inc. is presented through this website as a solutions-focused company serving projects involving asphalt, batching, crushing, and construction equipment."/><section className="section"><div className="container two-col"><div><span className="eyebrow">WHO WE ARE</span><h2>Equipment and support for project requirements.</h2><p>Our focus is to provide equipment solutions and practical support that help customers plan, install, operate, and maintain plant and construction equipment.</p><p>This starter content can be replaced with the company's official history, certifications, locations, team information, and actual experience.</p></div><div className="info-panel"><h3>Experience Areas</h3>{["Asphalt Plants","Batching Plants","Crushing Plants","Construction Equipment"].map(x => <div className="info-row" key={x}><CheckCircle2 size={18}/>{x}</div>)}</div></div></section><section className="section muted"><div className="container values"><div><span className="eyebrow">OUR MISSION</span><h3>Provide reliable equipment solutions and responsive project support.</h3></div><div><span className="eyebrow">OUR VISION</span><h3>Build lasting relationships through dependable solutions and service.</h3></div><div><span className="eyebrow">OUR VALUES</span><h3>Reliability, service, practical solutions, and customer focus.</h3></div></div></section></>;
}

function Services() {
  return <><PageHero eyebrow="SERVICES" title="Support before, during, and after equipment delivery." text="Show customers that Angleplus is more than an equipment supplier by presenting the services available around each project."/><section className="section"><div className="container service-grid">{services.map(([name,text,Icon]) => <div className="service-card" key={name}><div className="icon-box"><Icon/></div><h3>{name}</h3><p>{text}</p></div>)}</div></section></>;
}

function Projects() {
  return <><PageHero eyebrow="PROJECTS / PORTFOLIO" title="Projects and applications." text="Use this section to demonstrate real-world experience through project photos, supplied equipment, scope of work, location, and project details."/><section className="section"><div className="container project-grid">{projects.map(p => <article className="project-card" key={p.name}><img src={p.image} alt={p.name}/><div><span>{p.type}</span><h3>{p.name}</h3><p><MapPin size={15}/> {p.location} &nbsp; • &nbsp; {p.year}</p><button className="text-link">View Project <ArrowRight size={16}/></button></div></article>)}</div></section></>;
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({name:"",company:"",email:"",phone:"",type:"Equipment",message:""});
  const update = e => setForm({...form,[e.target.name]:e.target.value});
  const submit = e => { e.preventDefault(); setSubmitted(true); };
  return <><PageHero eyebrow="CONTACT / INQUIRY" title="Let's discuss your project." text="Send an inquiry and use the form as the starting point for a future connected backend or CRM."/><section className="section"><div className="container contact-grid"><form className="form" onSubmit={submit}><span className="eyebrow">REQUEST A CONSULTATION</span><h2>Tell us what you need.</h2><div className="form-grid"><label>Name<input required name="name" value={form.name} onChange={update}/></label><label>Company<input name="company" value={form.company} onChange={update}/></label><label>Email<input required type="email" name="email" value={form.email} onChange={update}/></label><label>Contact Number<input name="phone" value={form.phone} onChange={update}/></label></div><label>Inquiry Type<select name="type" value={form.type} onChange={update}><option>Asphalt Plant</option><option>Crushing Plant</option><option>Batching Plant</option><option>Equipment</option><option>Spare Parts</option><option>Maintenance</option><option>Other</option></select></label><label>Message<textarea required name="message" rows="6" value={form.message} onChange={update}></textarea></label><button className="btn primary" type="submit"><Send size={17}/> Submit Inquiry</button>{submitted && <p className="success"><CheckCircle2 size={17}/> Inquiry captured locally. Connect this form to your backend/API when ready.</p>}</form><aside className="contact-info"><span className="eyebrow">CONTACT US</span><h2>Get in touch.</h2><div className="contact-item"><MapPin/><div><strong>Office Address</strong><p>Company address to be added</p></div></div><div className="contact-item"><Phone/><div><strong>Phone</strong><p>+63 XXX XXX XXXX</p></div></div><div className="contact-item"><Mail/><div><strong>Email</strong><p>info@example.com</p></div></div><div className="map-placeholder"><MapPin size={30}/><p>Google Maps location can be embedded here once the official office address is provided.</p></div></aside></div></section></>;
}

function App() {
  return <><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/products" element={<Products/>}/><Route path="/products/:id" element={<ProductRoute/>}/><Route path="/projects" element={<Projects/>}/><Route path="/services" element={<Services/>}/><Route path="/contact" element={<Contact/>}/></Routes></main><Footer/></>;
}

function ProductRoute() {
  const { pathname } = useLocation();
  return <ProductDetail id={pathname.split("/").pop()}/>;
}

export default App;