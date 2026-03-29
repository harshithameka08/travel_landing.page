import React, { useState } from 'react';
import { 
  Star,
  ChevronDown,
  ArrowRight,
  Globe,
  Calendar,
  Linkedin,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';

// Assets
import logoImg from './assets/home.logo.png';
import flightsIcon from './assets/flights.png';
import hotelsIcon from './assets/hotels.png';
import transportIcon from './assets/transport.png';
import activitiesIcon from './assets/activities.png';
import heroBg from './assets/background.design.png';
import dest1 from './assets/Rectangle 54210.png';
import dest2 from './assets/Rectangle 54210 (1).png';
import dest3 from './assets/Rectangle 54210 (2).png';
import dest4 from './assets/Rectangle 54210 (3).png';
import dest5 from './assets/Rectangle 54210 (4).png';
import dest6 from './assets/Rectangle 54210 (5).png';
import cityscapeImg from './assets/cityscape.png';
import quoteBg from './assets/design.background.png';
import phoneImg from './assets/phone.image.png';
import tourImg from './assets/tour.image.png';
import googlePlayImg from './assets/googleplay.png';
import appStoreImg from './assets/appstore.png';
import bgDesign from './assets/bg.design.png';

const App = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const destinations = [
    { title: 'Paris, France',     img: dest1, price: '$899', rating: 4.8, reviews: '2,341' },
    { title: 'Tokyo, Japan',      img: dest2, price: '$899', rating: 4.8, reviews: '2,341' },
    { title: 'Bali, Indonesia',   img: dest3, price: '$899', rating: 4.8, reviews: '2,341' },
    { title: 'Santorini, Greece', img: dest4, price: '$899', rating: 4.8, reviews: '2,341' },
    { title: 'Maldives',          img: dest5, price: '$899', rating: 4.8, reviews: '2,341' },
    { title: 'Dubai, UAE',        img: dest6, price: '$899', rating: 4.8, reviews: '2,341' },
  ];

  const features = [
    { icon: flightsIcon, title: 'Flights', desc: 'Real-time flight tracking and best price guarantees' },
    { icon: hotelsIcon, title: 'Hotels', desc: 'Verified accommodations with instant booking' },
    { icon: transportIcon, title: 'Transport', desc: 'Local transport and car rentals made easy' },
    { icon: activitiesIcon, title: 'Activities', desc: 'Curated experiences and local adventures' },
  ];

  const stories = [
    { 
      title: '7 Nights In Iceland – What I Learned', 
      desc: 'Northern lights, hot springs, and life-changing moments under the Arctic sky...', 
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      img: dest4
    },
    { 
      title: 'Top 5 Starry Night Destinations', 
      desc: 'Where to find the clearest skies and most breathtaking celestial views...', 
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      img: dest3
    },
    { 
      title: 'Night Photography Travel Guide', 
      desc: 'Capture the magic of nighttime destinations with these pro and tips...', 
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      img: dest2
    },
    { 
      title: 'Best City Lights Around The World', 
      desc: 'From Tokyo’s neon glow to Paris’s romantic illumination and locations...', 
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      img: dest1
    }
  ];

  const faqs = [
    { q: 'How do I book a trip with WanderScape?', a: 'You can book a trip by selecting your destination, choosing your dates, and following our secure checkout process. Our platform handles everything from flights to accommodation in one seamless flow.' },
    { q: 'Can I cancel or modify my booking?', a: 'Yes, most bookings can be canceled or modified up to 48 hours before the trip. Specific cancellation policies depend on the travel package and providers involved.' },
    { q: 'Do you offer travel insurance?', a: 'Absolutely! We offer comprehensive travel insurance plans that cover medical emergencies, trip cancellations, and lost luggage for all our travelers.' },
    { q: 'Is customer support available 24/7?', a: 'Yes, our global support team is available around the clock to assist you with any questions or emergencies during your journey.' }
  ];

  return (
    <div className="app">
      {/* Header */}
      <nav className="header glass container">
        <div className="logo">
          <img src={logoImg} alt="Wanderscape" />
        </div>
        <ul className="nav-links">
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#experiences">Experiences</a></li>
          <li><a href="#deals">Deals</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="btn-primary">BOOK NOW</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        {/* Background image layer */}
        <div className="hero-bg">
          <img src={heroBg} alt="" aria-hidden="true" />
        </div>
        <div className="container hero-content">
          <motion.h1 
            className="hero-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover The World Beyond <br /> <span className="gradient-text serif-daylight">Daylight</span>
          </motion.h1>
          
          <motion.div 
            className="booking-card glass"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3>Plan Your Perfect Trip</h3>
            <div className="booking-fields-container">
              <div className="booking-field">
                <label>Destination</label>
                <div className="input-group">
                  <span>Where to ?</span>
                  <ChevronDown size={14} />
                </div>
              </div>
              <div className="booking-field">
                <label>Check-In-Date</label>
                <div className="input-group">
                  <span>dd-mm-yy</span>
                  <Calendar size={18} />
                </div>
              </div>
              <div className="booking-field">
                <label>Guests</label>
                <div className="input-group">
                  <span>How many ?</span>
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>
            <button className="btn-primary search-btn">SEARCH TRIPS</button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="plan" className="features container">
        <h2 className="section-title">One Place To Plan It All</h2>
        <p className="section-desc">Experience seamless travel planning with flights, stays, and<br/>local experiences all in one beautiful platform.</p>
        <div className="features-grid">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="feature-card"
              whileHover={{ y: -4, borderColor: 'rgba(90,120,220,0.6)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="feat-icon">
                <img src={f.icon} alt={f.title} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="destinations container">
        <h2 className="section-title">Destinations That Glow In The Dark</h2>
        <p className="section-desc">Discover the most popular destinations chosen by our<br/>community of travelers</p>
        <div className="destinations-grid">
          {destinations.map((d, i) => (
            <motion.div
              key={i}
              className="dest-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <img src={d.img} alt={d.title} className="dest-bg-img" />
              <div className="dest-overlay">
                <h3>{d.title}</h3>
                <p className="dest-price">{d.price}</p>
                <div className="dest-rating">
                  <Star size={14} fill="#f5a623" color="#f5a623" />
                  <span>{d.rating} ({d.reviews} Reviews)</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-bg">
          <img src={quoteBg} alt="" aria-hidden="true" />
        </div>
        <div className="container quote-content">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            "Every Destination Tells A Story — Every Night Reveals A Memory."
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Join millions of travelers who have discovered that the journey is just as beautiful as the destination. Every trip tells a story, and yours is waiting to be written in the stars.
          </motion.p>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="mobile-section">
        <div className="container mobile-container">
          <div className="mobile-content">
            <motion.div 
              className="mobile-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="serif-font">Travel On The Go</h2>
              <p>WanderScape app gives you full control of your journey. <br/>Book, explore, and discover from anywhere in the world.</p>
              
              <div className="app-badges">
                <a href="#" className="badge-link">
                  <img src={googlePlayImg} alt="Google Play" className="store-badge" />
                </a>
                <a href="#" className="badge-link">
                  <img src={appStoreImg} alt="App Store" className="store-badge" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="tour-visual"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img src={tourImg} alt="World Landmarks" className="tour-img" />
            </motion.div>
          </div>
          
          <motion.div 
            className="mobile-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={phoneImg} alt="Mobile App Mockup" className="phone-main-img" />
          </motion.div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="blog" className="stories container">
        <h2 className="section-title serif-font">Travel Stories That Inspire</h2>
        <p className="section-desc">Discover amazing travel experiences and tips from our <br/> community of explorers</p>
        <div className="stories-grid">
          {stories.map((s, i) => (
            <motion.div 
              key={i} 
              className="story-card-modern"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ borderColor: 'rgba(90, 120, 220, 0.5)', y: -5 }}
            >
              <div className="story-img-wrapper">
                <img src={s.img} alt={s.title} />
              </div>
              <div className="story-content-modern">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="story-footer-modern">
                  <span>{s.date}</span>
                  <span>{s.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq container">
        <h2 className="section-title serif-font">Frequently Asked Questions</h2>
        <p className="section-desc">Everything you need to know about WanderScape</p>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div 
              key={i} 
              className={`faq-item-modern ${activeFaq === i ? 'active' : ''}`} 
              onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
            >
              <div className="faq-question-modern">
                <span>{f.q}</span>
                <span className="faq-toggle-icon">{activeFaq === i ? '−' : '+'}</span>
              </div>
              <motion.div 
                className="faq-answer-modern"
                initial={false}
                animate={{ height: activeFaq === i ? 'auto' : 0, opacity: activeFaq === i ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="faq-answer-content">{f.a}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-overlay-gradient"></div>
          <div className="cta-skyline">
            <img src={bgDesign} alt="" aria-hidden="true" />
          </div>
          <div className="container cta-content-modern">
            <h2 className="serif-font">Be The First To Catch Travel <br/> Deals That Glow</h2>
            <p className="cta-subtext">Join our exclusive community and discover destinations that shine brighter <br/> than the rest. Get early access to night-time adventures and luminous <br/> experiences.</p>
            <div className="subscribe-capsule">
              <input type="email" placeholder="Enter your email to join to glow" />
              <button className="btn-join">Join Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer container">
        <div className="footer-grid-modern">
          <div className="footer-brand-modern">
            <div className="logo">
              <img src={logoImg} alt="Wanderscape" />
            </div>
            <p className="footer-desc">
              Your gateway to extraordinary travel experiences that glow in the dark. <br/><br/>
              We believe every journey should illuminate your soul and create memories that shine forever.
            </p>
          </div>
          <div className="footer-nav-column">
            <h4 className="footer-heading-modern">QUICK NAVIGATION</h4>
            <ul className="footer-links-modern">
              <li className="active-footer-link"><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#platform">Platform</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ul>
          </div>
          <div className="footer-contact-column">
            <h4 className="footer-heading-modern">QUICK CONTACT</h4>
            <div className="social-icons-modern">
              <div className="icon-circle"><Linkedin size={20} color="#000000" fill="#000000" strokeWidth={0} /></div>
              <div className="icon-circle"><Facebook size={20} color="#000000" fill="#000000" strokeWidth={0} /></div>
              <div className="icon-circle"><Instagram size={20} color="#000000" /></div>
              <div className="icon-circle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" fill="#000"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-modern">
          <div className="bottom-line"></div>
          <p>© 2025 WanderScape. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
