import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
              <Image src="/logo.jpeg" alt="Hotel Oak Chhav Logo" className="footer-logo-large" width={150} height={150} />
              <p>A nature-inspired boutique hotel nestled in the serene oak forests of Ayarpata, Nainital. Experience comfort, warmth and the timeless charm of the hills.</p>
              <div className="social-icons">
                <a href="#" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" aria-label="X (Twitter)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                </a>
                <a href="#" aria-label="Threads">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h3 className="footer-heading">QUICK LINKS</h3>
              <ul className="footer-list">
                <li><Link href="/#home">Home</Link></li>
                <li><Link href="/#accommodations">Rooms & Accommodation</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/nainital">Explore Nainital</Link></li>
                <li><Link href="/#about">About Us</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-heading">ROOMS</h3>
              <ul className="footer-list">
                <li><Link href="/#accommodations">Double Bedded Rooms</Link></li>
                <li><Link href="/#accommodations">Four Bedded Family Room</Link></li>
                <li><Link href="/#accommodations">Triple Bedded Room</Link></li>
                <li><Link href="/#accommodations">Oak House (Attique Style)</Link></li>
                <li><Link href="/#amenities">Amenities & Facilities</Link></li>
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
              <div>Developed by <a href="https://preettech.com" target="_blank" rel="noopener noreferrer"><span style={{color: '#E2C792'}}>Preet Tech</span></a></div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
