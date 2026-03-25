import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import AboutSection from '../sections/AboutSection';
import Testimonials from '../sections/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutSection />
      <Testimonials />
      <Footer />
    </>
  );
}