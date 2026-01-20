import FairyButton from "../components/FairyButton";

type Props = {
  onEnter: () => void;
};

export default function Intro({ onEnter }: Props) {
  return (
    <div className="fixed inset-0 bg-black">
      {/* Imagen fija del portal */}
      <img
        src="/portal.png"
        alt="Portal"
        className="absolute inset-0 w-full h-full"
      />

      {/* Overlay opcional */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Botón */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <FairyButton
          text="Entrar al portal"
          onClick={onEnter}
          className="animate-fairyAppear"
        />
      </div>
    </div>
  );
}
