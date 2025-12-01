interface NewsCardProps {
  title: string;
  date: string;
  image: string;
}

export default function NewsCard({ title, date, image }: NewsCardProps) {
  return (
    <article className="bg-[#336fab] rounded-[20px] overflow-hidden h-[291px] flex flex-col transition-transform hover:scale-105 cursor-pointer">
      <div className="h-[187px] overflow-hidden">
        <img 
          alt={title} 
          className="w-full h-full object-cover" 
          src={image} 
        />
      </div>
      <div className="flex-1 px-3 py-4 flex flex-col justify-end">
        <h3 className="text-white mb-3 line-clamp-2">
          {title}
        </h3>
        <time className="text-white/90 text-[12px]">
          {date}
        </time>
      </div>
    </article>
  );
}
