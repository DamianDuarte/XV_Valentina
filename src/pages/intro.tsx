type Props = {
  onEnter: () => void;
};

export default function Intro({ onEnter }: Props) {
  return (
    <div className="fixed inset-0 z-999 bg-black">
      {/* Fondo */}
      <img
        src="/portal.png"
        alt="Portal"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Overlay suave */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* BOTÓN = IMAGEN */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <button
          onClick={onEnter}
          aria-label="Entrar al portal"
          className="
            bg-transparent
            border-0
            p-0
            cursor-pointer
            select-none
            outline-none
            transition-transform
            duration-300
            ease-out
            active:scale-95
            focus-visible:ring-4
            focus-visible:ring-yellow-300/60
          "
        >
          <img
            src="/portal_button.png"
            alt="Entrar al portal"
            draggable={false}
            className="
              w-40 h-40
              md:w-56 md:h-56
              object-contain
              transition-transform
              duration-500
              hover:scale-105
            "
          />
        </button>
      </div>
    </div>
  );
}
