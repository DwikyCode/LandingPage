import { motion } from "framer-motion";
import imgImage1 from "figma:asset/91d4d108eda0e50c31cc572bbcdccf090d727663.png";
import imgImage7 from "figma:asset/fb88a12c2f436aca7db0e53c28e6330ddfc29ea5.png";

export default function Footer() {
  return (
    <motion.footer 
      className="bg-[#03396b]/90 text-white py-8 mt-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[88px] w-[69px] shrink-0">
                <img 
                  alt="Logo Kementerian Dalam Negeri" 
                  className="w-full h-full object-contain" 
                  src={imgImage1} 
                />
              </div>
              <div>
                <h3>Kementerian Dalam Negeri</h3>
                <p className="text-[14px] opacity-90 max-w-[226px]">
                  Direktorat Jenderal Bina Administrasi Kewilayahan
                </p>
              </div>
            </div>
            <address className="not-italic text-[14px] opacity-90">
              Jl. Veteran No.7 5, RT.5/RW.2, Gambir, Kecamatan Gambir, Kota Jakarta Pusat.
            </address>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-3">
            <div className="space-y-2 text-[14px]">
              <p>Telp: (021) 3521535</p>
              <p>Call Center: 168</p>
              <p>Email: ditjenbinaadwil@kemendagri.go.id</p>
              <p>Instagram: @ditjenbinaadwil</p>
            </div>
            
            <div className="flex items-center gap-3 mt-4">
              <span className="text-[14px]">Support by:</span>
              <div className="bg-white rounded-lg p-2">
                <img 
                  alt="Support Logo" 
                  className="w-[90px] h-[90px] object-contain" 
                  src={imgImage7} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}