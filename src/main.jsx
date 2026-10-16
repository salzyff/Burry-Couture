import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, Menu, X, Camera, MapPin, Sparkles, Heart } from 'lucide-react';
import './styles.css';

const ig = 'https://www.instagram.com/burrycouture/';
const whatsapp = 'https://wa.me/2349018081813';
const booking = 'https://docs.google.com/forms/d/e/1FAIpQLSdEcfseXZTNKBtEYtUahWBp2Oza_7JFYx58wsUrSwKud85jTg/viewform?usp=send_form';
const photos = [
  'https://www.bellanaijaweddings.com/wp-content/uploads/2026/02/Burry-Couture-Edo-Traditional-Bridal-Look8.jpg',
  'https://www.bellanaijaweddings.com/wp-content/uploads/2026/02/Burry-Couture-Edo-Traditional-Bridal-Look1.jpg',
  'https://www.bellanaijaweddings.com/wp-content/uploads/2026/02/Burry-Couture-Edo-Traditional-Bridal-Look9.jpg',
  'https://www.bellanaijaweddings.com/wp-content/uploads/2026/02/Burry-Couture-Edo-Traditional-Bridal-Look6.jpg',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <div className="announcement">Now taking bookings for 2026 celebrations <span>·</span> Worldwide shipping</div>
    <header className="header">
      <a href="#home" className="brand" aria-label="Burry Couture home"><span className="brand-mark">B</span><span>BURRY<small>COUTURE</small></span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
        <a href="#collections" onClick={closeMenu}>Collections</a><a href="#story" onClick={closeMenu}>Our atelier</a><a href="#process" onClick={closeMenu}>The process</a><a href="#contact" onClick={closeMenu}>Contact</a>
        <a href={booking} className="nav-cta" target="_blank" rel="noreferrer">Book a fitting <ArrowRight size={15}/></a>
      </nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line"/> LAGOS · MADE WITH MEANING</p>
          <h1>Your story,<br/><em>beautifully</em><br/>worn.</h1>
          <p className="hero-text">For the days you’ll remember forever. Burry Couture creates thoughtful, custom pieces that honour where you come from and how you want to feel.</p>
          <div className="hero-actions"><a className="button button-dark" href={booking} target="_blank" rel="noreferrer">Let’s create your look <ArrowRight size={17}/></a><a className="text-link" href="#collections">Explore the atelier <ArrowDown size={15}/></a></div>
          <div className="hero-note"><span className="note-star">✳</span><span>Made to measure<br/><b>just for you</b></span></div>
        </div>
        <div className="hero-visual">
          <img src={photos[0]} alt="Burry Couture Edo traditional bridal look with coral bead detailing" />
          <div className="image-caption"><span>THE EDO BRIDE</span><span>01 / 04</span></div>
          <div className="hero-stamp"><span>CRAFTED</span><b>with<br/>care</b><span>IN LAGOS</span></div>
        </div>
      </section>

      <div className="ticker" aria-label="Burry Couture services"><div>BRIDALS <i>✳</i> BESPOKE <i>✳</i> ASO EBI <i>✳</i> PROM DRESSES <i>✳</i> CUSTOM MADE <i>✳</i> BRIDALS <i>✳</i> BESPOKE <i>✳</i> ASO EBI <i>✳</i></div></div>

      <section id="collections" className="collection section-pad">
        <div className="section-heading"><div><p className="eyebrow">DRESSED FOR YOUR CHAPTER</p><h2>Made for the <em>moments</em><br/>that matter.</h2></div><p className="section-intro">A look is more than what you wear. It’s the feeling you carry into the room, and the memory you keep long after.</p></div>
        <div className="collection-grid">
          <article className="collection-card bridal-card"><button className="photo-button" onClick={() => setActivePhoto(photos[1])} aria-label="View bridal collection photo"><img src={photos[1]} alt="Burry Couture bridal dress detail"/><span className="view-icon"><ArrowRight/></span></button><div className="card-meta"><div><span className="card-index">01 / THE BRIDE</span><h3>Bridal &<br/><em>traditional</em></h3></div><a href={booking} target="_blank" rel="noreferrer" className="circle-arrow" aria-label="Book a bridal consultation"><ArrowRight/></a></div></article>
          <article className="collection-card"><button className="photo-button" onClick={() => setActivePhoto(photos[2])} aria-label="View occasion wear photo"><img src={photos[2]} alt="Burry Couture custom occasion wear"/><span className="view-icon"><ArrowRight/></span></button><div className="card-meta"><div><span className="card-index">02 / YOUR PEOPLE</span><h3>Aso ebi &<br/><em>celebrations</em></h3></div><a href={whatsapp} target="_blank" rel="noreferrer" className="circle-arrow" aria-label="Ask about aso ebi"><ArrowRight/></a></div></article>
          <article className="collection-card"><button className="photo-button" onClick={() => setActivePhoto(photos[3])} aria-label="View bespoke couture photo"><img src={photos[3]} alt="Burry Couture bespoke couture"/><span className="view-icon"><ArrowRight/></span></button><div className="card-meta"><div><span className="card-index">03 / YOUR OWN WAY</span><h3>Bespoke &<br/><em>custom made</em></h3></div><a href={booking} target="_blank" rel="noreferrer" className="circle-arrow" aria-label="Book bespoke consultation"><ArrowRight/></a></div></article>
        </div>
      </section>

      <section id="story" className="story">
        <div className="story-photo"><img src={photos[2]} alt="A richly detailed Burry Couture traditional bridal look"/><div className="photo-label">A LITTLE OF YOUR STORY, IN EVERY STITCH</div></div>
        <div className="story-copy"><p className="eyebrow">THE BURRY COUTURE WAY</p><h2>Heritage,<br/>with a little <em>you.</em></h2><p>Some outfits are chosen. The ones you remember are made with you in mind. From the first sketch to the final fitting, we listen closely, work with care, and bring your vision to life.</p><p>Rooted in Lagos and inspired by the beauty of Nigerian celebration, every piece is made to feel personal, considered, and unmistakably yours.</p><a className="text-link dark-link" href={ig} target="_blank" rel="noreferrer">Meet us on Instagram <Camera size={16}/></a><div className="signature">Burry <span>✳</span></div></div>
      </section>

      <section id="process" className="process section-pad"><div className="section-heading"><div><p className="eyebrow">A GOOD FIT STARTS WITH A CONVERSATION</p><h2>From first idea<br/>to <em>your moment.</em></h2></div><p className="section-intro">We’ll make the whole process feel easy, thoughtful and just as special as the day itself.</p></div><div className="steps"><article><span>01</span><Sparkles/><h3>Tell us what you’re dreaming of</h3><p>Share your date, inspiration, and the feeling you want your outfit to hold.</p></article><article><span>02</span><Heart/><h3>Let’s shape it together</h3><p>We’ll talk through fabric, details, measurements, and the little things that make it yours.</p></article><article><span>03</span><MapPin/><h3>Come in for your fitting</h3><p>Visit our Yaba atelier as your piece takes shape, with thoughtful fittings along the way.</p></article></div></section>

      <section className="gallery"><div className="gallery-title"><div><p className="eyebrow">A GLIMPSE OF THE GOOD THINGS</p><h2>Seen on <em>Instagram.</em></h2></div><a className="text-link dark-link" href={ig} target="_blank" rel="noreferrer">Follow @burrycouture <Camera size={16}/></a></div><div className="gallery-grid">{photos.map((photo, i) => <button key={photo} onClick={() => setActivePhoto(photo)} aria-label={`Open Burry Couture look ${i+1}`}><img src={photo} alt={`Burry Couture look ${i+1}`} loading="lazy"/><span>✳</span></button>)}</div></section>

      <section id="contact" className="contact section-pad"><div className="contact-orbit">✳</div><p className="eyebrow">YOUR MOMENT IS COMING</p><h2>Let’s make something<br/><em>you’ll always remember.</em></h2><a href={booking} target="_blank" rel="noreferrer" className="button button-light">Book a consultation <ArrowRight size={17}/></a><p className="contact-note">Prefer a quick chat? <a href={whatsapp} target="_blank" rel="noreferrer">Talk to us on WhatsApp</a></p></section>
    </main>

    <footer className="footer"><div className="footer-top"><a href="#home" className="brand brand-footer"><span className="brand-mark">B</span><span>BURRY<small>COUTURE</small></span></a><p>Beautifully made for<br/>the way you want to feel.</p><div className="footer-links"><a href={ig} target="_blank" rel="noreferrer">Instagram <ArrowRight size={13}/></a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <ArrowRight size={13}/></a><a href="mailto:burrycouture@gmail.com">Email <ArrowRight size={13}/></a></div></div><div className="footer-bottom"><span>© 2026 Burry Couture · Yaba, Lagos, Nigeria</span><span>Worldwide shipping <i>✳</i></span></div></footer>

    {activePhoto && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo preview" onClick={() => setActivePhoto(null)}><button className="lightbox-close" onClick={() => setActivePhoto(null)} aria-label="Close photo"><X/></button><img src={activePhoto} alt="Burry Couture look preview" onClick={e => e.stopPropagation()}/><span className="lightbox-credit">Burry Couture · photo featured by BellaNaija Weddings</span></div>}
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
