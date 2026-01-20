import "./App.css";
import { useRef, useState } from "react";
import FairyButton from "./components/FairyButton";

function App() {
  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const video2Ref = useRef<HTMLVideoElement | null>(null);

  const [showSecond, setShowSecond] = useState(false);
  const [ShowButton, setShowButton] = useState(false);

  const handleEnded = () => {
    if (!video1Ref.current || !video2Ref.current) return;

    video2Ref.current.currentTime = 0;
    video2Ref.current.loop = true;
    video2Ref.current.play();

    setShowSecond(true);

    setTimeout(() => {
      setShowButton(true);
    }, 2000);
  };

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
        style={{
          WebkitMaskImage:
            "radial-gradient(circle at center, black 60%, transparent 100%)",
          maskImage:
            "radial-gradient(circle at center, black 60%, transparent 100%)",
        }}
        loop
      >
        <source src="/background2.webm" type="video/webm" />
      </video>
      {ShowButton && (
        <FairyButton
          text="Confirmar asistencia"
          className="
    absolute
    z-20
    opacity-0
    animate-fairyAppear

    /* MOBILE */
    top-[25%]
    px-5
    py-2
    text-lg
    whitespace-nowrap
    rounded-lx
    shadow-[0_0_12px_rgba(255,215,0,0.6)]

    /* DESKTOP */
    md:top-[23%]
    md:px-10
    md:py-4
    md:text-xl
    md:rounded-full
    

    left-1/2
    -translate-x-1/2
  "
        />
      )}

      {/* IMAGEN FONDO 1 */}
      <div
        className={`fixed inset-0 bg-center bg-cover -z-100
          transition-opacity duration-1000 ease-in-out
          ${showSecond ? "opacity-0" : "opacity-100"}`}
        style={{ backgroundImage: "url('/blur.png')" }}
      ></div>
    </>
  );
}

export default App;
