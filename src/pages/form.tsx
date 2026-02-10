export default function MagicForm() {
  return (
    <div className="fixed inset-0 z-40 overflow-hidden">
      {/* 🎬 VIDEO DE FONDO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background2.webm" type="video/webm" />
      </video>

      {/* 🌫️ OVERLAY CLARO SOBRE VIDEO */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* ✨ CONTENEDOR CENTRAL */}
      <div className="relative z-50 flex items-center justify-center h-full px-4">
        <form
          className="relative w-full max-w-5xl px-10 py-12 rounded-3xl
          bg-linear-to-b from-white/20 via-pink-200/10 to-purple-200/10
          backdrop-blur-xl border border-white/30
          shadow-[0_0_80px_rgba(236,72,153,0.35)]
          overflow-hidden space-y-12"
        >
          {/* ✨ Brillos */}
          <div className="pointer-events-none absolute inset-0">
            <span className="sparkle absolute top-10 left-10" />
            <span className="sparkle absolute top-1/3 right-16" />
            <span className="sparkle absolute bottom-16 left-1/4" />
            <span className="sparkle absolute bottom-10 right-10" />
          </div>

          {/* Aura */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-pulse" />

          {/* 🪄 TÍTULO */}
          <h3 className="relative text-4xl text-center font-semibold tracking-wide text-white drop-shadow-lg">
            ✨ Estás invitado ✨
          </h3>

          {/* 📍 INFO + MAPA */}
          <div className="relative grid md:grid-cols-2 gap-8 items-stretch text-white">
            {/* Información */}
            <div className="space-y-4 text-lg">
              <p>
                <span className="text-pink-200 font-semibold">
                  Código de vestimenta:
                </span>{" "}
                Elegante
              </p>

              <p>
                <span className="text-pink-200 font-semibold">Fecha:</span> 15
                de Junio de 2026
              </p>

              <p>
                <span className="text-pink-200 font-semibold">Hora:</span> 21:00
                hs
              </p>

              <p>
                <span className="text-pink-200 font-semibold">Lugar:</span>{" "}
                Salón Portal Real
              </p>
            </div>

            {/* Mapa */}
            <div className="w-full h-64 md:h-full rounded-2xl overflow-hidden border border-white/30 shadow-xl">
              <iframe
                title="Mapa"
                src="https://www.google.com/maps?q=Salon%20Portal%20Real&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* 📝 FORMULARIO */}
          <div className="relative space-y-8">
            <h4 className="text-2xl text-center text-pink-100">
              Confirmar asistencia
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nombre"
                className="px-6 py-4 rounded-xl bg-white/10
                border border-white/30 text-white text-lg
                placeholder-white/70
                focus:outline-none focus:border-pink-300
                focus:shadow-[0_0_20px_rgba(236,72,153,0.8)]
                transition-all duration-300"
              />

              <input
                type="text"
                placeholder="Apellido"
                className="px-6 py-4 rounded-xl bg-white/10
                border border-white/30 text-white text-lg
                placeholder-white/70
                focus:outline-none focus:border-purple-300
                focus:shadow-[0_0_20px_rgba(168,85,247,0.8)]
                transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="relative w-full py-5 rounded-full
              bg-linear-to-r from-pink-400 via-fuchsia-400 to-purple-500
              text-white text-2xl font-semibold tracking-wide
              shadow-[0_0_40px_rgba(236,72,153,0.8)]
              hover:shadow-[0_0_70px_rgba(236,72,153,1)]
              hover:scale-[1.04]
              active:scale-95
              transition-all duration-300
              animate-[pulse_4s_ease-in-out_infinite]"
            >
              ✨ Confirmar asistencia ✨
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
