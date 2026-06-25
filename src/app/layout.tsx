import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Hotel Oak Chhav | Nature-Inspired Retreat in Nainital',
  description: 'A nature-inspired boutique retreat in the heart of Ayarpata, Nainital, offering thoughtfully designed accommodations where guests experience comfort, tranquility, and the timeless beauty of the Himalayan oak forests.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <footer className="complex-footer">
          <div className="complex-footer-bg"></div>
          <div className="container footer-grid" style={{ maxWidth: '1400px' }}>
            <div className="footer-col brand-col">
              <img src="/logo.jpeg" alt="Hotel Oak Chhav Logo" className="footer-logo-large" />
              <p>A nature-inspired boutique hotel nestled in the serene oak forests of Ayarpata, Nainital. Experience comfort, warmth and the timeless charm of the hills.</p>
              <div className="social-icons">
                <a href="#">f</a>
                <a href="#">ig</a>
                <a href="#">wa</a>
                <a href="#">ta</a>
              </div>
            </div>

            <div className="footer-col">
              <h3 className="footer-heading">QUICK LINKS</h3>
              <ul className="footer-list">
                <li><a href="/#home">Home</a></li>
                <li><a href="/#accommodations">Rooms & Accommodation</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/nainital">Explore Nainital</a></li>
                <li><a href="/#about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-heading">ROOMS</h3>
              <ul className="footer-list">
                <li><a href="/#accommodations">Double Bedded Rooms</a></li>
                <li><a href="/#accommodations">Four Bedded Family Room</a></li>
                <li><a href="/#accommodations">Triple Bedded Room</a></li>
                <li><a href="/#accommodations">Oak House (Attique Style)</a></li>
                <li><a href="/#amenities">Amenities & Facilities</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-heading">EXPLORE NAINITAL</h3>
              <ul className="footer-list dist-list">
                <li><span>Naini Lake</span> <span>8.5 km</span></li>
                <li><span>Mall Road</span> <span>7.5 km</span></li>
                <li><span>Snow View Point</span> <span>9.0 km</span></li>
                <li><span>Tiffin Top</span> <span>9.5 km</span></li>
                <li><span>Naina Devi Temple</span> <span>8.0 km</span></li>
                <li><span>Eco Cave Garden</span> <span>10.0 km</span></li>
                <li><span>Bhimtal</span> <span>21 km</span></li>
                <li><span>Sattal</span> <span>24 km</span></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-heading">CONTACT US</h3>
              <ul className="footer-list contact-list">
                <li>📞 +91 7417080111</li>
                <li>💬 +91 7417080111</li>
                <li>✉️ oak.chavv@gmail.com</li>
                <li style={{lineHeight: 1.4}}>📍 Ayarpata, Near Sherwood School,<br/>Mallital, Nainital - 263001</li>
              </ul>
              <a href="https://wa.me/917417080111" className="btn-whatsapp">💬 Chat on WhatsApp</a>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div className="container flex-between" style={{ maxWidth: '1400px' }}>
              <div>🌿 &copy; {new Date().getFullYear()} Hotel Oak Chhav. All Rights Reserved.</div>
              <div className="accent-text" style={{fontSize: '1.8rem', color: '#E2C792'}}>🌿 Where Nature Welcomes You 🌿</div>
              <div>Developed by <span style={{color: '#E2C792'}}>Preet Tech</span></div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
