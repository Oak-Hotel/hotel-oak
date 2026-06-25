"use client";

import { useState } from 'react';

export default function BookingWidget() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const increment = (setter: any, val: number) => setter(val + 1);
  const decrement = (setter: any, val: number, min: number) => { 
    if (val > min) setter(val - 1);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!phone) return alert("Please enter your phone number.");
    
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'booking', checkIn, checkOut, adults, children, phone })
      });
      if (res.ok) {
        setStatus('success');
        setPhone(''); setCheckIn(''); setCheckOut('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form className="booking-widget glass-panel" onSubmit={handleSubmit}>
      <div className="widget-input">
        <label>Check-in</label>
        <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} required />
      </div>
      
      <div className="widget-input">
        <label>Check-out</label>
        <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} required />
      </div>
      
      <div className="widget-input">
        <label>Adults (&gt; 11 yrs)</label>
        <div className="counter-input">
          <button type="button" onClick={() => decrement(setAdults, adults, 1)}>-</button>
          <input type="text" readOnly value={adults} />
          <button type="button" onClick={() => increment(setAdults, adults)}>+</button>
        </div>
      </div>

      <div className="widget-input">
        <label>Child (6 - 11 Yrs)</label>
        <div className="counter-input">
          <button type="button" onClick={() => decrement(setChildren, children, 0)}>-</button>
          <input type="text" readOnly value={children} />
          <button type="button" onClick={() => increment(setChildren, children)}>+</button>
        </div>
      </div>

      <div className="widget-input">
        <label>Phone Number</label>
        <input type="tel" placeholder="+91" value={phone} onChange={e => setPhone(e.target.value)} required style={{ width: '100%', height: '40px', borderBottom: '1px solid #ddd', borderRadius: 0 }} />
      </div>

      <div className="widget-input" style={{ justifyContent: 'flex-end', paddingBottom: '2px' }}>
        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px 20px', whiteSpace: 'nowrap' }}>
          {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Check Availability'}
        </button>
      </div>
    </form>
  );
}
