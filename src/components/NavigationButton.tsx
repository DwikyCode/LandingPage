import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationButtonProps {
  direction: "prev" | "next";
  onClick?: () => void;
}

export default function NavigationButton({ direction, onClick }: NavigationButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#b3d7fb] rounded-full p-2 hover:bg-[#8ec3f8] transition-colors shrink-0"
      aria-label={direction === "prev" ? "Previous" : "Next"}
    >
      {direction === "prev" ? (
        <ChevronLeft className="w-5 h-5 text-[#03396b]" />
      ) : (
        <ChevronRight className="w-5 h-5 text-[#03396b]" />
      )}
    </button>
  );
}
