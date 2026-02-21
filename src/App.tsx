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
          text="Ingresar"
          onClick={() => setShowForm(true)}
          className="
absolute z-20 opacity-0 animate-fairyAppear
top-[25%] md:top-[23%]
left-1/2 -translate-x-1/2

px-8 py-3 md:px-10 md:py-4
text-2xl md:text-3xl
whitespace-nowrap

rounded-full

bg-linear-to-r from-amber-400 via-yellow-300 to-amber-500
text-black
tracking-wide

shadow-[0_0_30px_rgba(255,215,0,0.8)]
border border-yellow-100/40

hover:scale-105
hover:shadow-[0_0_50px_rgba(255,215,0,1)]
transition-all duration-300

font-['DisneyDreams']
drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]
"
        />
      )}
    </>
  );
}

export default App;
