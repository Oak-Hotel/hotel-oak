import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery | Hotel Oak Chhav',
  description: 'Explore the visual beauty of Hotel Oak Chhav. Browse our premium rooms, stunning amenities, and the serene surroundings of Nainital.',
};

export default function GalleryPage() {
  const images = [
    { id: 'img1', src: '/gallery1.jpeg', alt: 'Hotel Oak Chhav Exterior View' },
    { id: 'img2', src: '/gallery2.jpeg', alt: 'Standard Double Room Interior' },
    { id: 'img3', src: '/room2.png', alt: 'Four-Bedded Family Room' },
    { id: 'img4', src: '/room3.png', alt: 'Oak House Attique Style' },
    { id: 'img5', src: '/nainital.png', alt: 'Naini Lake Scenic View' },
    { id: 'img6', src: '/hero.png', alt: 'Himalayan Oak Forest View' },
    { id: 'img7', src: '/room2.png', alt: 'Family Suite Living Area' },
    { id: 'img8', src: '/room3.png', alt: 'Attique Wooden Interior Details' },
    { id: 'img9', src: '/room1.png', alt: 'Premium Room View' }
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ height: '40vh', minHeight: '300px', backgroundImage: 'linear-gradient(rgba(20, 40, 15, 0.7), rgba(45, 39, 29, 0.7)), url("/hero.png")' }}>
        <div className="container hero-content text-center">
          <span className="accent-text" style={{ fontSize: '3rem' }}>Visual Tour</span>
          <h1 style={{ color: '#fff', fontSize: '4.5rem' }}>Our Gallery</h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section" style={{ backgroundColor: 'var(--cream-white)', padding: '5rem 0' }}>
        <div className="container wide-container">
          <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
            {images.map((img) => (
              <a key={img.id} href={`#${img.id}`} className="gallery-thumbnail">
                <Image src={img.src} alt={img.alt} width={800} height={600} style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '16px', display: 'block' }} />
                <div className="gallery-overlay"><span>🔍 View Larger</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Elements (CSS Only) */}
      {images.map((img) => (
        <div key={`lb-${img.id}`} id={img.id} className="lightbox">
          <a href="#_" className="lightbox-close">&times;</a>
          <Image src={img.src} alt={img.alt} width={1200} height={800} style={{ width: '100%', height: 'auto', maxHeight: '90vh', objectFit: 'contain' }} />
        </div>
      ))}
    </>
  );
}
