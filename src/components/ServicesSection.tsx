import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import SectionHeader from "./SectionHeader";
import NavigationButton from "./NavigationButton";
import imgImage6 from "figma:asset/857b7f2c25d630e81a959cce5099144d7fbbdca1.png";
import imgImage9 from "figma:asset/5e81967dc652035ead6051cdb7c272fdb62a8549.png";
import imgImage10 from "figma:asset/32beaa9250bbdc44beda159183e59dd71bf930df.png";
import imgImage11 from "figma:asset/50e3c65a16c2ebc72f4635814c5bd196071b8aed.png";
import imgImage12 from "figma:asset/16052c93580aa5d72adde15a68c972c38118a149.png";
import imgImage8 from "figma:asset/e66dd2c01bdc82eb794cce187127ed78a134a40a.png";

const servicesData = [
  {
    id: 1,
    title: "Pagar SPM Bencana",
    icon: imgImage6,
  },
  {
    id: 2,
    title: "Kencana",
    icon: imgImage8,
  },
  {
    id: 3,
    title: "Sidamkar",
    icon: imgImage9,
  },
  {
    id: 4,
    title: "SIM LINMAS",
    icon: imgImage10,
  },
  {
    id: 5,
    title: "Lapor",
    icon: imgImage11,
  },
  {
    id: 6,
    title: "E-MONEY ADWIL",
    icon: imgImage12,
  },
];

export default function ServicesSection() {
  return (
    <motion.section 
      className="mb-16 md:mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    >
      <SectionHeader title="Layanan" />
      
      <div className="flex items-center gap-4 mt-8">
        <NavigationButton direction="prev" />
        
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
        
        <NavigationButton direction="next" />
      </div>
    </motion.section>
  );
}