import { useState, useEffect } from "react";

const stars = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 2,
}));

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 6,
  duration: Math.random() * 4 + 4,
}));

export default function App() {
  const [lockerVisible] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [platform] = useState<"android" | "ios" | null>(null);
  const [count, setCount] = useState(10247);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => !p);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleUnlock = () => {
    setDownloaded(true);
  };

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(160deg, #12070a 0%, #2b0911 30%, #3d0911 60%, #14070b 100%)",
        color: "#ffd6d6",
      }}
    >
      {/* Animated background image */}
      <div
        className="fixed inset-0 opacity-10"
        style={{
          // backgroundImage: "url('/images/mecha-bg.jpg')",
          backgroundImage: "url('https://i.pinimg.com/736x/cb/1c/a7/cb1ca75b346774ff71891f3cf1d94a63.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${star.duration}s ${star.delay}s ease-in-out infinite`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute w-1 rounded-full"
            style={{
              left: `${p.x}%`,
              bottom: "-10px",
              height: `${Math.random() * 60 + 20}px`,
              background: "linear-gradient(to top, #ff4d4d, transparent)",
              animation: `floatUp ${p.duration}s ${p.delay}s ease-in infinite`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      {/* Neon grid lines */}
      <div
        className="fixed inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,80,80,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,80,80,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 pb-16 pt-8">

        {/* TOP BADGE */}
        <div
          className="mb-4 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
          style={{
            background: "linear-gradient(90deg, #ff5a5a, #ff8f72)",
            color: "#1f0203",
            boxShadow: "0 0 18px rgba(255,80,80,0.7)",
          }}
        >
          🦎 Mecha Chameleon · Camouflage · Soulever
        </div>

        {/* LOGO */}
        <div className="relative mb-4">
          <div
            className="absolute inset-0 rounded-3xl blur-2xl"
            style={{
              background: "radial-gradient(circle, rgba(255,80,80,0.5) 0%, transparent 70%)",
              transform: "scale(1.3)",
            }}
          />
          <img
            src="https://i.pinimg.com/736x/cb/1c/a7/cb1ca75b346774ff71891f3cf1d94a63.jpg"
            alt="Mecha Chameleon Logo"
            className="relative rounded-3xl"
            style={{
              width: "140px",
              height: "140px",
              objectFit: "cover",
              border: "2px solid rgba(255,80,80,0.5)",
              boxShadow: "0 0 30px rgba(255,80,80,0.4), 0 0 60px rgba(255,140,140,0.2)",
            }}
          />
          {/* Live indicator */}
          <div
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs"
            style={{
              background: "#ff3d3d",
              boxShadow: "0 0 10px #ff3d3d",
              animation: "pulseRed 1.5s ease-in-out infinite",
            }}
          >
            🔴
          </div>
        </div>

        {/* TITLE */}
        <h1
          className="text-4xl font-black uppercase mb-1 tracking-wider"
          style={{
            fontFamily: "'Orbitron', monospace",
            background: "linear-gradient(90deg, #ff7b7b, #ff2f2f, #ff7b7b)",
            backgroundSize: "200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            animation: "shimmer 3s linear infinite",
          }}
        >
          MECHA
        </h1>
        <h1
          className="text-4xl font-black uppercase mb-3 tracking-wider"
          style={{
            fontFamily: "'Orbitron', monospace",
            background: "linear-gradient(90deg, #ff4d4d, #ff9b9b, #ff4d4d)",
            backgroundSize: "200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 3s linear infinite reverse",
          }}
        >
          CHAMELEON
        </h1>

        {/* RATING */}
        <div className="flex items-center gap-2 mb-2">
          <span style={{ color: "#7df9ff", fontSize: "18px" }}>★★★★★</span>
          <span className="font-bold text-cyan-200">4.9</span>
          <span className="text-sm opacity-60">({count.toLocaleString()} avis)</span>
        </div>

        {/* LIVE COUNTER */}
        <div
          className="mb-5 px-3 py-1 rounded-full text-xs flex items-center gap-2"
          style={{
            background: "rgba(255,80,80,0.12)",
            border: "1px solid rgba(255,80,80,0.3)",
            color: "#ffb2b2",
          }}
        >
          <span
            className="w-2 h-2 rounded-full inline-block"
            style={{
              background: "#ff6b6b",
              boxShadow: "0 0 8px #ff6b6b",
              animation: "pulseRed 1.2s ease-in-out infinite",
            }}
          />
          <span>{Math.floor(Math.random() * 400 + 1200)} joueurs actifs maintenant</span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-base mb-6 opacity-90 max-w-xs leading-relaxed">
          🔥 Incarne un caméléon robotique, infiltre des bases ennemies et change de couleur pour survivre.<br />
          Prêt à dominer l'arène cybernétique ?
        </p>

        {/* FEATURES */}
        <div
          className="w-full max-w-xs rounded-2xl mb-6 grid grid-cols-3 gap-3 p-4"
          style={{
            background: "rgba(255,80,80,0.08)",
            border: "1px solid rgba(255,80,80,0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          {[
            { icon: "🦎", label: "Camouflage" },
            { icon: "🔥", label: "Attaque Laser" },
            { icon: "🤖", label: "Boss Méca" },
            { icon: "🚀", label: "Boost Turbo" },
            { icon: "🛡️", label: "Armure" },
            { icon: "🌌", label: "Mode Nuit" },
          ].map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 rounded-xl py-2"
              style={{ background: "rgba(0,0,0,0.3)" }}
            >
              <span className="text-xl">{f.icon}</span>
              <span className="text-xs font-semibold opacity-80">{f.label}</span>
            </div>
          ))}
        </div>

        {/* DOWNLOAD BUTTONS */}
        <div className="w-full max-w-xs space-y-3 mb-4">
          <a
            href="https://appsave.online/cl/i/xp29rl"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-2xl py-4 px-6 font-bold text-base flex items-center justify-center gap-3 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #ff4949, #ff8a6b)",
              color: "#140606",
              boxShadow: pulse
                ? "0 0 30px rgba(255,80,80,0.8), 0 8px 25px rgba(255,80,80,0.4)"
                : "0 0 15px rgba(255,80,80,0.4), 0 4px 15px rgba(255,80,80,0.2)",
              transform: pulse ? "scale(1.02)" : "scale(1)",
              transition: "all 0.4s ease",
              textDecoration: "none",
            }}
          >
            <span className="text-xl">📲</span>
            <span>Télécharger — Android</span>
          </a>

          <a
            href="https://appsave.online/cl/i/xp29rl"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-2xl py-4 px-6 font-bold text-base flex items-center justify-center gap-3 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #3d0f12, #1f0708)",
              color: "#ffdeda",
              border: "1px solid rgba(255,120,120,0.25)",
              boxShadow: "0 0 18px rgba(255,80,80,0.2), 0 4px 15px rgba(0,0,0,0.5)",
              textDecoration: "none",
            }}
          >
            <span className="text-xl">🍎</span>
            <span>Télécharger — iOS</span>
          </a>
        </div>

        {/* TRUST BADGES */}
        <div className="flex gap-3 mb-8 flex-wrap justify-center">
          {["✅ Sécurisé", "🆓 100% Gratuit", "🚀 Rapide"].map((b, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full font-semibold"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {b}
            </span>
          ))}
        </div>

        {/* SCREENSHOTS PREVIEW */}
        <div className="w-full max-w-xs mb-8">
          <p className="text-xs uppercase tracking-widest opacity-50 mb-3">Aperçu du jeu</p>
          <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
            {[
              { emoji: "🦎", bg: "from-red-900 to-orange-900", label: "Furtivité" },
              { emoji: "🤖", bg: "from-red-800 to-rose-900", label: "Boss Méca" },
              { emoji: "⚡", bg: "from-amber-900 to-orange-600", label: "Énergie" },
            ].map((s, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-24 h-40 rounded-2xl bg-gradient-to-b ${s.bg} flex flex-col items-center justify-center gap-2`}
                style={{
                  border: "1px solid rgba(0,255,136,0.2)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
                }}
              >
                <span className="text-4xl">{s.emoji}</span>
                <span className="text-xs opacity-70 text-center px-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT LOCKER */}
        {lockerVisible && (
          <div
            id="locker"
            className="w-full max-w-sm rounded-3xl p-6 mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(40,8,8,0.95), rgba(80,12,12,0.95))",
              color: "#ffe5e5",
              boxShadow: "0 0 40px rgba(255,80,80,0.3), 0 20px 60px rgba(0,0,0,0.5)",
              border: "2px solid rgba(255,80,80,0.4)",
            }}
          >
            {!downloaded ? (
              <>
                <div className="text-3xl mb-2">🔓</div>
                <h3 className="text-xl font-black mb-1" style={{ color: "#ffd6d6" }}>
                  Débloquer le téléchargement
                </h3>
                <p className="text-sm mb-1 opacity-70">
                  Plateforme :{" "}
                  <strong className="uppercase" style={{ color: platform === "android" ? "#ff7b7b" : "#ffdede" }}>
                    {platform === "android" ? "🤖 Android" : "🍎 iOS"}
                  </strong>
                </p>
                <p className="text-sm mb-4 opacity-70">
                  Complète une étape rapide pour accéder au lien de téléchargement :
                </p>

                <div className="space-y-3">
                  {/* Step 1 */}
                  <div
                    className="rounded-2xl p-4 flex items-center gap-3 cursor-pointer transition-all hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, rgba(92,0,0,0.95), rgba(160,16,16,0.95))",
                      border: "1px solid rgba(255,80,80,0.35)",
                    }}
                    onClick={handleUnlock}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #ff4d4d, #ff9e9e)" }}
                    >
                      1
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-sm" style={{ color: "#ffbbbb" }}>
                        Confirmer votre région
                      </p>
                      <p className="text-xs opacity-70">Cliquez pour vérifier la disponibilité</p>
                    </div>
                    <span className="ml-auto text-red-400 text-lg">→</span>
                  </div>

                  {/* Step indicator */}
                  <div className="flex items-center gap-2 justify-center text-xs opacity-50">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-6 h-px bg-rose-400" />
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <div className="w-6 h-px bg-gray-300" />
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <span className="ml-1">Étape 1 sur 1</span>
                  </div>
                </div>

                <p className="text-xs mt-4 opacity-40">
                  🔒 Processus 100% sécurisé · Données protégées
                </p>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-3"
                  style={{
                    background: "linear-gradient(135deg, #00c853, #00ff88)",
                    boxShadow: "0 0 20px rgba(0,200,83,0.5)",
                  }}
                >
                  ✅
                </div>
                <h3 className="text-xl font-black mb-1 text-red-400">Débloqué !</h3>
                <p className="text-sm mb-4 opacity-70">
                  Ton téléchargement est prêt pour{" "}
                  <strong>{platform === "android" ? "Android" : "iOS"}</strong>
                </p>
                <a
                  href="#"
                  className="w-full rounded-2xl py-4 px-6 font-black text-base text-center block transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #ff4d4d, #ff9e9e)",
                    color: "#140606",
                    boxShadow: "0 8px 25px rgba(255,80,80,0.5)",
                    textDecoration: "none",
                  }}
                >
                  🎮 Lancer le téléchargement
                </a>
                <p className="text-xs mt-3 opacity-50">
                  Taille : ~87 MB · Version 2.4.1
                </p>
              </div>
            )}
          </div>
        )}

        {/* SOCIAL PROOF */}
        <div
          className="w-full max-w-xs rounded-2xl p-4 mb-6"
          style={{
            background: "rgba(0,0,0,0.3)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
          }}
        >
          <p className="text-xs uppercase tracking-widest opacity-40 mb-3">Ce qu'ils disent</p>
          {[
            { name: "Karim M.", stars: 5, text: "Jeu incroyable ! Je peux pas m'arrêter 🔥" },
            { name: "Léa B.", stars: 5, text: "Les graphismes sont dingues, addictif !" },
            { name: "Youssef K.", stars: 5, text: "Meilleur jeu de l'année sans hésiter" },
          ].map((r, i) => (
            <div
              key={i}
              className="flex gap-3 mb-3 last:mb-0 text-left"
            >
              <div
                className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-black"
                style={{
                  background: `hsl(${i * 8 + 0}, 80%, 45%)`,
                  border: "1px solid rgba(255,80,80,0.3)",
                }}
              >
                {r.name[0]}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold">{r.name}</span>
                  <span className="text-yellow-400 text-xs">{"★".repeat(r.stars)}</span>
                </div>
                <p className="text-xs opacity-70">{r.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="text-xs opacity-40 leading-relaxed max-w-xs">
          <p>© 2026 Mecha Chameleon — Tous droits réservés</p>
          <p className="mt-1">v2.4.1 · Disponible sur Android & iOS</p>
          <div className="flex gap-3 justify-center mt-2">
            <a href="#" className="underline hover:opacity-70">Confidentialité</a>
            <a href="#" className="underline hover:opacity-70">CGU</a>
            <a href="#" className="underline hover:opacity-70">Contact</a>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.4); }
        }
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0.4; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulseRed {
          0%, 100% { box-shadow: 0 0 6px #ff3d3d; }
          50% { box-shadow: 0 0 18px #ff3d3d, 0 0 30px rgba(255,61,61,0.4); }
        }
        @keyframes pulseGreen {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
}
