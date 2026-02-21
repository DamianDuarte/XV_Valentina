import { useState } from "react";

export default function MagicForm() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre || !apellido) {
      alert("Por favor completá nombre y apellido ✨");
      return;
    }

    if (cantidad < 1) {
      alert("Ingresá al menos 1 asistente ✨");
      return;
    }

    const numero = "5491126509866";

    const mensaje = [
      "¡El portal se ha abierto!",
      "",
      `Yo ${nombre} ${apellido} confirmo mi asistencia.`,
      `Cantidad de asistentes: ${cantidad}`,
      "Gracias por permitirme ser parte de este capítulo tan especial.",
      "",
      "¡Nos vemos bajo las estrellas!",
    ].join("\n");

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");

    setMensajeEnviado(true);
    setTimeout(() => setMensajeEnviado(false), 4000);

    setNombre("");
    setApellido("");
    setCantidad(1);
  };

  return (
    <div className="relative z-40 min-h-dvh overflow-y-auto">
      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed md:absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/background2.webm" type="video/webm" />
      </video>

      {/* Overlay */}
      <div className="fixed md:absolute inset-0 bg-black/50 backdrop-blur-sm -z-10" />

      {/* MENSAJE */}
      {mensajeEnviado && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 px-8 py-4 rounded-full bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black text-lg shadow-[0_0_40px_rgba(255,215,0,1)] font-['DisneyDreams']">
          ✨ Tu mensaje fue enviado al reino mágico ✨
        </div>
      )}

      <div className="relative z-50 flex items-start md:items-center justify-center min-h-dvh px-4 py-16 md:py-0">
        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-5xl px-6 md:px-10 py-10 md:py-12 rounded-3xl bg-linear-to-b from-white/10 via-purple-200/10 to-pink-200/10 backdrop-blur-xl border border-yellow-400/40 shadow-[0_0_80px_rgba(255,215,0,0.35)] overflow-hidden space-y-10 md:space-y-12 "
        >
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.25),transparent_70%)] animate-pulse pointer-events-none" />

          <h3 className="relative text-3xl md:text-4xl text-center tracking-wide text-yellow-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.9)] font-['DisneyDreams']">
            ✨ Estás invitado ✨
          </h3>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            <div className="space-y-4 text-base md:text-lg ">
              <p>
                <span className="text-yellow-300">Código de vestimenta:</span>{" "}
                Formal/Elegante
              </p>
              <p>
                <span className="text-yellow-300">Fecha:</span> 11 de abril de
                2026
              </p>
              <p>
                <span className="text-yellow-300">Hora:</span> 21:00 hs
              </p>
              <p>
                <span className="text-yellow-300">Lugar:</span> Barile Eventos
              </p>
            </div>

            <div className="w-full h-64 md:h-full rounded-2xl overflow-hidden border border-yellow-400/30 shadow-xl">
              <iframe
                title="Mapa"
                src="https://www.google.com/maps?q=Luis%20Atenzo%206340%20Gonz%C3%A1lez%20Cat%C3%A1n%20Buenos%20Aires&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="relative space-y-8 font-['DisneyDreams']">
            <h4 className="text-xl md:text-2xl text-center text-yellow-200 font-['DisneyDreams']">
              Confirmar asistencia y cantidad de asistentes
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="px-6 py-4 rounded-xl bg-white/5 border border-yellow-400/30 text-white text-lg placeholder-white/60 focus:outline-none focus:border-yellow-300 transition-all duration-300 font-['DisneyDreams']"
              />

              <input
                type="text"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                className="px-6 py-4 rounded-xl bg-white/5 border border-yellow-400/30 text-white text-lg placeholder-white/60 focus:outline-none focus:border-yellow-300 transition-all duration-300 font-['DisneyDreams']"
              />

              <div className="flex items-center rounded-xl bg-white/5 border border-yellow-400/30 overflow-hidden font-['DisneyDreams']">
                <button
                  type="button"
                  onClick={() => setCantidad((prev) => Math.max(1, prev - 1))}
                  className="px-5 py-4 text-xl text-yellow-300 hover:bg-white/10 transition active:scale-90 font-['DisneyDreams']"
                >
                  −
                </button>

                <input
                  type="number"
                  min="1"
                  value={cantidad}
                  onChange={(e) =>
                    setCantidad(Math.max(1, Number(e.target.value)))
                  }
                  className="w-full text-center bg-transparent text-white text-lg focus:outline-none font-['DisneyDreams']"
                />

                <button
                  type="button"
                  onClick={() => setCantidad((prev) => prev + 1)}
                  className="px-5 py-4 text-xl text-yellow-300 hover:bg-white/10 transition active:scale-90 font-['DisneyDreams']"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-5 rounded-full bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black text-xl md:text-2xl tracking-wide shadow-[0_0_40px_rgba(255,215,0,0.8)] hover:shadow-[0_0_70px_rgba(255,215,0,1)] hover:scale-[1.04] active:scale-95 transition-all duration-300 font-['DisneyDreams']"
            >
              ✨ Confirmar asistencia ✨
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
