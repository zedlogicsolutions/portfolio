import { useState, useEffect } from 'react'
import './App.css'

// image
import karthi from '../Components/karthiraj.png'
import pandi from '../Components/pandi.png'
import venkad from '../Components/myimage.png'
// logo
 import logo from '../Components/logo2.png'

// services

import { FcPhoneAndroid } from "react-icons/fc";
import { TbWorldWww } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiShopify } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";



// whyChooseReasons
import { RiTeamFill } from "react-icons/ri";
import { MdTimer } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

// Navigation
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

// Typewriter
import { Typewriter } from 'react-simple-typewriter';

// Contact Section
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// footer
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

// WhatsApp
import { SiWhatsapp } from "react-icons/si";

function Main() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'team', 'why-choose', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      icon: <TbWorldWww className='icon' />,
      features: ['React', 'Django Backend', 'Database Design', 'API Integration']
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns to grow your online presence',
      icon: <FcPhoneAndroid className='icon' />,
      features: ['Social Media Marketing', 'PPC Campaigns', 'Content Strategy', 'Analytics']
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and organic traffic',
      icon: <FaSearch className='icon'/>,
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Link Building']
    },
    {
      title: 'WordPress Development',
      description: 'Custom WordPress themes and plugins for your business needs',
      icon: <FaWordpress className='icon' />,
      features: ['Custom Themes', 'Plugin Development', 'E-commerce', 'Maintenance']
    },
    {
      title: 'Shopify Development',
      description: 'Professional e-commerce stores with Shopify platform',
      icon: <SiShopify className='icon' />,
      features: ['Store Setup', 'Custom Themes', 'App Integration', 'Payment Gateway']
    },
    {
      title:'Graphic Design',
      description: 'Creative graphic design services for branding and marketing',
      icon: <MdDesignServices className='icon' />,
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Social Media Graphics']
    },
    {
      title:'ui/ux Design',
      description: 'User-centered design solutions for web and mobile applications',
      icon:<MdDesignServices className='icon' />,
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    }
  ]
  const teamMembers = [
    {
      name: 'Thanga Pandi',
      role: ['UI/UX Designer','&Webdesigner'],
      image: pandi,
      skills: ['Figma', 'Adobe XD', 'Prototyping','Wireframing','React Js','Django']
    },
    {
      name: 'KarthiRaj',
      role: ['Video Editor','&content Creator','&Graphic Designer'],
      image: karthi,
      skills: [ 'Content Strategy', 'Video Editing']
    },
    {
      name: 'VenkadeshPandian',
      role: ['Digital Marketing Manager','&SEO Specialist'],
      image: venkad,
      skills: ['Social Media', 'PPC', 'Email Marketing','Google Analytics', 'On-page SEO', 'Off-page SEO']
    }
  ]

  const whyChooseReasons = [
    {
      title: 'Expert Team',
      description: 'Our skilled professionals bring years of experience to every project',
      icon: <RiTeamFill className='icon'/>
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support to keep your business running',
      icon: <MdTimer className='icon' />
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients',
      icon: <IoMdTrendingUp className='icon'/>
    },
    {
      title: 'Cost Effective',
      description: 'Quality solutions at competitive prices with transparent pricing',
      icon: <RiMoneyRupeeCircleFill className='icon' />
    }
  ]
  const openWhatsApp = () => {
    const phone = '+7639679496'; // Replace with your actual WhatsApp number
    const message = 'Hello! I am interested in your IT services and would like to discuss my project requirements.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt="TechVision Logo" className="logo" />
          </div>
          
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'services', 'team', 'why-choose', 'contact'].map((item) => (
              <li key={item} className="nav-item">
                <button
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                  onClick={() => scrollToSection(item)}
                >
                  {item.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-controls">
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? <MdWbSunny className='icon2'/> : <FaMoon />}
            </button>
            <button 
              className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
    
              <span className="gradient-text"> <Typewriter
        words={['WELCOME TO ZED LOGIC SOLUTION', ' Innovation Strategies, Measurable results']}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      /></span>
            </h1>
            <p className="hero-description">
              We transform your ideas into powerful digital experiences with cutting-edge technology 
              and innovative design solutions.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('services')}>
                Our Services
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>ABOUT ZEDLOGICSOLUTION</h2>
            <p>Leading the way in digital innovation</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Transforming Businesses Through Technology</h3>
              <p>
                Founded with a vision to revolutionize the digital landscape, Zedlogicsolutions is a premier 
                IT solutions company that specializes in creating exceptional digital experiences. 
                Our team of passionate developers, designers, and digital strategists work together 
                to deliver innovative solutions that drive business growth.
              </p>
              <p>
                We believe in the power of technology to transform businesses and create meaningful 
                connections between brands and their audiences. Our comprehensive approach combines 
                technical expertise with creative vision to deliver results that exceed expectations.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <h4>3+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <h4>3+</h4>
                <p>Happy Clients</p>
              </div>
              <div className="stat-card">
                <h4>6+Months</h4>
                <p>Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive digital solutions for your business</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <div className="section-header">
            <h2>Our Team</h2>
            <p>Meet the experts behind our success</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <div className="member-skills">
                      {member.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="why-choose">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <p>What makes us stand out from the competition</p>
          </div>
          <div className="reasons-grid">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="reason-card">
                <div className="reason-icon">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get in Touch</h2>
            <p>Ready to start your next project? Let's talk!</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <span className="contact-icon"><IoLocationSharp className='icon'/></span>
                <div>
                  <h4>Address</h4>
                  <p>Virudhunager,TamilNadu</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon"><FaPhoneAlt  className='icon'/></span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 7639679496</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon"><MdEmail className='icon'/></span>
                <div>
                  <h4>Email</h4>
                  <p>zedlogicsoluions@gmail.com</p>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>ZEDLOGICSOLUTION</h3>
              <p>Innovation Strategies, Measurable results</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button onClick={() => scrollToSection('about')}>About</button></li>
                <li><button onClick={() => scrollToSection('services')}>Services</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </div>
             <div className="footer-section">
              <h4>Services</h4>
              <p>Web Development</p>
              <p>Digital Marketing</p>
              <p>SEO Services</p>
              <p>WordPress Development</p>
              <p>Shopify Development</p>
              <p>Graphic Design</p>
              <p>UI/UX Design</p>
    
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://linkedin.com/company/zedlogicsolution" aria-label="LinkedIn" target="_blank" ><CiLinkedin className='icon3'/></a>
                <a href="#" aria-label="Twitter"><FaXTwitter className='icon5'/></a>
                <a href="https://www.instagram.com/zedlogic_solutions/" aria-label="insta" target="_blank"><FaInstagram className='icon4' /></a>
                <a href="https://www.facebook.com/profile.php?id=61576294603482" aria-label="FaceBook" target="_blank"><FaFacebookSquare  className='icon3' /></a>
               
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Zedlogicsolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    
    
        {/* WhatsApp Floating Button */}
          
       <button className="whatsapp-float" onClick={openWhatsApp} aria-label="Contact us on WhatsApp">
        <span className="whatsapp-icon"><SiWhatsapp className='icon6'/></span>
      </button>
   </div>
  );
}

export default Main;