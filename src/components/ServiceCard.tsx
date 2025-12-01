interface ServiceCardProps {
  title: string;
  icon: string;
}

export default function ServiceCard({ title, icon }: ServiceCardProps) {
  return (
    <article className="bg-[#336fab] rounded-[10px] p-4 flex flex-col items-center gap-3 h-[123px] justify-center transition-transform hover:scale-105 cursor-pointer">
      <div className="h-[50px] w-[50px] flex items-center justify-center">
        <img 
          alt={title} 
          className="max-w-full max-h-full object-contain" 
          src={icon} 
        />
      </div>
      <h3 className="text-white text-center text-[14px] leading-tight">
        {title}
      </h3>
    </article>
  );
}
