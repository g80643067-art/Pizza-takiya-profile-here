import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import topDownPizzaImg from '../assets/images/intro_top_down_pizza.webp';

interface IntroPreloaderProps {
  onComplete: () => void;
}

export const IntroPreloader: React.FC<IntroPreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'playing' | 'exiting'>('playing');

  useEffect(() => {
    // Sequence timing:
    // 0.0s - 1.2s: Whole pizza appears from darkness + warm steam rises
    // 1.2s - 2.2s: Pizza cutter enters, rolls & cuts through the pizza
    // 2.2s - 3.2s: Cut slice separates with realistic cheese stretch
    // 3.2s - 4.3s: Slice flies upward in slow motion & orbits center with floating crumbs
    // 4.3s - 4.9s: Slice moves towards screen with golden halo
    // 4.9s - 5.3s: Smooth fade/zoom transition into main website
    const exitTimer = setTimeout(() => {
      setPhase('exiting');
    }, 4900);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5350);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exiting' ? (
        <motion.div
          id="intro-preloader"
          key="cinematic-pizza-intro"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.06,
            filter: 'blur(8px)',
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#0C0B0A] select-none pointer-events-auto"
        >
          {/* Deep Charcoal / Black Canvas Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,#161412_0%,#0C0B0A_70%,#060605_100%)] pointer-events-none" />

          {/* Warm Golden Spotlight behind Pizza */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: [0, 0.45, 0.6, 0.5],
              scale: [0.6, 1, 1.18, 1.25],
            }}
            transition={{ duration: 4.8, ease: 'easeOut' }}
            className="absolute w-[440px] h-[440px] sm:w-[560px] sm:h-[560px] rounded-full bg-gradient-to-tr from-[#A88945]/20 via-[#D8B45A]/30 to-transparent blur-3xl pointer-events-none"
          />

          {/* Pizzeria Header Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 mb-6 flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1916]/90 border border-[#D8B45A]/35 text-[#D8B45A] text-[10px] font-bold uppercase tracking-[0.25em] shadow-lg mb-2">
              <Sparkles className="w-3 h-3 text-[#D8B45A]" />
              <span>THE PIZZA LOVER'S • TAKIYA PATAN</span>
              <Sparkles className="w-3 h-3 text-[#D8B45A]" />
            </div>
            <p className="text-[11px] text-[#F4EBDD]/60 tracking-wider uppercase font-medium">
              Freshly Baked Italian Handcrafted Pizza
            </p>
          </motion.div>

          {/* MAIN 3D PIZZA STAGE */}
          <div className="relative z-10 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] flex items-center justify-center [perspective:1200px]">
            
            {/* SVG Base Definition & Slices */}
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full overflow-visible drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)]"
            >
              <defs>
                {/* 60-degree slice from -75° to -15°: center=(200,200), r=140 */}
                {/* Point A: (236.2, 64.8), Point B: (335.2, 163.8) */}
                <clipPath id="pizza-slice-wedge">
                  <path d="M 200 200 L 236.2 64.8 A 140 140 0 0 1 335.2 163.8 Z" />
                </clipPath>

                {/* Remaining 300-degree pizza without the slice */}
                <clipPath id="pizza-remaining-pie">
                  <path d="M 200 200 L 335.2 163.8 A 140 140 0 1 1 236.2 64.8 Z" />
                </clipPath>

                {/* Common UserSpace Pattern ensuring seamless pixel alignment */}
                <pattern
                  id="pizza-photo-pattern"
                  patternUnits="userSpaceOnUse"
                  width="400"
                  height="400"
                >
                  <image
                    href={topDownPizzaImg}
                    x="60"
                    y="60"
                    width="280"
                    height="280"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </pattern>

                {/* Warm Steam Filter */}
                <filter id="steam-blur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" />
                </filter>
              </defs>

              {/* 1. Dark Wood / Slate Stone Baking Peel Underneath */}
              <motion.g
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
              >
                {/* Outer Stone Rim */}
                <circle cx="200" cy="200" r="148" fill="#181614" stroke="#D8B45A" strokeWidth="1.5" strokeOpacity="0.25" />
                {/* Charred wood/slate texture */}
                <circle cx="200" cy="200" r="142" fill="#131210" />
                {/* Exposed board interior under the slice when it lifts */}
                <path
                  d="M 200 200 L 236.2 64.8 A 140 140 0 0 1 335.2 163.8 Z"
                  fill="#0E0D0C"
                  stroke="#26211C"
                  strokeWidth="1"
                />
                {/* Faint toasted flour/herb particles on the pan */}
                <circle cx="240" cy="130" r="1.5" fill="#D8B45A" opacity="0.3" />
                <circle cx="270" cy="150" r="1.2" fill="#A88945" opacity="0.35" />
                <circle cx="225" cy="170" r="1.5" fill="#D8B45A" opacity="0.25" />
              </motion.g>

              {/* 2. Whole Pizza (Base / Remaining Pie) */}
              <motion.g
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Pizza Crust Outer Glow Ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="140"
                  fill="none"
                  stroke="#D8B45A"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                />
                
                {/* The Remaining Pizza (excluding the separated slice) */}
                <rect
                  x="0"
                  y="0"
                  width="400"
                  height="400"
                  fill="url(#pizza-photo-pattern)"
                  clipPath="url(#pizza-remaining-pie)"
                />

                {/* Subtle depth shade along the cut edges */}
                <line x1="200" y1="200" x2="236.2" y2="64.8" stroke="#000000" strokeWidth="2.5" strokeOpacity="0.5" />
                <line x1="200" y1="200" x2="335.2" y2="163.8" stroke="#000000" strokeWidth="2.5" strokeOpacity="0.5" />
              </motion.g>

              {/* 3. Golden Cutting Sparkle / Incision Line (Phase 2: 1.3s - 2.1s) */}
              <motion.path
                d="M 236.2 64.8 L 200 200 L 335.2 163.8"
                fill="none"
                stroke="#F4EBDD"
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 0, 1, 1, 0],
                  opacity: [0, 0, 0.9, 0.6, 0],
                }}
                transition={{
                  duration: 2.3,
                  times: [0, 0.45, 0.7, 0.88, 1],
                  ease: 'easeInOut',
                }}
                style={{ filter: 'drop-shadow(0 0 6px #D8B45A)' }}
              />

              {/* 4. Cheese Stretch Strands (Phase 3: 2.1s - 3.2s) - GPU motion animation */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0, 0.95, 0.9, 0, 0],
                }}
                transition={{
                  duration: 5.1,
                  times: [0, 0.41, 0.45, 0.58, 0.64, 1],
                  ease: 'easeInOut',
                }}
              >
                {/* Center Apex Stretch */}
                <path
                  d="M 200 200 Q 215 195 232 172"
                  fill="none"
                  stroke="#F5CE6C"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.5))' }}
                />
                {/* Left Edge Stretch 1 */}
                <path
                  d="M 218 132 Q 232 125 248 110"
                  fill="none"
                  stroke="#FFF2C6"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                {/* Right Edge Stretch 2 */}
                <path
                  d="M 268 182 Q 282 175 296 160"
                  fill="none"
                  stroke="#E5A93C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Fine Molten Droplet */}
                <circle
                  cx="216"
                  cy="188"
                  r="1.8"
                  fill="#F5CE6C"
                />
              </motion.g>

              {/* 5. Subtle Warm Steam Rising Naturally from the Pizza (Phase 1-4) */}
              <g filter="url(#steam-blur)" opacity="0.45" pointerEvents="none">
                {/* Steam Plume 1 */}
                <motion.path
                  d="M 170 200 C 160 160, 185 130, 175 90 C 165 60, 180 30, 170 0"
                  fill="none"
                  stroke="#F4EBDD"
                  strokeWidth="14"
                  strokeLinecap="round"
                  initial={{ pathOffset: 0, opacity: 0 }}
                  animate={{
                    pathOffset: [0, -1],
                    opacity: [0, 0.4, 0.5, 0],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                {/* Steam Plume 2 */}
                <motion.path
                  d="M 230 210 C 245 170, 220 140, 235 100 C 245 70, 230 40, 240 10"
                  fill="none"
                  stroke="#F4EBDD"
                  strokeWidth="12"
                  strokeLinecap="round"
                  initial={{ pathOffset: 0, opacity: 0 }}
                  animate={{
                    pathOffset: [0, -1],
                    opacity: [0, 0.35, 0.45, 0],
                  }}
                  transition={{
                    duration: 3.6,
                    delay: 0.7,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </g>
            </svg>

            {/* 6. PIZZA CUTTER (Enters, cuts through, exits: 1.2s - 2.2s) */}
            <motion.div
              className="absolute pointer-events-none z-30"
              initial={{
                x: 180,
                y: -140,
                rotate: 15,
                opacity: 0,
              }}
              animate={{
                x: [180, 50, -5, 80, 220],
                y: [-140, -45, 15, 95, 140],
                rotate: [15, -15, -120, -260, -380],
                opacity: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 1.1,
                times: [0, 0.25, 0.5, 0.78, 1],
                ease: 'easeInOut',
              }}
            >
              {/* Premium Stainless-Steel Cutter Group */}
              <div className="pizza-cutter relative w-20 h-28 flex flex-col items-center">
                {/* Ergonomic Dark Charcoal Handle with Champagne Gold Accent */}
                <div 
                  className="w-4 h-16 rounded-full bg-[#181614] border border-[#D8B45A]/50 shadow-md flex flex-col justify-between items-center py-1"
                  style={{ borderRadius: '9999px' }}
                >
                  <div className="w-2.5 h-2 rounded-full bg-[#D8B45A]" style={{ borderRadius: '9999px' }} />
                  <div className="w-1.5 h-8 rounded-full bg-[#2C2620]" style={{ borderRadius: '9999px' }} />
                  <div className="w-2.5 h-1.5 rounded-full bg-[#D8B45A]" style={{ borderRadius: '9999px' }} />
                </div>
                
                {/* Metallic Fork Arm */}
                <div className="w-3 h-4 bg-gradient-to-b from-[#8E8B85] to-[#D5D3CF] rounded-xs" style={{ borderRadius: '2px' }} />

                {/* Rotating Stainless Wheel Blade */}
                <motion.div
                  animate={{ rotate: 720 }}
                  transition={{ duration: 1.5, delay: 1.1, ease: 'easeInOut' }}
                  className="w-12 h-12 rounded-full border border-[#D8B45A]/70 shadow-lg bg-gradient-to-tr from-[#9B9790] via-[#E8E6E2] to-[#B0ACA5] flex items-center justify-center"
                  style={{ borderRadius: '50%' }}
                >
                  {/* Metallic Glint */}
                  <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center" style={{ borderRadius: '50%' }}>
                    {/* Brass Center Rivet */}
                    <div className="w-3 h-3 rounded-full bg-[#D8B45A] border border-[#A88945]" style={{ borderRadius: '50%' }} />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* 7. CINEMATIC FLYING SLICE (Separates, slow-mo 3D flight, orbiting, camera dolly zoom) */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
              initial={{
                x: 0,
                y: 0,
                z: 0,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                scale: 1,
                opacity: 0,
              }}
              animate={{
                // Coordinated movement:
                // 0.0 - 2.1s: static with pizza
                // 2.2 - 3.2s: gentle pull separation
                // 3.2 - 4.3s: slow motion orbit around center
                // 4.3 - 4.9s: moves towards screen with zoom
                x: [0, 0, 15, 38, 48, 22, -26, -42, -18, 0, 0],
                y: [0, 0, -15, -35, -55, -82, -68, -32, -10, 0, 0],
                rotateX: [0, 0, 12, 24, 28, 22, 16, 10, 6, 0, 0],
                rotateY: [0, 0, -8, -18, -24, -14, 12, 18, 10, 0, 0],
                rotateZ: [0, 0, 4, 12, 18, 24, 14, -6, -2, 0, 0],
                scale: [1, 1, 1.02, 1.06, 1.12, 1.18, 1.25, 1.35, 1.6, 2.3, 3.4],
                opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 0.95, 0],
              }}
              transition={{
                duration: 5.1,
                times: [0, 0.38, 0.48, 0.58, 0.68, 0.76, 0.83, 0.88, 0.93, 0.97, 1],
                ease: [0.25, 1, 0.35, 1],
              }}
            >
              {/* Golden Halo around the Flying Slice */}
              <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px]">
                <div className="absolute inset-0 rounded-full bg-[#D8B45A]/15 blur-xl pointer-events-none" />

                {/* SVG Render of the flying wedge slice */}
                <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
                  {/* Subtle 3D bottom crust thickness */}
                  <path
                    d="M 200 200 L 236.2 64.8 A 140 140 0 0 1 335.2 163.8 Z"
                    fill="#3B2A1D"
                    transform="translate(1.5, 3)"
                    opacity="0.6"
                  />
                  {/* Photorealistic Slice Face */}
                  <rect
                    x="0"
                    y="0"
                    width="400"
                    height="400"
                    fill="url(#pizza-photo-pattern)"
                    clipPath="url(#pizza-slice-wedge)"
                    style={{
                      filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.85)) drop-shadow(0 0 16px rgba(216,180,90,0.4))',
                    }}
                  />
                  {/* Golden Crust Edge Rim */}
                  <path
                    d="M 236.2 64.8 A 140 140 0 0 1 335.2 163.8"
                    fill="none"
                    stroke="#D8B45A"
                    strokeWidth="2"
                    strokeOpacity="0.75"
                  />
                </svg>

                {/* Floating golden crumbs in zero-gravity around the slice */}
                {[
                  { x: -18, y: -25, size: 3, delay: 0.2 },
                  { x: 45, y: -10, size: 2.5, delay: 0.4 },
                  { x: 30, y: 35, size: 2, delay: 0.1 },
                  { x: -22, y: 20, size: 2.8, delay: 0.5 },
                  { x: 10, y: -45, size: 1.8, delay: 0.3 },
                ].map((crumb, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-[#D8B45A] shadow-[0_0_8px_#D8B45A]"
                    style={{
                      width: `${crumb.size}px`,
                      height: `${crumb.size}px`,
                      left: `calc(50% + ${crumb.x}px)`,
                      top: `calc(50% + ${crumb.y}px)`,
                    }}
                    animate={{
                      y: [0, -15, -25, -10],
                      x: [0, 8, -6, 4],
                      opacity: [0, 0.8, 0.9, 0],
                      scale: [0.6, 1.2, 1, 0.4],
                    }}
                    transition={{
                      duration: 2.4,
                      delay: 2.3 + crumb.delay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
            </motion.div>

          </div>

          {/* Bottom Title & Love Motto with Champagne Shimmer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
            className="relative z-20 mt-6 text-center space-y-2 max-w-sm px-4"
          >
            <h1 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#F4EBDD]">
              <span className="bg-gradient-to-r from-[#F4EBDD] via-[#D8B45A] to-[#F4EBDD] bg-clip-text text-transparent">
                THE PIZZA LOVER'S
              </span>
            </h1>

            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#D8B45A]/50" />
              <p className="text-xs sm:text-sm font-serif italic text-[#F4EBDD]/80 flex items-center gap-1.5">
                <span>Eat With Love</span>
                <Heart className="w-3.5 h-3.5 fill-[#D8B45A] text-[#D8B45A]" />
                <span>• Takiya Patan</span>
              </p>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#D8B45A]/50" />
            </div>

            {/* Subtle Progress Bar */}
            <div className="w-36 h-0.5 bg-white/10 rounded-full mx-auto mt-4 overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 4.8, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-[#A88945] via-[#D8B45A] to-[#F4EBDD]"
              />
            </div>
          </motion.div>

        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
