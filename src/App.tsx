import "./App.css";
import { useEffect, useRef, useState } from "react";
import EnterPage from "./pages/intro";
import FairyButton from "./components/FairyButton";
import MagicForm from "./pages/form";

function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [entered, setEntered] = useState(false);
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

    // Mostrar botón después de 2 segundos
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
      {/* 🎬 VIDEO ÚNICO */}
      <video
        ref={videoRef}
        className="fixed inset-0 w-full h-full object-cover -z-30"
        autoPlay
        muted
        playsInline
        loop
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
    </>
  );
}

export default App;
