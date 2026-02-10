type Props = {
  onEnter: () => void;
};

export default function EnterPage({ onEnter }: Props) {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* FONDO */}
      <img
        src="/portal.png"
        alt="Portal"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* IMAGEN CLICKEABLE */}
      <div
        role="button"
        aria-label="Entrar al portal"
        onClick={onEnter}
        className="
          absolute inset-0
          flex items-center justify-center
          z-10
          cursor-pointer
        "
      >
        <img
          src="/portal_button.png"
          alt=""
          draggable={false}
          className="
            w-48 h-48
            select-none
            pointer-events-none

            drop-shadow-[0_0_40px_rgba(255,215,0,0.9)]
            hover:scale-110
            transition-transform duration-300 ease-out

            animate-[fairyFloat_3s_ease-in-out_infinite]
          "
        />
      </div>
    </div>
  );
}
