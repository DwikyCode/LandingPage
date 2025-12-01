import { motion } from "motion/react";
import img202512020022351 from "figma:asset/36cda760d02338a249df5f7b1d31fc7be0d32f53.png";

export default function Hero() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[440px] overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img 
          alt="Gedung Kementerian Dalam Negeri" 
          className="w-full h-full object-cover"
          src={img202512020022351} 
        />
      </motion.div>
      {/* Optional overlay for better text readability if needed */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </section>
  );
}