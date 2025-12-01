import Header from "./components/Header";
import Hero from "./components/Hero";
import NewsSection from "./components/NewsSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#f1f8ff] min-h-screen">
      <Header />
      <Hero />
      <main className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <NewsSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
