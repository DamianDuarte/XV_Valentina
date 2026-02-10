import { useRef, useState } from "react";
import FairyButton from "../components/FairyButton";

type Props = {
  audioRef: React.RefObject<HTMLAudioElement>;
};

export default function Main({ audioRef }: Props) {
  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const video2Ref = useRef<HTMLVideoElement | null>(null);

  const [showSecond, setShowSecond] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleEnded = () => {
    if (!video2Ref.current) return;

    video2Ref.current.play();
    setShowSecond(true);

    setTimeout(() => setShowButton(true), 2000);
  };

  return (
    <>
      {/* VIDEO 1 */}
      <video
        ref={video1Ref}
        className={`fixed inset-0 w-full h-full -z-30 transition-opacity duration-1000
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
        className={`fixed inset-0 w-full h-full object-cover -z-30 transition-opacity duration-1500
          ${showSecond ? "opacity-100" : "opacity-0"}`}
        muted
        playsInline
        loop
      >
        <source src="/background2.webm" type="video/webm" />
      </video>

      {showButton && (
        <FairyButton
          text="Adentrate en la magia"
          className="absolute top-[25%] left-1/2 -translate-x-1/2 z-20"
        />
      )}
    </>
  );
}
