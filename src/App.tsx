import "./App.css";
import { useEffect, useRef, useState } from "react";
import EnterPage from "./pages/intro";
import FairyButton from "./components/FairyButton";
import MagicForm from "./pages/form";

function App() {
  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const video2Ref = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [entered, setEntered] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // 🎵 Inicializar audio
  useEffect(() => {
    audioRef.current = new Audio("/music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
  }, []);

  // 👉 Click en intro
  const handleEnter = () => {
    audioRef.current?.play().catch(() => {});
    setEntered(true);
  };

  // 🎬 Fin del video 1
  const handleEnded = () => {
    if (!video2Ref.current) return;

    video2Ref.current.currentTime = 0;
    video2Ref.current.loop = true;
    video2Ref.current.play();

    setShowSecond(true);

    setTimeout(() => {
      setShowButton(true);
    }, 2000);
  };

  // 🟣 INTRO
  if (!entered) {
    return <EnterPage onEnter={handleEnter} />;
  }

  // ✨ FORMULARIO
  if (showForm) {
    return <MagicForm />;
  }

  // 🟢 EXPERIENCIA
  return (
    <>
      {/* VIDEO 1 */}
      <video
        ref={video1Ref}
        className={`fixed inset-0 w-full h-full -z-30
          transition-opacity duration-1000 ease-in-out
          ${showSecond ? "opacity-0" : "opacity-100"}`}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
      >
        <source src="/background.webm" type="video/webm" />
      </video>

      {/* VIDEO 2 */}
      <video
        ref={video2Ref}
        className={`fixed inset-0 w-full h-full object-cover -z-30
          transition-opacity duration-1500 ease-in-out
          ${showSecond ? "opacity-100" : "opacity-0"}`}
        muted
        playsInline
        loop
        style={{
          WebkitMaskImage:
            "radial-gradient(circle at center, black 60%, transparent 100%)",
          maskImage:
            "radial-gradient(circle at center, black 60%, transparent 100%)",
        }}
        onPlay={() => {
          audioRef.current?.play().catch(() => {});
        }}
      >
        <source src="/background2.webm" type="video/webm" />
      </video>

      {/* BOTÓN */}
      {showButton && (
        <FairyButton
          text="Entrar"
          onClick={() => setShowForm(true)}
          className="
            absolute z-20 opacity-0 animate-fairyAppear

            top-[25%]
            px-5 py-2 text-lg whitespace-nowrap rounded-[50%]
            shadow-[0_0_12px_rgba(255,215,0,0.6)]

            md:top-[23%]
            md:px-10 md:py-4 md:text-xl md:rounded-full

            left-1/2 -translate-x-1/2
          "
        />
      )}

      {/* FONDO BLUR */}
      <div
        className={`fixed inset-0 bg-center bg-cover -z-40
          transition-opacity duration-1000 ease-in-out
          ${showSecond ? "opacity-0" : "opacity-100"}`}
        style={{ backgroundImage: "url('/blur.png')" }}
      />
    </>
  );
}

export default App;
