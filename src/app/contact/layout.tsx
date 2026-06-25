import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Hotel Oak Chhav',
  description: 'Get in touch with Hotel Oak Chhav for bookings, inquiries, and special requests.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
