import BookingWidget from '../components/BookingWidget';
import { TreePine, Coffee, Leaf, Wifi, Bell, BedDouble, Utensils, ShowerHead, Map } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* 1. Hero Banner */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <span className="accent-text">Where Nature Welcomes You</span>
          <h1 style={{ color: '#fff' }}>Stay Amidst the Oaks</h1>
          <p>Experience Nainital Naturally. A nature-inspired boutique retreat in the heart of Ayarpata, offering thoughtfully designed accommodations where guests experience comfort, tranquility, and the timeless beauty of the Himalayan oak forests.</p>
        </div>
      </section>

      {/* 2. Quick Booking Widget */}
      <div className="booking-widget-container">
        <div className="container">
          <BookingWidget />
        </div>
      </div>

      {/* 3. About Hotel */}
      <section className="section" id="about" style={{ paddingTop: '10rem' }}>
        <div className="container grid-2">
          <div className="image-card">
            <div className="floating-badge">🌿 100% Nature Inspired</div>
            <Image src="/hotel-image2.jpeg" alt="Hotel Oak Chhav Interior" width={800} height={800} style={{ aspectRatio: '1/1', objectFit: 'cover', width: '100%', height: 'auto' }} />
          </div>
          <div>
            <span className="subtitle">Welcome to Hotel Oak Chhav</span>
            <h2>Luxury Rooted in Nature</h2>
            <p>Nestled amidst the serene oak forests of Ayarpata, Hotel Oak Chhav offers a peaceful mountain retreat with thoughtfully designed accommodations for families, couples, and groups seeking comfort in nature.</p>
            <p>Our brand values reflect our commitment: Nature & Sustainability, Warm Kumaoni Hospitality, Peaceful Experiences, Local Heritage, and Premium Comfort.</p>
            <a href="/contact" className="btn btn-secondary" style={{ marginTop: '16px' }}>Contact Us</a>
          </div>
        </div>
      </section>

      {/* 4. Room Categories */}
      <section id="accommodations" className="bg-light-green">
        <div className="container wide-container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <span className="subtitle">18 Premium Rooms</span>
            <h2>Comfort Among the Hills</h2>
            <p>We offer specialized accommodations spread across three floors, featuring Family-friendly access, Scenic view rooms, and Premium hill-view suites.</p>
          </div>
          
          <div className="room-grid">
            <div className="room-card">
              <Image src="/four-bed-room.jpeg" alt="Four-Bedded Family Room" width={800} height={600} className="room-card-img" />
              <h3>Four-Bedded Family Room</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '0' }}>1 Room available. Features 2 Double Beds within a single spacious room, ideal for families.</p>
              <ul className="room-features">
                <li>✦ 2 Double Beds</li>
                <li>✦ Ground floor accessibility</li>
              </ul>
              <a href="https://wa.me/917417080111?text=Hello!%20I'm%20interested%20in%20booking%20the%20Four-Bedded%20Family%20Room." target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', borderColor: 'var(--light-green)' }}>Book Now</a>
            </div>

            <div className="room-card">
              <Image src="/room1.png" alt="Triple Bedded Room" width={800} height={600} className="room-card-img" />
              <h3>Triple Bedded Room</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '0' }}>1 Room available. Features 3 separate beds, perfectly suited for small groups or friends.</p>
              <ul className="room-features">
                <li>✦ 3 Separate Beds</li>
                <li>✦ Modern amenities</li>
              </ul>
              <a href="https://wa.me/917417080111?text=Hello!%20I'm%20interested%20in%20booking%20the%20Triple%20Bedded%20Room." target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', borderColor: 'var(--light-green)' }}>Book Now</a>
            </div>

            <div className="room-card">
              <Image src="/room5.jpeg" alt="Oak House – Attique Style" width={800} height={600} className="room-card-img" />
              <h3>Oak House (Attique Style)</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '0' }}>1 Room available. Exclusive attic-style accommodation with distinctive architecture.</p>
              <ul className="room-features">
                <li>✦ Premium private stay</li>
                <li>✦ Forest view</li>
              </ul>
              <a href="https://wa.me/917417080111?text=Hello!%20I'm%20interested%20in%20booking%20the%20Oak%20House%20(Attique%20Style)." target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>Book Now</a>
            </div>

            <div className="room-card">
              <Image src="/room 3.jpeg" alt="Standard Double Room" width={800} height={600} className="room-card-img" />
              <h3>Double Bedded Rooms</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '0' }}>Comfortable accommodations for couples and individual travelers designed with elegance.</p>
              <ul className="room-features">
                <li>✦ 1 Double Bed</li>
                <li>✦ Scenic and hill views</li>
              </ul>
              <a href="https://wa.me/917417080111?text=Hello!%20I'm%20interested%20in%20booking%20the%20Double%20Bedded%20Room." target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', borderColor: 'var(--light-green)' }}>Book Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="section">
        <div className="container text-center">
          <span className="subtitle">The Oak Chhav Difference</span>
          <h2>Why Choose Us</h2>
          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '50px' }}>
            <div className="feature-item" style={{ padding: '30px', background: '#fff', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--box-shadow)' }}>
              <div style={{ marginBottom: '15px' }}><TreePine size={48} color="var(--oak-green)" /></div>
              <h3>Nature-Inspired</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>Nestled deeply within the pristine oak forests of Ayarpata.</p>
            </div>
            <div className="feature-item" style={{ padding: '30px', background: '#fff', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--box-shadow)' }}>
              <div style={{ marginBottom: '15px' }}><Coffee size={48} color="var(--oak-green)" /></div>
              <h3>Warm Hospitality</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>Experience the authentic, timeless charm of Kumaoni hospitality.</p>
            </div>
            <div className="feature-item" style={{ padding: '30px', background: '#fff', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--box-shadow)' }}>
              <div style={{ marginBottom: '15px' }}><Leaf size={48} color="var(--oak-green)" /></div>
              <h3>Peaceful Atmosphere</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>A tranquil sanctuary far away from the hustle and bustle of city noise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Amenities */}
      <section className="section" id="amenities" style={{ backgroundColor: 'var(--mist-sage)', padding: '8rem 0' }}>
        <div className="container wide-container grid-2" style={{ alignItems: 'center' }}>
          <div className="text-padding-right">
            <span className="subtitle" style={{ color: 'var(--earth-brown)' }}>Premium Facilities</span>
            <h2>Modern Amenities</h2>
            <p style={{ color: '#444', marginBottom: '40px', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Experience a perfect blend of nature&apos;s tranquility and modern luxury. Our carefully curated facilities are designed to provide you with ultimate comfort during your Himalayan escape.
            </p>
            
            <div className="amenities-grid">
              <div style={{ background: '#fff', padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }} className="amenity-card">
                <div style={{ background: 'var(--light-green)', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><Wifi size={24} color="var(--oak-green)" /></div>
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--earth-brown)' }}>High-Speed Wi-Fi</h4>
              </div>

              <div style={{ background: '#fff', padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }} className="amenity-card">
                <div style={{ background: 'var(--light-green)', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><Bell size={24} color="var(--oak-green)" /></div>
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--earth-brown)' }}>24/7 Room Service</h4>
              </div>

              <div style={{ background: '#fff', padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }} className="amenity-card">
                <div style={{ background: 'var(--light-green)', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><BedDouble size={24} color="var(--oak-green)" /></div>
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--earth-brown)' }}>Premium Bedding</h4>
              </div>

              <div style={{ background: '#fff', padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }} className="amenity-card">
                <div style={{ background: 'var(--light-green)', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><Utensils size={24} color="var(--oak-green)" /></div>
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--earth-brown)' }}>In-room Dining</h4>
              </div>

              <div style={{ background: '#fff', padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }} className="amenity-card">
                <div style={{ background: 'var(--light-green)', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><ShowerHead size={24} color="var(--oak-green)" /></div>
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--earth-brown)' }}>Hot & Cold Water</h4>
              </div>

              <div style={{ background: '#fff', padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }} className="amenity-card">
                <div style={{ background: 'var(--light-green)', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><Map size={24} color="var(--oak-green)" /></div>
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--earth-brown)' }}>Travel Desk</h4>
              </div>
            </div>
          </div>
          
          <div className="image-card" style={{ height: '600px' }}>
            <Image src="/room3.png" alt="Amenities Overview" width={800} height={1000} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 7. Gallery Preview */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="subtitle">Visual Tour</span>
            <h2>Gallery Preview</h2>
          </div>
          <div className="gallery-preview-grid">
            <Image src="/gallery1.jpeg" alt="Gallery" width={600} height={400} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: 'var(--border-radius-md)' }} />
            <Image src="/gallery2.jpeg" alt="Gallery" width={600} height={400} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: 'var(--border-radius-md)' }} />
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="/gallery" className="btn btn-secondary">See Full Gallery</a>
          </div>
        </div>
      </section>

      {/* 8. Explore Nainital */}
      <section className="section bg-light-green" id="nainital" style={{ margin: 0, borderRadius: 0 }}>
        <div className="container grid-2">
          <div className="image-card">
            <div className="floating-badge">⛵ The Lake District</div>
            <Image src="/nainital.png" alt="Naini Lake, Nainital" width={800} height={600} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="text-padding">
            <span className="subtitle">Explore the Charm</span>
            <h2>Experience Nainital</h2>
            <p>Step outside our serene oak forests and discover the timeless charm of Nainital. From the glistening waters of Naini Lake to the panoramic views from Snow View Point, the region offers a blend of natural beauty and rich cultural heritage.</p>
            <a href="/nainital" className="btn btn-secondary" style={{ marginTop: '16px' }}>Discover More</a>
          </div>
        </div>
      </section>

      {/* 9. Reviews */}
      <section className="section">
        <div className="container text-center">
          <span className="subtitle">Testimonials</span>
          <h2>Guest Experiences</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '50px' }}>
            <div className="review-card" style={{ padding: '40px', background: 'var(--cream-white)', border: '1px solid #eee', borderRadius: 'var(--border-radius-md)' }}>
              <p style={{ fontStyle: 'italic', color: '#555' }}>&quot;A beautiful property away from the noise. The oak attique room was an absolute delight. Highly recommend for couples!&quot;</p>
              <h4 style={{ marginTop: '20px', color: 'var(--oak-green)' }}>- Rahul S.</h4>
            </div>
            <div className="review-card" style={{ padding: '40px', background: 'var(--cream-white)', border: '1px solid #eee', borderRadius: 'var(--border-radius-md)' }}>
              <p style={{ fontStyle: 'italic', color: '#555' }}>&quot;We stayed in the family room and it was incredibly spacious. The hospitality was top-notch and the food was delicious.&quot;</p>
              <h4 style={{ marginTop: '20px', color: 'var(--oak-green)' }}>- Priya M.</h4>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
