type FairyButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

export default function FairyButton({
  text,
  onClick,
  className = "",
}: FairyButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`


  font-disney
  text-xl
  tracking-wide
  text-black

  bg-linear-to-b
  from-yellow-500
  via-yellow-400
  to-yellow-600

  rounded-full
  border-2
  border-yellow-300

  shadow-[0_0_35px_rgba(255,215,0,0.9)]
  backdrop-blur-md
  bg-opacity-95

  hover:scale-105
  hover:shadow-[0_0_45px_rgba(255,215,0,1)]
  transition-all
  duration-1500

        ${className}
      `}
    >
      {text}
    </button>
  );
}
