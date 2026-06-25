"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'contact', name, email, phone, message })
      });
      if (res.ok) {
        setStatus('success');
        setName(''); setEmail(''); setPhone(''); setMessage('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ height: '50vh', minHeight: '400px', backgroundImage: 'linear-gradient(rgba(20, 40, 15, 0.6), rgba(45, 39, 29, 0.8)), url("/room1.png")' }}>
        <div className="container hero-content text-center">
          <span className="accent-text" style={{ fontSize: '3rem' }}>Get in Touch</span>
          <h1 style={{ color: '#fff', fontSize: '4.5rem' }}>Contact Us</h1>
          <p>We would love to hear from you</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ backgroundColor: 'var(--cream-white)' }}>
        <div className="container wide-container grid-2" style={{ gap: '60px' }}>
          
          {/* Contact Details Grid */}
          <div>
            <span className="subtitle">Reach Out</span>
            <h2>We Are Here For You</h2>
            <p>Whether you're planning a weekend getaway or a long nature retreat, our team is ready to assist you with your booking and ensure a memorable stay.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', marginTop: '40px' }}>
              
              <div style={{ background: '#fff', padding: '30px', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--box-shadow)', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--oak-green)' }}>📍</div>
                <div>
                  <h3 style={{ marginBottom: '5px' }}>Visit Us</h3>
                  <p style={{ margin: 0, color: '#666' }}>Ayarpata, Near Sherwood School,<br/>Mallital, Nainital - 263001</p>
                </div>
              </div>

              <div style={{ background: '#fff', padding: '30px', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--box-shadow)', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--oak-green)' }}>📞</div>
                <div>
                  <h3 style={{ marginBottom: '5px' }}>Call Us</h3>
                  <p style={{ margin: 0, color: '#666' }}>+91 7417080111</p>
                </div>
              </div>

              <div style={{ background: '#fff', padding: '30px', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--box-shadow)', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--oak-green)' }}>✉️</div>
                <div>
                  <h3 style={{ marginBottom: '5px' }}>Email Us</h3>
                  <p style={{ margin: 0, color: '#666' }}>oak.chavv@gmail.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: '#fff', padding: '50px', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--box-shadow)' }}>
            <h3 style={{ marginBottom: '30px', fontSize: '2rem' }}>Send a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontWeight: 600, color: 'var(--earth-brown)' }}>Full Name</label>
                <input type="text" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} required style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', fontFamily: 'inherit', fontSize: '1rem', outline: 'none' }} />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontWeight: 600, color: 'var(--earth-brown)' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" value={email} onChange={e => setEmail(e.target.value)} required style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', fontFamily: 'inherit', fontSize: '1rem', outline: 'none' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontWeight: 600, color: 'var(--earth-brown)' }}>Phone Number</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" value={phone} onChange={e => setPhone(e.target.value)} required style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', fontFamily: 'inherit', fontSize: '1rem', outline: 'none' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontWeight: 600, color: 'var(--earth-brown)' }}>Your Message</label>
                <textarea rows={5} placeholder="How can we help you?" value={message} onChange={e => setMessage(e.target.value)} required style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', fontFamily: 'inherit', fontSize: '1rem', resize: 'none', outline: 'none' }}></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: '10px', padding: '18px' }}>
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
              {status === 'success' && <p style={{ color: 'green', marginTop: '10px' }}>Thank you! We will get back to you shortly.</p>}
              {status === 'error' && <p style={{ color: 'red', marginTop: '10px' }}>There was an error sending your message. Please try again.</p>}
            </form>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="bg-light-green" style={{ margin: 0, padding: 0, borderRadius: '60px 60px 0 0', overflow: 'hidden', height: '500px' }}>
        <iframe 
          src="https://maps.google.com/maps?q=Ayarpata,%20Near%20Sherwood%20School,%20Nainital&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
