import { motion } from "framer-motion";
import NewsCard from "./NewsCard";
import SectionHeader from "./SectionHeader";
import NavigationButton from "./NavigationButton";
import imgImage3 from "figma:asset/39a47a27d752b5d0a23f20097263e8ebe6859f97.png";
import imgImage4 from "figma:asset/843afd39f08dcc5022aed4d7a0e35cc6558dfa8f.png";
import imgImage5 from "figma:asset/f21b7a72f812209e9b62a230d43935671f4c84ee.png";
import imgImage13 from "figma:asset/e6c512969f9ee0baad2a7d91a766f2937ea80f22.png";

const newsData = [
  {
    id: 1,
    title: "Kemendagri Ikuti Sidang ke-18 High ...",
    date: "17 Nov 2025",
    image: imgImage3,
  },
  {
    id: 2,
    title: "Ditjen Bina Adwil - Setmilpres ...",
    date: "17 Nov 2025",
    image: imgImage4,
  },
  {
    id: 3,
    title: "Ditjen Bina Adwil Kemendagri ...",
    date: "13 Nov 2025",
    image: imgImage5,
  },
  {
    id: 4,
    title: "Tanggap Bencana di Pidie Jaya, Ditjen ...",
    date: "1 Des 2025",
    image: imgImage13,
  },
];

export default function NewsSection() {
  return (
    <motion.section 
      className="mb-16 md:mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <SectionHeader title="Berita Terkini" />
      
      <div className="flex items-center gap-4 mt-8">
        <NavigationButton direction="prev" />
        
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {newsData.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
        
        <NavigationButton direction="next" />
      </div>
    </motion.section>
  );
}