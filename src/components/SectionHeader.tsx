interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="inline-flex flex-col items-start">
      <h2 className="text-[#03396b] px-4">
        {title}
      </h2>
      <div className="bg-[#b3d7fb] h-1 rounded-full w-full" />
    </div>
  );
}
