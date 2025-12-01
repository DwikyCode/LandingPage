import { motion } from "framer-motion";
import imgImage1 from "figma:asset/91d4d108eda0e50c31cc572bbcdccf090d727663.png";

export default function Header() {
  const navItems = ["Home", "Profil", "Publikasi", "Peta Situs"];

  return (
    <motion.header
      className="bg-white shadow-md relative z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="h-16 w-12 shrink-0">
              <img
                alt="Logo Kementerian Dalam Negeri"
                className="w-full h-full object-contain"
                src={imgImage1}
              />
            </div>
            <h1 className="text-[#264968] max-w-[180px]">
              Kementerian Dalam Negeri
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-9">
            {navItems.map((item, index) => (
              <button
                key={item}
                className={`px-5 py-2 rounded-[15px] transition-colors ${
                  index === 0
                    ? "bg-[#8ec3f8] text-[#264968]"
                    : "text-[#264968] hover:bg-[#8ec3f8]/50"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}