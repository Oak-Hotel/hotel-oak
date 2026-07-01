import { Metadata } from 'next';
import { Waves, Flower2, Landmark, Sun, Car } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Explore Nainital | Hotel Oak Chhav',
  description: 'Discover the beauty of Nainital. From Naini Lake to the high mountain peaks, experience the timeless charm of Uttarakhand\'s famous hill station.',
};

export default function NainitalPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero hero-nainital">
        <div className="container hero-content">
          <span className="accent-text" style={{ fontSize: '3rem' }}>The Lake District</span>
          <h1 style={{ color: '#fff', fontSize: '4.5rem' }}>Discover Nainital</h1>
          <p>Experience the magic of the Kumaon Himalayas</p>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="section" style={{ backgroundColor: 'var(--cream-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
            <span className="subtitle">The Essence of Nainital</span>
            <h2>Key Highlights</h2>
            <p>Nainital, the city of lakes, is a crown jewel of the Himalayas. Discover what makes this hill station so incredibly special.</p>
          </div>

          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="feature-item" style={{ padding: '40px', background: '#fff', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--box-shadow)' }}>
              <div style={{ marginBottom: '15px' }}><Waves size={48} color="var(--oak-green)" /></div>
              <h3>The Lake</h3>
              <p style={{ color: '#666' }}>Naini Lake is the heart of the town, offering boating, yachting, and serene promenades.</p>
            </div>
            <div className="feature-item" style={{ padding: '40px', background: '#fff', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--box-shadow)' }}>
              <div style={{ marginBottom: '15px' }}><Flower2 size={48} color="var(--oak-green)" /></div>
              <h3>Mythology</h3>
              <p style={{ color: '#666' }}>A revered Hindu pilgrimage site, believed to be the spot where the left eye of the Goddess Sati fell.</p>
            </div>
            <div className="feature-item" style={{ padding: '40px', background: '#fff', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--box-shadow)' }}>
              <div style={{ marginBottom: '15px' }}><Landmark size={48} color="var(--oak-green)" /></div>
              <h3>Colonial History</h3>
              <p style={{ color: '#666' }}>Developed as a British retreat, the town features colonial-era bungalows and heritage schools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="section bg-light-green" style={{ margin: 0, borderRadius: 0 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="subtitle">Must Visit</span>
            <h2>Top Attractions</h2>
          </div>
          
          <div className="room-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="room-card" style={{ padding: '30px' }}>
              <h3>Naina Devi Temple</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>Located at the northern edge of the lake, drawing thousands of devotees.</p>
            </div>
            <div className="room-card" style={{ padding: '30px' }}>
              <h3>The Mall Road</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>Renamed Govind Ballabh Pant Marg, it’s the bustling hub for shopping, dining, and strolling.</p>
            </div>
            <div className="room-card" style={{ padding: '30px' }}>
              <h3>Snow View Point</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>Accessible via a cable car, offering panoramic views of the Himalayas.</p>
            </div>
            <div className="room-card" style={{ padding: '30px' }}>
              <h3>High Altitude Zoo</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>Pt. G.B. Pant Zoo houses endangered species like the snow leopard and Himalayan black bear.</p>
            </div>
            <div className="room-card" style={{ padding: '30px' }}>
              <h3>Eco Cave Garden</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>A popular network of interconnected rocky caves ideal for families and children.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Your Trip */}
      <section className="section">
        <div className="container grid-2">
          <div>
            <span className="subtitle">Logistics</span>
            <h2>Planning Your Trip</h2>
            <p>Make your journey to Nainital smooth and comfortable. Here is everything you need to know before you travel.</p>
            
            <div style={{ marginTop: '30px', background: '#fff', padding: '30px', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--box-shadow)' }}>
              <h3 style={{ color: 'var(--oak-green)', display: 'flex', alignItems: 'center', gap: '10px' }}><Sun size={24} /> Best Time to Visit</h3>
              <p style={{ color: '#555' }}>March to May for pleasant weather, or mid-September to December for clear mountain views.</p>
            </div>
            
            <div style={{ marginTop: '20px', background: '#fff', padding: '30px', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--box-shadow)' }}>
              <h3 style={{ color: 'var(--oak-green)', display: 'flex', alignItems: 'center', gap: '10px' }}><Car size={24} /> How to Reach</h3>
              <p style={{ color: '#555', marginBottom: 0 }}>The nearest major railhead and transit hubs are in <strong>Kathgodam</strong> (~35 km away). From there, it&apos;s about an hour&apos;s drive by taxi or bus. <strong>Pantnagar Airport</strong> is the closest domestic flight hub (~55 km away).</p>
            </div>
          </div>
          <div className="image-card">
            <Image src="/nainital.png" alt="Nainital Planning" width={800} height={600} style={{ height: '600px', width: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ backgroundColor: 'var(--earth-brown)', color: '#fff', margin: 0, padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="subtitle" style={{ color: 'var(--mist-sage)' }}>Stay With Us</span>
          <h2 style={{ color: '#fff' }}>Your Himalayan Escape Awaits</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 30px', color: 'rgba(255,255,255,0.8)' }}>
            Make Hotel Oak Chhav your base camp for exploring Nainital. After a day of sightseeing, return to the peaceful serenity of the oak forests.
          </p>
          <Link href="/#accommodations" className="btn btn-primary" style={{ backgroundColor: 'var(--mist-sage)', color: 'var(--earth-brown)' }}>
            View Our Rooms
          </Link>
        </div>
      </section>
    </>
  );
}
